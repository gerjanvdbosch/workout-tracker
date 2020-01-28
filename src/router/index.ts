import Vue from 'vue';
import VueRouter from 'vue-router';

import Goals from '@/views/Goals.vue';
import History from '@/views/History.vue';
import Body from '@/views/Body.vue';
import ExercisesForm from '@/views/ExercisesForm.vue';
import WorkoutForm from '@/views/Workout/WorkoutForm.vue';
import ExerciseForm from '@/views/Workout/ExerciseForm.vue';
import WorkoutExercises from '@/views/Workout/Exercises.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'goals',
    path: '/',
    component: Goals
  },
  {
    name: 'history',
    path: '/history',
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
  },
  {
    name: 'workout_exercise',
    path: '/workout/exercise/:index',
    component: ExerciseForm
  }
];

const router = new VueRouter({
  routes
});

export default router;
