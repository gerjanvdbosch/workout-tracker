<template>
  <div>
    <Navigation>
      <template slot="menu">
        <v-btn icon exact replace :to="{ name: 'workout' }">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>

      <template slot="title">
        <v-toolbar-title>{{ exercise.name }}</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item v-for="(set, index) in exercise.sets">
          <v-list-item-avatar>
            <v-avatar
              color="primary"
              class="white--text font-weight-bold"
              size="38"
            >
              {{ index + 1 }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content class="pt-0 pb-2">
            <v-row>
              <v-col class="pt-0 pb-0">
                <v-text-field
                  v-model="set.weight"
                  label="Weight"
                  class="mt-0"
                  hide-details
                />
              </v-col>
              <v-col class="pt-0 pb-0">
                <v-text-field
                  v-model="set.reps"
                  label="Reps"
                  class="mt-0"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-list-item-content>

<!--          <v-list-item-action>-->
<!--            <v-btn icon @click="removeSet">-->
<!--              <v-icon>mdi-minus</v-icon>-->
<!--            </v-btn>-->
<!--          </v-list-item-action>-->
        </v-list-item>

        <v-list-item @click="addSet">
          <v-list-item-avatar>
            <v-avatar color="grey" size="38">
              <v-icon dark>mdi-plus</v-icon>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Add set</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-card-text v-if="exercise.sets.length">
          <v-btn tile elevation="1" exact replace :to="{ name: 'workout' }">
            Done
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
  import Exercise from '@/models/workout/Exercise';
  import Set from '@/models/workout/Set';

  export default Vue.extend({
    name: 'Exercise',
    computed: {
      ...mapGetters({
        workout: 'getActiveWorkout'
      }),
      exercise(): Exercise {
        return this.workout.exercises[this.$route.params.index];
      }
    },
    methods: {
      addSet() {
        this.exercise.sets.push(<Set>{});
        this.$store.commit('setActiveWorkout', this.workout);
      }
    },
    components: {
      Navigation
    }
  });
</script>
