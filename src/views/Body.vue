<template>
  <div>
    <Navigation>
      <template slot="title">
        <v-toolbar-title>Body</v-toolbar-title>
      </template>>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <v-list-item class="c-list-item">
          <v-list-item-content>
            <v-list-item-title class="grey--text text-center">
              No logs found
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
