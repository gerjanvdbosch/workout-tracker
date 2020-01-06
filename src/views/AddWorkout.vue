<template>
  <v-container fluid>

    <v-card elevation="1">
      <v-card-title>
        Add Workout
      </v-card-title>

      <v-card-text>
        <WorkoutForm/>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import WorkoutForm from '@/components/WorkoutForm.vue';

  export default Vue.extend({
    name: 'AddWorkout',
    components: {
      WorkoutForm
    }
  });
</script>
