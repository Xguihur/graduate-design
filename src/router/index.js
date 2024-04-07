import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // 动态加载路由组件
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/base/animal',
      component: () => import('@/pages/home'),
      children: [
        {
          path: 'base',
          name: 'base',
          redirect: '/base/animal',
          component: () => import('@/pages/base'),
          children: [
            {
              path: 'animal',
              name: 'animal',
              component: () => import('@/pages/base/animal'),
            },
          ]
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/pages/user'),
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('@/pages/account'),
        },
        {
          path: 'approval',
          name: 'approval',
          redirect: '/approval/mySubmit',
          component: () => import('@/pages/approval'),
          children: [
            {
              path: 'mySubmit',
              name: 'mySubmit',
              component: () => import('@/pages/approval/mySubmit'),
            },
            {
              path: 'myApprove',
              name: 'myApprove',
              component: () => import('@/pages/approval/myApprove'),
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404page',
      component: () => import('@/pages/404page'),
    },
  ]
});
