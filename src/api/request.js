// 在这里对 axios 进行一下封装，创建 axios 实例的同时，配置请求拦截器和响应拦截器，在拦截器中对 登录 相关的逻辑进行处理
import axios from 'axios';
// 创建 axios 实例
const request = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 5000, // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use(config => {
  // 从 localStorage 中获取 token，判断 token 是否存在，如果存在，则将 token 添加到请求头中
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});
// 响应拦截器
request.interceptors.response.use(res => {
  // 大概是在这里处理后端的 token 校验，如果后端返回 401，则说明 token 失效，需要重新登录 ，但 也可以在 请求拦截器 中处理 -- 我更倾向在响应拦截器中处理，这样不会导致每次请求前都发一次请求校验 token
  if (res.data.code === 200) {
    return res.data;
  }
});

export default request;