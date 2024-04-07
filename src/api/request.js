// 在这里对 axios 进行一下封装，创建 axios 实例的同时，配置请求拦截器和响应拦截器，在拦截器中对 登录 相关的逻辑进行处理
import axios from 'axios';
// 创建 axios 实例
const request = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 5000, // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use(config => {
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});
// 响应拦截器
request.interceptors.response.use(res => {
  if (res.data.code === 200) {
    return res.data;
  }
});

export default request;