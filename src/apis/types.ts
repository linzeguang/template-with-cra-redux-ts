/**
 * @Author linzeguang
 * @Date 2023-03-24 10:56:36
 * @LastEditTime 2023-04-07 15:41:04
 * @LastEditors linzeguang
 * @Description
 */

export type IPromise<T = unknown, L = { [key: string]: unknown }> = {
  code: number
  message: string
  data: T
  isSuccess: boolean
} & L

export interface IList {
  empty: boolean
  notEmpty: boolean
  pageIndex: number
  pageSize: number
  totalCount: number
  totalPages: number
}

export type IListParams<P> = {
  current: number
  size: number
} & P

export type EmptyData = { [key: string]: unknown }
