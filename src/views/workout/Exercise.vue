<template>
  <div>
    <Navigation>
      <template slot="menu">
        <v-btn icon @click="updateWorkout">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>

      <template slot="title">
        <v-toolbar-title>Exercise</v-toolbar-title>
      </template>

      <template slot="options">
        <v-menu content-class="elevation-2 c-tile">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list class="pt-0 pb-0 c-tile">
            <v-list-item @click="removeExercise">
              <v-list-item-title>Remove exercise</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item class="c-list-item">
          <v-list-item-avatar>
            <v-avatar
              :color="exercise.color"
              class="white--text"
              size="38"
            >
              {{ exercise.code }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ exercise.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(set, index) in exercise.sets"
          class="c-list-item pr-1"
        >
          <v-list-item-avatar>
            <v-avatar color="grey--text text--darken-2 c-border-grey" size="30">
              {{ index + 1 }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content class="pt-0 pb-3">
            <v-row>
              <v-col class="pt-0 pb-0">
                <v-text-field
                  v-if="exercise.type === 'body' || exercise.type === 'time'"
                  label="Bodyweight"
                  class="mt-0"
                  hide-details
                  disabled
                />
                <v-text-field
                  v-else
                  v-model="set.weight"
                  type="number"
                  step="0.5"
                  label="Weight"
                  suffix="kg"
                  class="mt-0"
                  hide-details
                />
              </v-col>

              <v-col class="pt-0 pb-0">
                <v-text-field
                  v-if="exercise.type === 'time'"
                  v-model="set.reps"
                  type="number"
                  step="1"
                  label="Secs"
                  class="mt-0"
                  hide-details
                />
                <v-text-field
                  v-else
                  v-model="set.reps"
                  type="number"
                  step="1"
                  label="Reps"
                  class="mt-0"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-list-item-content>

          <v-list-item-action class="ml-0">
            <v-menu content-class="elevation-2 c-tile" offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list class="pt-0 pb-0 c-tile">
                <v-list-item @click="removeSet(index)">
                  <v-list-item-title>Remove set</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-action>
        </v-list-item>

        <v-list-item @click="addSet" class="c-list-item">
          <v-list-item-avatar>
            <v-avatar class="c-border-grey" size="30">
              <v-icon>mdi-plus</v-icon>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Add set</v-list-item-title>
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
  import Exercise from '@/models/Exercise';
  import Set from '@/models/Set';

  export default Vue.extend({
    name: 'Exercise',
    data: () => ({
      exercise: {} as Exercise
    }),
    created() {
      this.exercise = this.workout.exercises[this.getIndex()];
    },
    computed: {
      ...mapGetters({
        workout: 'getActiveWorkout'
      })
    },
    methods: {
      getIndex() {
        return this.$route.params.index;
      },
      addSet() {
        this.exercise.sets.push(<Set>{});
      },
      removeSet(index: number) {
        this.exercise.sets.splice(index, 1);
      },
      removeExercise() {
        this.workout.exercises.splice(this.getIndex(), 1);
        this.goBack();
      },
      updateWorkout() {
        this.$store.commit('setActiveWorkout', this.workout);
        this.goBack();
      },
      goBack() {
        this.$router.replace({ name: 'workout' });
      }
    },
    components: {
      Navigation
    }
  });
</script>
