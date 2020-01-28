<template>
  <ExercisesForm
    :selectable="true"
    :selected-exercises="selectedExercises"
    @selectExercise="selectExercise"
  >
    <template v-slot:menu>
      <v-btn icon exact replace :to="{ name: 'workout' }">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
  </ExercisesForm>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import ExercisesForm from '@/views/ExercisesForm.vue';
  import Exercise from '@/models/Workout/Exercise';

  export default Vue.extend({
    name: 'Exercises',
    computed: {
      ...mapGetters(['getWorkoutExercises']),
      selectedExercises() {
        return this.getWorkoutExercises.map(function (exercise: Exercise) {
          return exercise.name
        });
      }
    },
    methods: {
      selectExercise(exercise: string) {
        this.$store.commit('addWorkoutExercise', exercise);
        this.$router.replace({ name: 'workout' });
      }
    },
    components: {
      ExercisesForm
    },
  });
</script>
