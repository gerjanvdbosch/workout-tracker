<template>
  <v-form>
    <v-text-field
      v-model="workout.bodyWeight"
      label="Body Weight (kg)"
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
import Workout from '@/models/Workout';
import v4 from 'uuid';

export default Vue.extend({
  name: 'WorkoutForm',
  props: {
    workout: {
      default: () => <Workout>{
        id: v4(),
        date: new Date()
      }
    }
  },
  methods: {
    save() {
      this.$store.commit('save', this.$props.workout);
      this.$router.push('/');
    }
  },
});
</script>
