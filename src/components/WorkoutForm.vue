<template>
  <v-form>
    <v-text-field
      v-model="workout.bodyWeight"
      label="Body Weight (kg)"
      type="number"
      step="0.1"
      required
    />

    <v-autocomplete
      v-model="workout.exercise"
      label="Exercise"
      :items="exercises"
    />

    <v-btn
      color="primary"
      class="mr-3"
      @click="save"
      tile
      elevation="1"
    >
      Save
    </v-btn>

    <v-btn
      link
      to="/"
      tile
      elevation="1"
    >
      Cancel
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Workout from '@/models/Workout';
import uuid from 'uuid';

export default Vue.extend({
  name: 'WorkoutForm',
  props: {
    workout: {
      default: () => <Workout>{
        id: uuid(),
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
  data () {
    return {
      exercises: [
        'Bench Press',
        'Dead Lift',
      ]
    }
  },
});
</script>
