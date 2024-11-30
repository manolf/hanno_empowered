import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CalendarView from '../views/CalendarView.vue';
//import TaleView from '../views/TaleView.vue';
import TeamView from '../views/TeamView.vue';
import DayView from '../views/DayView.vue';
import SportView from '../views/SportView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarView
  },
  //dynamic version: not working in mobile view
  {
    path: '/calendar/:id',
    name: 'DayView',
    component: DayView,
    props: (route) => ({ id: Number(route.params.id) })
  },

  // No dynamic segment in the path
  // {
  //   path: '/kachel',
  //   name: 'KachelView',
  //   component: KachelComponent,
  //   props: (route) => ({
  //     dayId: route.query.dayId,
  //     clicked: route.query.clicked === 'true', // Convert string to boolean
  //     itemArray: JSON.parse(route.query.itemArray), // Parse JSON if needed
  //   }),
  // },

  // {
  //   path: '/tale',
  //   name: 'Tale',
  //   component: TaleView
  // },
  {
    path: '/team',
    name: 'Team',
    component: TeamView
  },
  {
  path: '/sport',
  name: 'Sport',
  component: SportView
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
 // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
