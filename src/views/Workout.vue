<template>
  <div>
    <Navigation>
      <template slot="title">
        <v-toolbar-title>Workout</v-toolbar-title>
      </template>

      <template slot="options">
        <v-btn
          v-if="workout.exercises.length"
          @click="finishWorkout"
          icon
        >
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item
          v-for="(exercise, index) in workout.exercises"
          replace
          :to="{ name: 'workout_exercise', params: { 'index': index } }"
          style="height: 56px;"
        >
          <v-list-item-avatar>
           <ExerciseAvatar :name="exercise.name"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ exercise.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ exercise.sets.length }} sets</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          replace
          :to="{ name: 'workout_exercise_list' }"
          style="height: 56px;"
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
  import ExerciseAvatar from '@/components/ExerciseAvatar.vue';

  export default Vue.extend({
    name: 'Workout',
    computed: {
      ...mapGetters({
        workout: 'getActiveWorkout'
      })
    },
    methods: {
      finishWorkout() {
        this.$store.commit('finishWorkout');
        this.$router.replace('/');
      }
    },
    components: {
      Navigation,
      ExerciseAvatar
    }
  });
</script>
