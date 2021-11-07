import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/Login.vue'
import Home from '../views/home/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'主页',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
    meta:{
      title:'登录'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'主页'
    }
  },
  {
    path: '/gobang',
    name: 'Gobang',
    component: () => import('../views/game/gobang/Gobang.vue'),
    meta:{
      title:'五子棋'
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main/Main.vue'),
    meta:{
      title:'main'
    }
  },
  {
    path:'/Main/life',
    name: 'Life',
    component: () => import('../views/life/Life.vue'),
    meta:{
      title:'life'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from,next) => {
  document.title = to.meta.title as string
  next()
  // ...
  // 返回 false 以取消导航
  return false
})

export default router
