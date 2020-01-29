<template>
  <VueExerciseList
    :selectable="true"
    :selected-exercises="selectedExercises"
    @selectExercise="selectExercise"
  >
    <template slot="menu">
      <v-btn icon exact replace :to="{ name: 'workout' }">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
  </VueExerciseList>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import Exercise from '@/models/workout/Exercise';
  import VueExerciseList from '@/components/ExerciseList.vue';

  export default Vue.extend({
    name: 'ExerciseList',
    computed: {
      ...mapGetters(['getWorkoutExercises']),
      selectedExercises() {
        return this.getWorkoutExercises.map(function (exercise: Exercise) {
          return exercise.name
        });
      }
    },
    methods: {
      selectExercise(exercise: string) {
        this.$store.commit('addWorkoutExercise', exercise);
        this.$router.replace({ name: 'workout' });
      }
    },
    components: {
      VueExerciseList
    },
  });
</script>
