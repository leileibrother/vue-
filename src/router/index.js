import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/views/HelloWorld'
// import Login from '@/views/Login'
// import Home from '@/views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component (resolve) {
        require(['views/HelloWorld.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: '登录',
      component (resolve) {
        require(['views/login.vue'], resolve)
      }
    },
    {
      path: '/index',
      name: '主页',
      component (resolve) {
        require(['views/base.vue'], resolve)
      },
      children: [
        {
          path: '/index',
          title: '主页',
          component (resolve) {
            require(['views/index.vue'], resolve)
          }
        } 
      ]
    },
    {
      path: '/home',
      name: '主页',
      component (resolve) {
        require(['views/base.vue'], resolve)
      },
      children: [
        {
          path: '/home/index',
          title: '个人中心',
          component (resolve) {
            require(['views/home/index.vue'], resolve)
          }
        } 
      ]
    },
    {
      path: '/contact',
      name: "联系",
      component (resolve) {
        require(['views/base.vue'], resolve)
      },
      children: [
        {
          path: '/contact/index',
          title: '联系我们',
          component (resolve) {
            require(['views/contact/index.vue'], resolve)
          }
        }
      ]
    }
  ]
})
export default router

