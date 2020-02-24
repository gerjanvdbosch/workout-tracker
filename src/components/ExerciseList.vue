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
          @keyup="reset"
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
        <v-list>
          <InfiniteLoading :items="exercises" ref="infiniteLoading">
            <template v-slot:item="{ item }">
              <v-list-item class="c-list-item">
                <v-list-item-avatar>
                  <v-avatar :color="item.color" class="white--text" size="38">
                    {{ item.code }}
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action v-if="selectable">
                  <v-checkbox
                    v-if="selectedExercises.includes(item.name)"
                    input-value="true"
                    disabled
                  />
                  <v-checkbox
                    v-else
                    color="primary"
                    @change="selectExercise(item)"
                  />
                </v-list-item-action>
              </v-list-item>
            </template>

            <template v-slot:no-items>
              <v-list-item class="c-list-item">
                <v-list-item-content>
                  <v-list-item-title class="grey--text text-center">
                    No exercise found with '{{ searchText }}'
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </InfiniteLoading>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import _ from 'lodash';
  import {mapGetters} from 'vuex';
  import InfiniteLoading from '@/components/InfiniteLoading.vue';
  import Navigation from '@/components/Navigation.vue';
  import Exercise from '@/models/Exercise';

  export default Vue.extend({
    name: 'ExerciseList',
    props: {
      selectable: Boolean,
      selectedExercises: {
        type: Array,
        default: () => []
      }
    },
    data: () => ({
      showSearch: false,
      searchText: ''
    }),
    computed: {
      ...mapGetters(['searchExercises']),
      exercises(): Array<Exercise> {
        return this.searchExercises(this.searchText);
      }
    },
    methods: {
      toggleSearch() {
        this.showSearch = !this.showSearch;

        if (this.showSearch) {
          this.$nextTick(() => (<HTMLInputElement>this.$refs.searchField).focus());
        } else if (this.searchText) {
          this.searchText = '';
          this.$nextTick(() => this.reset());
        }
      },
      reset() {
        (<any>this.$refs.infiniteLoading).reset();
      },
      selectExercise: _.debounce(function (this: any, exercise: Exercise) {
        this.$emit('selectExercise', _.cloneDeep(exercise));
      }, 50)
    },
    components: {
      InfiniteLoading,
      Navigation
    }
  });
</script>
