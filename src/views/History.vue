<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>History</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <v-card tile elevation="1">
        <InfiniteLoading :items="workouts">
          <template v-slot:item="{ item }">
            <v-list-item
              replace
              :to="{ name: 'history_workout', params: { id: item.id } }"
              class="c-list-item"
            >
              <v-list-item-avatar>
                <v-avatar color="grey lighten-2" size="38">
                  <v-icon>mdi-weight-lifter</v-icon>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.date|moment('calendar') }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>

          <template v-slot:no-items>
            <v-list-item class="c-list-item">
              <v-list-item-content>
                <v-list-item-title class="grey--text text-center">
                  No workouts found
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </InfiniteLoading>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import Navigation from '@/components/Navigation.vue';
  import InfiniteLoading from '@/components/InfiniteLoading.vue';

  export default Vue.extend({
    name: 'History',
    computed: {
      ...mapGetters({
        workouts: 'getWorkouts'
      })
    },
    components: {
      InfiniteLoading,
      Navigation
    },
  });
</script>
