<template>
  <VueExerciseList
    :selectable="true"
    :selected-exercises="selectedExercises"
    @selectExercise="selectExercise"
  >
    <template v-slot:menu>
      <v-btn icon exact replace :to="{ name: 'workout' }">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </template>
  </VueExerciseList>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import Exercise from '@/models/Exercise';
  import Set from '@/models/Set';
  import VueExerciseList from '@/components/ExerciseList.vue';

  export default Vue.extend({
    name: 'ExerciseList',
    computed: {
      ...mapGetters({
        workout: 'getActiveWorkout'
      }),
      selectedExercises() {
        return this.workout.exercises.map(function (exercise: Exercise) {
          return exercise.name
        });
      }
    },
    methods: {
      selectExercise(exercise: Exercise) {
        exercise.sets = Array<Set>();
        exercise.sets.push(<Set>{});

        this.workout.exercises.push(exercise);

        this.$store.commit('setActiveWorkout', this.workout);
        this.$router.replace({ name: 'workout' });
      }
    },
    components: {
      VueExerciseList
    },
  });
</script>
