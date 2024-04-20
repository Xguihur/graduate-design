// 在这里封装函数，调用 对应的 api 接口
import request from "./request";

// 获取审批列表
export const getApprovalTable = (params) => {
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
          createrId: 2567,
          status: "审批中",
          createTime: "2019-08-07 15:34:56",
          lastUpdateTime: "2019-08-07 16:34:56",
        },
        {
          id: 2,
          createrId: 8329,
          status: "已通过",
          createTime: "2017-02-07 10:35:52",
          lastUpdateTime: "2017-09-27 12:24:35",
        },
        {
          id: 3,
          createrId: 6296,
          status: "已驳回",
          createTime: "2022-06-07 22:31:42",
          lastUpdateTime: "2022-08-07 15:34:56",
        },
      ],
    });
  });
};
// 根据 id 获取审批详情，回显数据
export const getApprovalDetail = (params) => {
  // return request({
  //   url: '/api/images/other/image-1712746386275.jpeg',
  //   method: 'get',
  //   params: params,
  // });
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        id: 1,
        name: "圆鼻巨蜥",
        address: "亚洲西南部",
        men: "脊索动物门",
        gang: "爬行纲",
        mu: "有鳞目",
        ke: "巨蜥科",
        shu: "巨蜥属",
        zhong: "原鼻巨蜥",
        level: "1",
      },
    });
  });
};

// 完成审批，通过或者驳回
export const postApproval = (data) => {
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
