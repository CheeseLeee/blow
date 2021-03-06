import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/Login.vue'

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
    path: '/gobang',
    name: 'Gobang',
    component: () => import('../views/game/gobang/Gobang.vue'),
    meta:{
      title:'五子棋'
    }
  },
  {
    path: '/tetris',
    name: ' ',
    component: () => import('../views/game/tetris/Tetris.vue'),
    meta:{
      title:'tetis'
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
    path:'/Main/interreactive-Resume',
    name: 'interreactiveResume',
    component: () => import('../views/interreactiveResume/interreactiveResume.vue'),
    meta:{
      title:'interreactiveResume'
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
