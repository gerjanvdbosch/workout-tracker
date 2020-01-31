<template>
  <div>
    <Navigation>
      <template slot="menu">
        <v-btn icon exact replace :to="{ name: 'history' }">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>

      <template slot="title">
        <v-toolbar-title>Workout</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <div v-for="exercise in workout.exercises">
          <v-list-item style="height: 61px;">
            <v-list-item-avatar>
              <ExerciseAvatar :name="exercise.name"/>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ exercise.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="(set, index) in exercise.sets"  style="height: 48px;">
            <v-list-item-avatar>
              <v-avatar style="border: 1px solid grey;" size="30">
                {{ index + 1 }}
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ set.weight }} kg x {{ set.reps }} reps</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import Navigation from '@/components/Navigation.vue';
  import ExerciseAvatar from '@/components/ExerciseAvatar.vue';
  import Workout from '@/models/Workout';

  export default Vue.extend({
    name: 'Workout',
    computed: {
      ...mapGetters(['getWorkout']),
      workout(): Workout {
        return this.getWorkout(this.$route.params.id);
      }
    },
    components: {
      Navigation,
      ExerciseAvatar
    }
  });
</script>
