<template>
  <v-toolbar
    color="primary"
    dark
    elevation="1"
  >
    <v-toolbar-title>Workout Log</v-toolbar-title>
    <v-spacer/>

    <v-btn :to="{ name: 'workout_add' }" icon>
      <v-icon>add_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation'
});
</script>
