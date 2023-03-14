export interface IPromise<T = unknown> {
  code: number
  message: string
  data: T
}

export interface IList<T = unknown> {
  page: number
  page_size: number
  total: number
  data: T[]
}

export type IListParams = Omit<IList, 'total' | 'data'>
