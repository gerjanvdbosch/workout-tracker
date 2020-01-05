import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import AddWorkout from '@/views/AddWorkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
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
