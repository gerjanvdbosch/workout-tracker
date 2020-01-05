<template>
  <v-container fluid>

    <v-card
      v-for="workout in workouts"
      class="mb-3"
      elevation="1"
    >
      <v-card-title>
        {{ workout.date|moment('calendar') }}
        <v-spacer/>

        <v-btn icon>
          <v-icon color="error">remove_circle</v-icon>
        </v-btn>
      </v-card-title>

      <v-list dense>
        <v-list-item>
          <v-list-item-content>Body Weight</v-list-item-content>
          <v-list-item-content>{{ workout.bodyWeight }} kg</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapState } from 'vuex';

  export default Vue.extend({
    name: 'Home',

    computed: {
      ...mapState(['workouts'])
    }
  });
</script>
