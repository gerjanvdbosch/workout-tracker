<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="1"
    >
      <v-btn
        :to="{ path: '/' }"
        replace
        icon
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title v-if="!showSearch">Exercises</v-toolbar-title>

      <v-text-field
        v-if="showSearch"
        v-model="searchText"
        ref="searchField"
        flat
        single-line
        placeholder="Search"
        hide-details
        prepend-inner-icon="mdi-magnify"
        class="pl-5"
      />

      <v-spacer/>
      <v-btn
        @click="toggleSearch"
        icon
      >
        <v-icon v-if="showSearch">mdi-close</v-icon>
        <v-icon v-else>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container fluid>
      <v-card
        elevation="1"
        tile
      >
        <v-list>
          <v-list-item
            v-if="filteredExercises.length"
            v-for="exercise in filteredExercises"
            :key="exercise.name"
            link
          >
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

            <v-list-item-action v-if="selectable">
              <v-checkbox
                v-model="selectedExercises"
                :value="exercise.name"
                color="primary"
              />
            </v-list-item-action>
          </v-list-item>

          <v-list-item v-if="!filteredExercises.length">
            <v-list-item-content>
              <v-list-item-title class="grey--text text--darken-1 text-center">
                No exercise found with '{{ searchText }}'
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapState} from 'vuex';
  import Exercise from '@/models/Exercise';

  export default Vue.extend({
    name: 'ExercisesForm',
    props: {
      selectable: Boolean
    },
    data: () => ({
      showSearch: false,
      searchText: '',
      selectedExercises: []
    }),
    methods: {
      toggleSearch(): void {
        this.showSearch = !this.showSearch

        if (this.showSearch) {
          this.$nextTick(() => (<HTMLInputElement>this.$refs.searchField).focus())
        } else {
          this.searchText = '';
        }
      }
    },
    computed: {
      ...mapState({
        exercises: (state: any) => state.exercises.items
      }),
      filteredExercises(): Array<Exercise> {
        return this.exercises.filter((exercise: Exercise) => {
          return exercise.name.toLowerCase().match(this.searchText.toLowerCase());
        })
      }
    }
  });
</script>
