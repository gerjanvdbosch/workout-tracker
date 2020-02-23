<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <slot name="activator" :on="on"/>
    </template>

    <v-card>
      <v-card-title>Body</v-card-title>

      <v-card-text class="pb-3">
        <v-row>
          <v-col class="pt-0 pb-0">
            <v-text-field
              v-model="body.weight"
              label="Weight"
              type="number"
              suffix="kg"
              hide-details
            />
          </v-col>

          <v-col class="pt-0 pb-0">
            <v-text-field
              v-model="body.fat"
              label="Fat"
              type="number"
              suffix="%"
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn color="blue darken-1" text @click="toggleDialog">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="saveBody">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Body from '@/models/Body';

  export default Vue.extend({
    name: 'BodyDialog',
    data: () => ({
      showDialog: false,
      body: <Body>{}
    }),
    methods: {
      toggleDialog() {
        this.showDialog = !this.showDialog;
      },
      saveBody() {
        this.$emit('saveBody', this.body);
        this.body = <Body>{};
        this.toggleDialog();
      }
    }
  });
</script>
