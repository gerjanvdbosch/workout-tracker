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

          <v-list-item-content class="pt-0">
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

          <v-list-item-action>
            <v-btn icon>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-list-item-action>
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

<!--        <v-card-text>-->
<!--          <v-btn-->
<!--            :to="{ name: 'workout_edit', params: { 'workout': workout.id }}"-->
<!--            tile-->
<!--            elevation="1"-->
<!--            class="mr-3"-->
<!--          >-->
<!--            Save-->
<!--          </v-btn>-->
<!--        </v-card-text>-->
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import Navigation from '@/components/Navigation.vue';

  export default Vue.extend({
    name: 'Exercise',
    computed: {
      ...mapGetters(['getWorkoutExercises']),
      exercise() {
        return this.getWorkoutExercises[this.$route.params.index];
      }
    },
    methods: {
      addSet() {
        this.$store.commit('addExerciseSet', this.$route.params.index);
      }
    },
    components: {
      Navigation
    }
  });
</script>
