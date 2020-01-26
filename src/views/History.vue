<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>History</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list>

        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';

  export default Vue.extend({
    name: 'History',
    components: {
      Navigation
    },
  });
</script>
