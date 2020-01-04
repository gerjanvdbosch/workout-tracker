<template>
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
        <v-tab
          :to="item.to"
          v-for="(item) in tabs"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-tab>
      </v-tabs>

    </template>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',

  data: () => ({
    tabs: [
      {
        to: '/',
        icon: 'home'
      },
      {
        to: '/history',
        icon: 'access_time'
      },
      {
        to: '/progress',
        icon: 'show_chart'
      },
      {
        to: '/calendar',
        icon: 'today'
      }
    ]
  })
});
</script>
