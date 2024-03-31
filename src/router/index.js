import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // 动态加载路由组件
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/pages/home'),
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/pages/login')
    },
  ]
})
