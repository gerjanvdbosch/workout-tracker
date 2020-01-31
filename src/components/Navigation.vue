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

      <v-list-item
        v-for="item in items"
        :to="item.route"
        replace
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      elevation="1"
    >
      <slot name="menu">
        <v-app-bar-nav-icon @click="toggleDrawer"/>
      </slot>

      <slot name="title"/>
      <v-spacer/>
      <slot name="options"/>
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
          icon: 'mdi-history',
          text: 'History',
          route: { name: 'history' }
        },
        {
          icon: 'mdi-scale-bathroom',
          text: 'Body',
          route: { name: 'body' }
        },
        {
          icon: 'mdi-text',
          text: 'Exercises',
          route: { name: 'exercise_list' }
        },
        {
          icon: 'mdi-weight-lifter',
          text: 'Start workout',
          route: { name: 'workout' }
        },
      ]
    }),
    methods: {
      toggleDrawer() {
        this.showDrawer = !this.showDrawer;
      }
    }
  });
</script>
