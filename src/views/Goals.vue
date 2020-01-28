<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>Goals</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';

  export default Vue.extend({
    name: 'Goals',
    components: {
      Navigation
    },
  });
</script>
