<template>
  <div>
    <Navigation>
      <template slot="title">
        <v-toolbar-title>History</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <div v-if="workouts.length">
          <v-list-item
            v-for="workout in workouts"
            replace
            :to="{ name: 'history_workout', params: { id: workout.id } }"
            class="c-list-item"
          >
            <v-list-item-avatar>
              <v-avatar color="grey lighten-2" size="38">
                <v-icon>mdi-weight-lifter</v-icon>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ workout.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ workout.date|moment('calendar') }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>

        <div v-else>
          <v-list-item class="c-list-item">
            <v-list-item-content>
              <v-list-item-title class="grey--text text-center">
                No workouts found
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
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
