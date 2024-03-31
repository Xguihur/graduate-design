// 在这里封装函数，调用 对应的 api 接口
import request from './request'

// get 请求
export const getList = (params) => {
  return request({
    url: '/api/list',
    method: 'get',
    params: params,
  })
}

// post 请求
export const postList = (data) => {
  return request({
    url: '/api/list',
    method: 'post',
    data: data,
  })
}

// 配置 content-type 请求头
export const postList2 = (data) => {
  return request({
    url: '/api/list',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data,
  })
}