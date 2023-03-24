import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  Canceler,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'

import type { IPromise } from './types'
import { repeatUrl } from './url'

export class Services {
  axios: AxiosInstance
  pendingMap: Map<string, Canceler> = new Map()

  constructor(config?: CreateAxiosDefaults) {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      timeout: 30 * 1000, // 超时时间：30s
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      ...config,
    })

    this.initRequestInterceptors()
    this.initResponseInterceptors()
  }

  // 初始化请求拦截器
  private initRequestInterceptors() {
    this.axios.interceptors.request.use((config) => {
      // 判断是否需要做重复请求处理
      this.checkPending(config)

      return config
    })
  }

  // 初始化响应拦截器
  private initResponseInterceptors() {
    this.axios.interceptors.response.use(
      (response) => {
        const { data, config } = response
        this.removePending(config)

        return data
      },
      (error: AxiosError) => {
        const { config } = error
        config && this.removePending(config)

        return Promise.reject(error)
      },
    )
  }

  // 校验是否需要处理重复请求
  private checkAllowRepeat(config: InternalAxiosRequestConfig) {
    const { url } = config
    return !!url && repeatUrl.includes(url)
  }

  // 生成每个请求唯一的键
  private generatePendingKey(config: InternalAxiosRequestConfig) {
    const { method, url, params } = config
    let { data } = config
    if (typeof data === 'string') data = JSON.parse(data)

    const keyStrs = [method, url]
    params && keyStrs.push(JSON.stringify(params))
    data && keyStrs.push(JSON.stringify(data))

    return keyStrs.join('&')
  }

  // 校验是否存在重复请求，使用节流模式处理请求，在接口未返回之前，后续重复请求都将做取消处理
  private checkPending(config: InternalAxiosRequestConfig) {
    if (this.checkAllowRepeat(config)) return

    const isPending = this.pendingMap.has(this.generatePendingKey(config))
    if (!isPending) return this.addPending(config)

    let cancelToken: Canceler | undefined
    config.cancelToken = new axios.CancelToken((cancel) => {
      cancelToken = cancel
    })
    cancelToken?.()
  }

  // 将请求添加进队列中
  private addPending(config: InternalAxiosRequestConfig) {
    const requestKey = this.generatePendingKey(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!this.pendingMap.has(requestKey)) {
          this.pendingMap.set(requestKey, cancel)
        }
      })
  }

  // 移除队列中的请求
  private removePending(config: InternalAxiosRequestConfig) {
    const requestKey = this.generatePendingKey(config)
    if (this.pendingMap.has(requestKey)) {
      const cancelToken = this.pendingMap.get(requestKey)

      // 取消请求
      cancelToken?.()
      // 删除map中对应的属性
      this.pendingMap.delete(requestKey)
    }
  }

  public get<D = unknown, P = unknown>(url: string, params?: P, config?: AxiosRequestConfig<P>) {
    return this.axios.get<D, IPromise<D>, P>(url, {
      params,
      ...config,
    })
  }

  public post<D = unknown, P = unknown>(url: string, data?: P, config?: AxiosRequestConfig<P>) {
    return this.axios.post<D, IPromise<D>, P>(url, data, { ...config })
  }
}

export default new Services()
