import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MarketPlace from '../views/MarketPlace.vue';
import Index from '../views/Index.vue';
import ResultController from '../views/ResultController.vue';
import Advice from '../views/ImgSerachPath/Advice.vue';
import Ideas from '../views/ImgSerachPath/Ideas.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/marketplace',
    name: 'MarketPlace',
    component: MarketPlace
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/result',
    name: 'ResultController',
    component: ResultController
  },
  {
    path: '/ImgSerach/advice',
    name: 'Advice',
    component: Advice
  }, 
  {
    path: '/ImgSerach/ideas',
    name: 'Ideas',
    component: Ideas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
