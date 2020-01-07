import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import AddWorkout from '@/views/AddWorkout.vue'
import EditWorkout from '@/views/EditWorkout.vue'

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
  },
  {
    name: 'workout_edit',
    path: '/workout/:id/edit',
    component: EditWorkout
  }
]

const router = new VueRouter({
  routes
})

export default router
