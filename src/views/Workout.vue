<template>
  <div>
    <Navigation>
      <template slot="title">
        <v-toolbar-title>Workout</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item
          v-for="(exercise, index) in workout.exercises"
          replace
          :to="{ name: 'workout_exercise', params: { 'index': index } }"
        >
          <v-list-item-avatar>
            <v-avatar
              color="primary"
              class="white--text"
              size="38"
            >
              {{ index + 1 }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ exercise.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ exercise.sets.length }} sets</v-list-item-subtitle>
          </v-list-item-content>

<!--          <v-list-item-action>-->
<!--            <v-btn icon>-->
<!--              <v-icon>mdi-minus</v-icon>-->
<!--            </v-btn>-->
<!--          </v-list-item-action>-->
        </v-list-item>

        <v-list-item @click="addExercise">
          <v-list-item-avatar>
            <v-avatar color="grey" size="38">
              <v-icon dark>mdi-plus</v-icon>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Add exercise</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-card-text v-if="workout.exercises.length">
          <v-btn tile elevation="1" @click="finishWorkout">
            Save
          </v-btn>
        </v-card-text>
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
      addExercise() {
        this.$router.replace({ name: 'workout_exercises' });
      },
      finishWorkout() {
        this.$store.commit('finishWorkout');
        this.$router.replace('/');
      }
    },
    components: {
      Navigation
    }
  });
</script>
