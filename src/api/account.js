// 在这里封装函数，调用 对应的 api 接口
import request from "./request";

// 获取用户列表
export const getAccountTable = (params) => {
  // return request({
  //   url: '/api/images/other/image-1712746386275.jpeg',
  //   method: 'get',
  //   params: params,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          id: 1,
          name: "guihua",
          sex: "男",
          account: "13898989898",
          level: "超级管理员",
          lastUpdateTime: "2019-05-08 14:36",
        },
        {
          id: 2,
          name: "lihua",
          sex: "男",
          account: "15623455334",
          level: "管理员",
          lastUpdateTime: "2017-11-08 19:36",
        },
        {
          id: 3,
          name: "wangxiang",
          sex: "女",
          account: "13232664764",
          level: "操作员",
          lastUpdateTime: "2020-12-16 08:56",
        },
        {
          id: 4,
          name: "lifei",
          sex: "男",
          account: "17876542234",
          level: "操作员",
          lastUpdateTime: "2022-05-19 18:38",
        },
      ],
    });
  });
};
// 获取用户信息回显
export const getAccountDetail = (params) => {
  // return request({
  //   url: '/api/images/other/image-1712746386275.jpeg',
  //   method: 'get',
  //   params: params,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        id: 4,
        name: "lifei",
        sex: "1",
        account: "17876542234",
        level: "1",
      },
    });
  });
};

// 修改用户信息
export const modifyAccount = (data) => {
  // return request({
  //   url: "/api/list",
  //   method: "post",
  //   data: data,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: "ok",
    });
  });
};

// 删除用户信息
export const deleteAccount = (data) => {
  // return request({
  //   url: "/api/list",
  //   method: "post",
  //   data: data,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: "ok",
    });
  });
};

// 验证旧密码
export const checkOldPassword = (data) => {
  // return request({
  //   url: "/api/list",
  //   method: "post",
  //   data: data,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        message: "ok",
      },
    });
  });
};
// 修改密码
export const modifyPassword = (data) => {
  // return request({
  //   url: "/api/list",
  //   method: "post",
  //   data: data,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: "ok",
    });
  });
};

// 重置密码
export const resetPassword = (data) => {
  // return request({
  //   url: "/api/list",
  //   method: "post",
  //   data: data,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: "ok",
    });
  });
};
