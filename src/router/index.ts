import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ExerciseForm from '@/components/ExerciseForm.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    name: 'exercise',
    path: '/exercise',
    component: ExerciseForm
  }
]

const router = new VueRouter({
  routes
})

export default router
