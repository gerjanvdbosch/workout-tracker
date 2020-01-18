<template>
  <div>
    <Navigation/>

    <v-content>
    </v-content>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';

  export default Vue.extend({
    name: 'Home',
    components: {
      Navigation
    },
  });
</script>
