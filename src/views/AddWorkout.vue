<template>
  <v-card elevation="1">
    <v-card-text>
      <h3>Add Workout</h3>
      <WorkoutForm v-on:save="save"/>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue';
  import WorkoutForm from "@/components/WorkoutForm.vue";
  import Workout from "@/models/Workout";

  export default Vue.extend({
    name: 'AddWorkout',

    components: {
      WorkoutForm
    },

    methods: {
      save(workout: Workout) {
      }
    },
  });
</script>
