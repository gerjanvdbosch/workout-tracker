import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Progress from '../views/Progress.vue'
import Calendar from '../views/Calendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/history',
    component: History
  },
  {
    path: '/progress',
    component: Progress
  },
  {
    path: '/calendar',
    component: Calendar
  }
]

const router = new VueRouter({
  routes
})

export default router
