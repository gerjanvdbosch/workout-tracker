<template>
  <v-card
    flat
    tile
  >
    <v-toolbar
      color="primary"
      dark
      elevation="1"
    >
      <v-toolbar-title>Workout Log</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs
          background-color="grey lighten-3"
          light
        >
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
        </v-tabs>

      </template>
    </v-toolbar>

  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation'
});
</script>
