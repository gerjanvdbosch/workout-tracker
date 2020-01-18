import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ExercisesForm from '@/components/ExercisesForm.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    name: 'exercises',
    path: '/exercises',
    component: ExercisesForm
  }
]

const router = new VueRouter({
  routes
})

export default router
