// 在这里封装函数，调用 对应的 api 接口
import request from "./request";

// 用户登录
export const apiLogin = (params) => {
  // return request({
  //   url: '/api/images/other/image-1712746386275.jpeg',
  //   method: 'get',
  //   params: params,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: "ok",
    });
  });
};
