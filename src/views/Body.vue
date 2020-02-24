<template>
  <div>
    <Navigation>
      <template v-slot:title>
        <v-toolbar-title>Body</v-toolbar-title>
      </template>

      <template v-slot:options>
        <BodyDialog @saveBody="saveBody">
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
        <InfiniteLoading :items="body">
          <template v-slot:item="{ item }">
            <v-list-item class="c-list-item pr-1">
              <v-list-item-avatar>
                <v-avatar color="grey lighten-2" size="38">
                  <v-icon>mdi-scale-bathroom</v-icon>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <v-row>
                    <v-col class="pt-0 pb-0">{{ item.weight }} kg</v-col>
                    <v-col class="pt-0 pb-0">{{ item.fat }} %</v-col>
                  </v-row>
                </v-list-item-title>
                <v-list-item-subtitle>{{ item.date|moment('calendar') }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action class="ml-0">
                <v-menu content-class="elevation-2 c-tile" offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list class="pt-0 pb-0 c-tile">
                    <v-list-item @click="removeBody(item.id)">
                      <v-list-item-title>Remove</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-action>
            </v-list-item>
          </template>

          <template v-slot:no-items>
            <v-list-item class="c-list-item">
              <v-list-item-content>
                <v-list-item-title class="grey--text text-center">
                  No logs found
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
  import InfiniteLoading from '@/components/InfiniteLoading.vue';
  import Navigation from '@/components/Navigation.vue';
  import BodyDialog from '@/components/BodyDialog.vue';
  import Body from '@/models/Body';

  export default Vue.extend({
    name: 'Body',
    computed: {
      ...mapGetters({
        body: 'getBody'
      })
    },
    methods: {
      saveBody(body: Body) {
        this.$store.commit('saveBody', body);
      },
      removeBody(id: string) {
        this.$store.commit('removeBody', id);
      }
    },
    components: {
      InfiniteLoading,
      Navigation,
      BodyDialog
    },
  });
</script>
