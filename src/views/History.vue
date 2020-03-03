<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>History</v-toolbar-title>
      </template>
    </Navigation>

    <v-container fluid>
      <InfiniteLoading :items="workouts">
        <template v-slot:item="{ item, index }">
          <div v-if="index !== 0" class="mb-3"/>

          <v-card tile class="c-card">
            <v-list>
              <v-list-item
                :to="{ name: 'history_workout', params: { id: item.id } }"
                replace
                class="c-list-item"
              >
                <v-list-item-avatar>
                  <v-avatar :color="item.color" class="white--text" size="38">
                    {{ item.code }}
                  </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="font-weight-medium">{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.date|moment('calendar') }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset/>

              <v-list-item style="min-height: 18px;">
                <v-list-item-avatar height="0"/>
                <v-list-item-content class="pt-3 pb-2">
                  <v-list-item-subtitle>
                    <v-icon size="18" color="grey" class="mr-1">mdi-weight-lifter</v-icon>
                    {{ item.exercises.length }} exercises
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </template>

        <template v-slot:no-items>
          <v-card tile class="c-card">
            <v-list>
              <v-list-item class="c-list-item">
                <v-list-item-content>
                  <v-list-item-title class="grey--text text-center">
                    No workouts found
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </template>
      </InfiniteLoading>

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
