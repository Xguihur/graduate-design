// 在这里对 axios 进行一下封装，创建 axios 实例的同时，配置请求拦截器和响应拦截器，在拦截器中对 登录 相关的逻辑进行处理
import axios from 'axios';
import router from '@/router';
// 创建 axios 实例
const request = axios.create({
  baseURL: 'api', // api 的 base_url
  timeout: 5000, // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use(config => {
  // 从 localStorage 中获取 token，判断 token 是否存在，如果存在，则将 token 添加到请求头中
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers.Authorization = token;
  //   return config;
  // }else{
  //   // 跳转登录页面
  //   this.$router.push('/login');
  // }
  return config;
}, error => {
  Promise.reject(error);
});
// 响应拦截器
request.interceptors.response.use(res => {
  if (res.data.code === 200) {
    return res.data;
  }
}, err => {
  if (err.response.status === 401) {
    // 跳转登录页面
    localStorage.removeItem('token');
    this.$router.push('/login');
  } else {
    return Promise.reject(err);
  }
});

export default request;