import axios from 'axios'

const services = axios.create({
  baseURL: '/api',
  timeout: 30 * 1000, // 超时时间：30s
})

export default services
