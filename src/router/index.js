import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ImgSerach from '../views/ImgSerach.vue'
import ResultController from '../views/ResultController.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ImgSerach',
    name: 'ImgSerach',
    component: ImgSerach
  },
  {
    path:'/result',
    name: 'ResultController',
    component: ResultController
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
