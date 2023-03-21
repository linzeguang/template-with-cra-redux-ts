import services from '../services'
import type { IList, IListParams } from '../types'

interface ListData {
  id: number
  sex: 0 | 1
  userName: string
  birthday: string
  address: string
}

export const fetchList = (page = 1, page_size = 10) =>
  services.post<IList<ListData>, IListParams>('/list', { page, page_size })

export const fetchTest = () => services.get<string>('/test', { a: 1, b: 3 })

export const fetchTodo = () => services.get('https://jsonplaceholder.typicode.com/todos')
