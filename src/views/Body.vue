<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>Body</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">

      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';

  export default Vue.extend({
    name: 'Body',
    components: {
      Navigation
    },
  });
</script>
