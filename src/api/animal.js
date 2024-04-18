// 在这里封装函数，调用 对应的 api 接口
import request from "./request";

// get 请求
export const getAnimalTable = (params) => {
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
          name: "大熊猫",
          kind: "熊",
          distribution: "亚洲",
          level: "1",
        },
        {
          id: 2,
          name: "东北虎",
          kind: "猫科",
          distribution: "东北",
          level: "1",
        },
        {
          id: 3,
          name: "丹顶鹤",
          kind: "鸟类",
          distribution: "亚洲",
          level: "1",
        },
        {
          id: 4,
          name: "金钱豹",
          kind: "猫科",
          distribution: "韶关",
          level: "1",
        },
        {
          id: 5,
          name: "金丝猴",
          kind: "猴科",
          distribution: "广东",
          level: "1",
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
