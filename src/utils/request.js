// 基于 axios 封装的请求模块
import ajax from 'axios'
// 新建一个新的axios实例
const axios = ajax.create({
  // 基地址
  baseURL: 'http://geek.itheima.net/',
  timeout: 20000
})

// 导出自定义函数, 参数对象解构赋值
export default ({ url, method = 'GET', params, data, headers }) => {
  return axios({
    url: url,
    method: method,
    params: params,
    data: data,
    headers: headers
  })
}
