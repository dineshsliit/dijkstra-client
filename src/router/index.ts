import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DijkstraCalculator from '../components/DijkstraCalculator.vue'
import AboutView from '../views/AboutView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: DijkstraCalculator,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
