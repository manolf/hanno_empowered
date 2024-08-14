import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CalendarView from '../views/CalendarView.vue';
import TaleView from '../views/TaleView.vue';
import DayView from '../views/DayView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarView
  },
  {
    path: '/calendar/:id',
    name: 'DayView',
    component: DayView,
    props: true
  },
  {
    path: '/tale',
    name: 'Tale',
    component: TaleView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
