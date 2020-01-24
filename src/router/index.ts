import Vue from 'vue';
import VueRouter from 'vue-router';

import History from '@/views/History.vue';
import Body from '@/views/Body.vue';
import ExercisesForm from '@/components/ExercisesForm.vue';
import WorkoutForm from '@/components/WorkoutForm.vue';
import WorkoutExercises from '@/views/Workout/Exercises.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'history',
    path: '/',
    component: History
  },
  {
    name: 'exercises',
    path: '/exercises',
    component: ExercisesForm
  },
  {
    name: 'body',
    path: '/body',
    component: Body
  },
  {
    name: 'workout',
    path: '/workout',
    component: WorkoutForm
  },
  {
    name: 'workout_exercises',
    path: '/workout/exercises',
    component: WorkoutExercises
  }
];

const router = new VueRouter({
  routes
});

export default router;
