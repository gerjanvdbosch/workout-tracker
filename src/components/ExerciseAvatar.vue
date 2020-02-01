<template>
  <v-avatar
    :color="exercise.color"
    class="white--text"
    size="38"
  >
    {{ exercise.code }}
  </v-avatar>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import Exercise from '@/models/Exercise';

  export default Vue.extend({
    name: 'ExerciseAvatar',
    props: {
      name: String
    },
    computed: {
      ...mapGetters(['getExercise']),
      exercise(): Exercise {
        return this.getExercise(this.name);
      }
    }
  });
</script>
