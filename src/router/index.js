import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
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
          meta: {
            title: '基础管理',
            icon: 'el-icon-receiving'
          },
          children: [
            {
              path: 'animal',
              name: 'animal',
              component: () => import('@/pages/base/animal'),
              meta: {
                title: '动物信息管理',
                icon: 'none'
              },
            },
          ]
        },
        {
          path: 'approval',
          name: 'approval',
          redirect: '/approval/mySubmit',
          component: () => import('@/pages/approval'),
          meta: {
            title: '我的审批',
            icon: 'el-icon-document-checked'
          },
          children: [
            {
              path: 'mySubmit',
              name: 'mySubmit',
              component: () => import('@/pages/approval/mySubmit'),
              meta: {
                title: '我发起的',
                icon: 'none'
              },
            },
            {
              path: 'myApprove',
              name: 'myApprove',
              component: () => import('@/pages/approval/myApprove'),
              meta: {
                title: '我审核的',
                icon: 'none'
              },
            },
          ]
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/pages/user'),
          meta: {
            title: '用户权限管理',
            icon: 'el-icon-lock'
          },
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('@/pages/account'),
          meta: {
            title: '账户管理',
            icon: 'el-icon-setting'
          },
        },

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

router.beforeEach((to, from, next) => {
  // 可以在这里进行路由权限验证等操作
  // 例如检查用户是否登录，是否有权限访问该路由
  next();
});
export default router;
