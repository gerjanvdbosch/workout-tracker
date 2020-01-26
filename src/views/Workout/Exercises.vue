<template>
  <ExercisesForm :selectable="true" @selectExercise="selectExercise">
    <template v-slot:menu>
      <v-btn icon exact replace :to="{ name: 'workout' }">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
  </ExercisesForm>
</template>

<script lang="ts">
  import Vue from 'vue';
  import ExercisesForm from '@/components/ExercisesForm.vue';

  export default Vue.extend({
    name: 'Exercises',
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
