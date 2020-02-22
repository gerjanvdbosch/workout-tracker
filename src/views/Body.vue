<template>
  <div>
    <Navigation>
      <template slot="title">
        <v-toolbar-title>Body</v-toolbar-title>
      </template>

      <template slot="options">
        <BodyDialog>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
        </BodyDialog>
      </template>
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
  import BodyDialog from '@/components/BodyDialog.vue';

  export default Vue.extend({
    name: 'Body',
    components: {
      Navigation,
      BodyDialog
    },
  });
</script>
