<template>
  <div>
    <Navigation>
      <template v-slot:menu>
        <slot name="menu"/>
      </template>

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
        <v-btn icon @click="toggleSearch">
          <v-icon v-if="showSearch">mdi-close</v-icon>
          <v-icon v-else>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item
          v-if="exercises.length"
          v-for="exercise in exercises"
          :key="exercise.name"
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
              v-if="selectedExercises.includes(exercise.name)"
              input-value="true"
              disabled
            />
            <v-checkbox
              v-else
              color="primary"
              @change="selectExercise(exercise.name)"
            />
          </v-list-item-action>
        </v-list-item>

        <InfiniteLoading
          @infinite="infiniteLoading"
          :distance="500"
          ref="infiniteLoading"
        >
          <div slot="no-more"/>
          <div slot="no-results"/>
        </InfiniteLoading>

        <v-list-item v-if="!exercises.length">
          <v-list-item-content>
            <v-list-item-title class="grey--text text--darken-1 text-center">
              No exercise found with '{{ searchText }}'
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import _ from 'lodash';
  import {mapGetters} from 'vuex';
  import InfiniteLoading, {StateChanger} from 'vue-infinite-loading';
  import Navigation from '@/components/Navigation.vue';
  import Exercise from '@/models/Exercise';

  export default Vue.extend({
    name: 'ExercisesForm',
    props: {
      selectable: Boolean,
      selectedExercises: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      ...mapGetters(['filteredExercises'])
    },
    mounted(): void {
      this.resetState();
    },
    data: () => ({
      showSearch: false,
      searchText: '',
      page: 0,
      itemsPerPage: 10,
      exercises: Array<Exercise>()
    }),
    methods: {
      toggleSearch() {
        this.showSearch = !this.showSearch;

        if (this.showSearch) {
          this.$nextTick(() => (<HTMLInputElement>this.$refs.searchField).focus())
        } else if (this.searchText) {
          this.searchText = '';
          this.resetState();
        }
      },
      infiniteLoading(state: StateChanger) {
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
        const stateChanger = (<InfiniteLoading>this.$refs.infiniteLoading).stateChanger;
        this.page = 0;
        this.exercises = [];
        stateChanger.reset();
        this.infiniteLoading(stateChanger);
        window.scrollTo(0, 0);
      },
      selectExercise: _.debounce(function(this: any, exercise: string) {
        this.$emit('selectExercise', exercise);
      }, 80)
    },
    components: {
      InfiniteLoading,
      Navigation
    }
  });
</script>
