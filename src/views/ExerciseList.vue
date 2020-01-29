<template>
  <div>
    <VueExerciseList/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import VueExerciseList from '@/components/ExerciseList.vue';

  export default Vue.extend({
    name: 'ExerciseList',
    components: {
      VueExerciseList
    },
  });
</script>
