<template>
  <div>
    <v-navigation-drawer
      v-model="showDrawer"
      app
    >
      <v-card
        height="124"
        class="primary"
        flat
        tile
      >
        <v-list-item>
          <v-list-item-content/>
          <v-list-item-action>
            <v-btn
              icon
              dark
            >
              <v-icon
                @click="toggleDrawer"
                color="white"
              >
                mdi-close
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="pt-0">
            <v-list-item-title class="title font-weight-regular white--text">Workout Log</v-list-item-title>
            <v-list-item-subtitle class="white--text">No logs</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <v-list>
        <v-list-item
          v-for="item in items"
          :to="item.to"
          replace
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      elevation="1"
    >
      <v-app-bar-nav-icon @click="toggleDrawer"/>
      <v-toolbar-title>Workout Log</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Navigation',
    data: () => ({
      showDrawer: false,
      items: [
        {
          icon: 'mdi-scale-bathroom',
          text: 'Body',
          to: '/'
        },
        {
          icon: 'mdi-text',
          text: 'Exercises',
          to: {
            name: 'exercise'
          }
        },
      ]
    }),
    methods: {
      toggleDrawer() {
        this.$data.showDrawer = !this.$data.showDrawer
      }
    }
  });
</script>
