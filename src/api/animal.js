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
          name: "蜂猴",
          kind: "蜂猴",
          distribution: "东亚、南亚、东南亚",
          level: "1",
        },
        {
          id: 2,
          name: "东北虎",
          kind: "猫科",
          distribution: "中国东北",
          level: "1",
        },
        {
          id: 3,
          name: "丹顶鹤",
          kind: "鹤科",
          distribution: "中国东北，蒙古东部",
          level: "1",
        },
        {
          id: 4,
          name: "大熊猫",
          kind: "熊科",
          distribution: "中国四川、陕西、甘肃",
          level: "1",
        },
        {
          id: 5,
          name: "金丝猴",
          kind: "猴科",
          distribution: "中国西南山区",
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

// post 请求 获取动物详细信息，回显弹窗
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

// 删除动物信息
export const deleteAnimalDetail = (data) => {
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
