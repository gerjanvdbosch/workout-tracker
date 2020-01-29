import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'history',
    path: '/',
    component: () => import('@/views/History.vue')
  },
  {
    name: 'body',
    path: '/body',
    component: () => import('@/views/Body.vue')
  },
  {
    name: 'exercises',
    path: '/exercises',
    component: () => import('@/views/ExerciseList.vue')
  },
  {
    name: 'workout',
    path: '/workout',
    component: () => import('@/views/Workout.vue')
  },
  {
    name: 'workout_exercise',
    path: '/workout/exercise/:index',
    component: () => import('@/views/workout/Exercise.vue')
  },
  {
    name: 'workout_exercises',
    path: '/workout/exercises',
    component: () => import('@/views/workout/ExerciseList.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
