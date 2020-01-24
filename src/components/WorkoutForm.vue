<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>Workout</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item
          v-for="(exercise, index) in workout.exercises"
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

          <v-list-item-action>
            <v-btn icon>
              <v-icon>remove_circle</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item :to="{ name: 'workout_exercises' }">
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
          <v-btn tile elevation="1" @click="saveWorkout">
            Save
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import uuid from 'uuid';
  import Navigation from '@/components/Navigation.vue';
  import Exercise from '@/models/Workout/Exercise';
  import Workout from '@/models/Workout/Workout';

  export default Vue.extend({
    name: 'WorkoutForm',
    props: {
      workout: {
        default: () => <Workout>{
          id: uuid(),
          date: new Date(),
          exercises: Array<Exercise>()
        }
      }
    },
    methods: {
      saveWorkout() {
        this.$store.commit('saveWorkout', this.$props.workout);
        this.$router.replace('/');
      }
    },
    components: {
      Navigation
    }
  });
</script>
