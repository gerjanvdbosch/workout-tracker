<template>
  <v-container fluid>

    <v-card elevation="1">
      <v-card-title>
        Edit Workout
      </v-card-title>

      <v-card-text>
        <WorkoutForm :workout="workout"/>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import WorkoutForm from '@/components/WorkoutForm.vue';
import Workout from '@/models/Workout';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'EditWorkout',
  computed: {
    ...mapGetters(['getWorkout']),
    workout(): Workout {
      return Object.assign({}, <Workout>this.getWorkout(this.$route.params.id));
    }
  },
  components: {
    WorkoutForm
  }
});
</script>
