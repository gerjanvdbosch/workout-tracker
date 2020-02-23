<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>Workout</v-toolbar-title>
      </template>

      <template v-slot:options v-if="workout.exercises.length">
        <v-menu content-class="elevation-2 c-tile">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list class="pt-0 pb-0 c-tile">
            <v-list-item @click="finishWorkout">
              <v-list-item-title>Finish workout</v-list-item-title>
            </v-list-item>

            <v-list-item @click="cancelWorkout">
              <v-list-item-title>Cancel workout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item
          v-for="(exercise, index) in workout.exercises"
          :key="index"
          replace
          :to="{ name: 'workout_exercise', params: { 'index': index } }"
          class="c-list-item"
        >
          <v-list-item-avatar>
            <v-avatar :color="exercise.color" class="white--text" size="38">
              {{ exercise.code }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ exercise.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ exercise.sets.length }} sets</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          replace
          :to="{ name: 'workout_exercise_list' }"
          class="c-list-item"
        >
          <v-list-item-avatar>
            <v-avatar color="grey lighten-2" size="38">
              <v-icon>mdi-plus</v-icon>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Add exercise</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import Navigation from '@/components/Navigation.vue';

  export default Vue.extend({
    name: 'Workout',
    computed: {
      ...mapGetters({
        workout: 'getActiveWorkout'
      })
    },
    methods: {
      finishWorkout() {
        this.$store.commit('finishActiveWorkout');
        this.goBack();
      },
      cancelWorkout() {
        this.$store.commit('cancelActiveWorkout');
        this.goBack();
      },
      goBack() {
        this.$router.replace('/');
      }
    },
    components: {
      Navigation
    }
  });
</script>
