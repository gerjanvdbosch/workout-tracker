<template>
  <div>
    <Navigation>
      <template slot="title">
        <v-toolbar-title>History</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item
          v-for="workout in workouts"
          replace
          :to="{ name: 'history_workout', params: { id: workout.id } }"
          style="height: 61px;"
        >
          <v-list-item-avatar>
            <v-avatar color="grey lighten-2" size="38">
              <v-icon>mdi-weight-lifter</v-icon>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ workout.date|moment('calendar') }}</v-list-item-title>
            <v-list-item-subtitle>{{ workout.exercises.length }} exercises</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';
  import {mapGetters} from 'vuex';

  export default Vue.extend({
    name: 'History',
    computed: {
      ...mapGetters({
        workouts: 'getWorkouts'
      })
    },
    components: {
      Navigation
    },
  });
</script>
