import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import specView from '../views/specView.vue'
import addView  from '@/views/AddView.vue'
import CartView from '@/views/CartView.vue'
import CartChoView from '../views/CartChoView.vue'
import LoginView from '../views/LoginView.vue'
import contactView from '../views/contactView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contactView',
    component: contactView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product/:id',
    name: 'proView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/proView.vue')
  },
  {
    path: '/spec',
    name: 'specView',
    component: specView
  },
  
  {
    path: '/add',
    name: 'addView',
    component: addView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  
  {
    path: '/cartchoose',
    name: 'CartChoView',
    component: CartChoView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { hideNavigation: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
