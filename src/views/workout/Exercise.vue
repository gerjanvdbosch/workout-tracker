<template>
  <div>
    <Navigation>
      <template slot="menu">
        <v-btn icon @click="updateWorkout">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>

      <template slot="title">
        <v-toolbar-title>Workout</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item style="height: 56px;">
          <v-list-item-avatar>
            <ExerciseAvatar :name="exercise.name"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ exercise.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(set, index) in exercise.sets"
          style="height: 56px;"
        >
          <v-list-item-avatar>
            <v-avatar color="grey--text text--darken-2" style="border: 1px solid #616161;" size="30">
              {{ index + 1 }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content class="pt-0 pb-3">
            <v-row>
              <v-col class="pt-0 pb-0">
                <v-text-field
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
                  v-model="set.reps"
                  type="number"
                  label="Reps"
                  class="mt-0"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click="removeSet(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item
          @click="addSet"
          style="height: 56px;"
        >
          <v-list-item-avatar>
            <v-avatar style="border: 1px solid #616161;" size="30">
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
  import ExerciseAvatar from '@/components/ExerciseAvatar.vue';
  import Exercise from '@/models/workout/Exercise';
  import Set from '@/models/workout/Set';

  export default Vue.extend({
    name: 'Exercise',
    data: () => ({
      exercise: {} as Exercise
    }),
    created() {
      this.exercise = this.workout.exercises[this.$route.params.index];
    },
    computed: {
      ...mapGetters({
        workout: 'getActiveWorkout'
      })
    },
    methods: {
      addSet() {
        this.exercise.sets.push(<Set>{});
      },
      removeSet(index: number) {
        this.exercise.sets.splice(index, 1);
      },
      updateWorkout() {
        this.$store.commit('setActiveWorkout', this.workout);
        this.$router.replace({ name: 'workout' });
      }
    },
    components: {
      Navigation,
      ExerciseAvatar
    }
  });
</script>
