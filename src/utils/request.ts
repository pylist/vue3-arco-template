import Axios from 'axios'
import { Message } from '@arco-design/web-vue'

const baseURL = ''

const service = Axios.create({
  baseURL,
  timeout: 20000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    Message.error(error)
    return Promise.reject(error)
  }
)

export default service