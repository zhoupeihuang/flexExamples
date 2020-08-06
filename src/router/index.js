import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import testmd from '@/docs/test.md'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: testmd,
    meta:{title:"markdown"}
  },   
  
  {
    path: '/flex-direction',
    name: 'flex-direction',
    component: () => import('../views/flex-direction/index.vue'),
    meta:{title:"flex-direction"}
  },
  {
    path: '/flex-wrap',
    name: 'flex-wrap',
    component: () => import('../views/flex-wrap/index.vue'),
    meta:{title:"flex-wrap"}
  },
  {
    path: '/flex-flow',
    name: 'flex-flow',
    component: () => import('../views/flex-flow/index.vue'),
    meta:{title:"flex-flow"}
  },
  {
    path: '/justify-content',
    name: 'justify-content',
    component: () => import('../views/justify-content/index.vue'),
    meta:{title:"justify-content"}
  },
  {
    path: '/align-items',
    name: 'align-items',
    component: () => import('../views/align-items/index.vue'),
    meta:{title:"align-items"}
  },
  {
    path: '/align-content',
    name: 'align-content',
    component: () => import('../views/align-content/index.vue'),
    meta:{title:"align-content"}
  },  
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/index.vue'),
    meta:{title:"order"}
  },
  {
    path: '/flex-grow',
    name: 'flex-grow',
    component: () => import('../views/flex-grow/index.vue'),
    meta:{title:"flex-grow"}
  },
  {
    path: '/flex-shrink',
    name: 'flex-shrink',
    component: () => import('../views/flex-shrink/index.vue'),
    meta:{title:"flex-shrink"}
  },
  {
    path: '/flex-basis',
    name: 'flex-basis',
    component: () => import('../views/flex-basis/index.vue'),
    meta:{title:"flex-basis"}
  },
  {
    path: '/flex',
    name: 'flex',
    component: () => import('../views/flex/index.vue'),
    meta:{title:"flex"}
  },
  {
    path: '/align-self',
    name: 'align-self',
    component: () => import('../views/align-self/index.vue'),
    meta:{title:"align-self"}
  }
]

const router = new VueRouter({
  routes
})

export default router
