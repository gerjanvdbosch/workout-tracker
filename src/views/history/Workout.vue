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

      <template slot="options">
        <v-menu content-class="elevation-2 c-tile">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list class="pt-0 pb-0 c-tile">
            <v-list-item @click="removeWorkout">
              <v-list-item-title>Remove workout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <div v-for="exercise in workout.exercises">
          <v-list-item class="c-list-item">
            <v-list-item-avatar>
              <ExerciseAvatar :name="exercise.name"/>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ exercise.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="(set, index) in exercise.sets" style="height: 48px;">
            <v-list-item-avatar>
              <v-avatar color="grey--text text--darken-2 c-border-grey" size="30">
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
    methods: {
      removeWorkout() {
        this.$store.commit('removeWorkout', this.$route.params.id);
        this.$router.replace('/');
      }
    },
    components: {
      Navigation,
      ExerciseAvatar
    }
  });
</script>
