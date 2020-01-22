<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title v-if="!showSearch">Exercises</v-toolbar-title>
        <v-text-field
          v-else
          v-model="searchText"
          @keyup="resetState"
          ref="searchField"
          flat
          single-line
          placeholder="Search"
          hide-details
          prepend-inner-icon="mdi-magnify"
          class="pl-5"
        />
      </template>

      <template v-slot:options>
        <v-btn
          @click="toggleSearch"
          icon
        >
          <v-icon v-if="showSearch">mdi-close</v-icon>
          <v-icon v-else>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card
        elevation="1"
        tile
      >
        <v-list>
          <v-list-item
            v-if="exercises.length"
            v-for="exercise in exercises"
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

          <InfiniteLoading
            @infinite="infiniteLoading"
            :distance="400"
            ref="infiniteLoading"
          >
            <div slot="no-more"/>
            <div slot="no-results"/>
          </InfiniteLoading>

          <v-list-item v-if="searchText && !exercises.length">
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
  import {mapGetters} from 'vuex';
  import InfiniteLoading, {StateChanger} from 'vue-infinite-loading';
  import Navigation from '@/components/Navigation.vue';
  import Exercise from '@/models/Exercise';

  export default Vue.extend({
    name: 'ExercisesForm',
    props: {
      selectable: Boolean
    },
    computed: {
      ...mapGetters(['filteredExercises'])
    },
    data: () => ({
      showSearch: false,
      searchText: '',
      page: 0,
      itemsPerPage: 30,
      exercises: Array<Exercise>(),
      selectedExercises: []
    }),
    methods: {
      toggleSearch(): void {
        this.showSearch = !this.showSearch;

        if (this.showSearch) {
          this.$nextTick(() => (<HTMLInputElement>this.$refs.searchField).focus())
        } else if (this.searchText) {
          this.searchText = '';
          this.resetState();
        }
      },
      infiniteLoading(state: StateChanger): void {
        const start = this.page * this.itemsPerPage;
        const end = (this.page + 1) * this.itemsPerPage;
        const exercises = this.filteredExercises(this.searchText);

        this.exercises.push(...exercises.slice(start, end));

        if (end < exercises.length) {
          this.page++;
          state.loaded();
        } else {
          state.complete();
        }
      },
      resetState() {
        this.page = 0;
        this.exercises = [];
        (<InfiniteLoading>this.$refs.infiniteLoading).stateChanger.reset();
        window.scrollTo(0, 0);
      }
    },
    components: {
      InfiniteLoading,
      Navigation
    }
  });
</script>
