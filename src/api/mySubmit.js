// 在这里封装函数，调用 对应的 api 接口
import request from "./request";

// get 请求
export const getSubmitTable = (params) => {
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
          approvalId: 2567,
          status: "审批中",
          createTime: "2019-08-07 15:34:56",
          lastUpdateTime: "2019-08-07 16:34:56",
        },
        {
          id: 2,
          approvalId: 8329,
          status: "已通过",
          createTime: "2017-02-07 10:35:52",
          lastUpdateTime: "2017-09-27 12:24:35",
        },
        {
          id: 3,
          approvalId: 6296,
          status: "已驳回",
          createTime: "2022-06-07 22:31:42",
          lastUpdateTime: "2022-08-07 15:34:56",
        },
      ],
    });
  });
};

// 获取动物信息进行回显
export const getAnimalDetail = (params) => {
  // return request({
  //   url: '/api/images/other/image-1712746386275.jpeg',
  //   method: 'get',
  //   params: params,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        id: 2,
        name: "东北虎",
        address: "东北",
        gang: "爬行纲",
        mu: "目",
        ke: "科",
        shu: "属",
        zhong: "种",
        level: "1",
      },
    });
  });
};

// post 请求
export const postAnimalDetail = (data) => {
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
