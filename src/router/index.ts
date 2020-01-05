import Vue from 'vue'
import VueRouter from 'vue-router'

import History from '@/views/History.vue'
import AddWorkout from '@/views/AddWorkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: History
  },
  {
    name: 'workout_add',
    path: '/workout/add',
    component: AddWorkout
  }
]

const router = new VueRouter({
  routes
})

export default router
