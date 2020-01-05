<template>
  <v-form>
    <v-text-field
      label="Body Weight"
      type="number"
      step="0.1"
      required
    />

    <v-btn
      color="primary"
      class="mr-3"
      @click="save"
    >
      Save
    </v-btn>

    <v-btn link to="/">
      Cancel
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WorkoutForm',

  methods: {
    save() {
      this.$emit('save');
    }
  },
});
</script>
