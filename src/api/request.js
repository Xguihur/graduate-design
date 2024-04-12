// 在这里对 axios 进行一下封装，创建 axios 实例的同时
import axios from 'axios';
import router from '@/router';
import { Message } from 'element-ui';
// 创建 axios 实例
const request = axios.create({
  baseURL: 'api', // api 的 base_url
  timeout: 5000, // 请求超时时间
});

const redirectToLogin = () => {
  localStorage.setItem('toLogin', 'true');
  localStorage.removeItem('token');
  // 跳转登录页面 带上当前路由的 path
  router.push({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};

// 请求拦截器
request.interceptors.request.use(config => {
  // 从 localStorage 中获取 token，判断 token 是否存在，如果存在，则将 token 添加到请求头中
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
    return config;
  } else {
    // 加一层判断，取消多个请求重复跳转登录页面造成参数重复和刷新的bug
    if (!localStorage.getItem('toLogin')) {
      Message({
        message: '请先登录',
        type: 'error'
      });
      redirectToLogin();
    }
  }
}, error => {
  Promise.reject(error);
});
// 响应拦截器
request.interceptors.response.use(res => {
  if (res.data.code === 200) {
    return res.data;
  }
  if (res.data.code === 401) {
    // 跳转登录页面
    if (!localStorage.getItem('toLogin')) {
      Message({
        message: '身份信息失效或已过期，请重新登录',
        type: 'error'
      });
      redirectToLogin();
    }
  }
}, err => {
  return Promise.reject(err);
});

export default request;