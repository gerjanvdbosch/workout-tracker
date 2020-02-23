<template>
  <div>
    <div
      v-if="paginatedItems.length"
      v-for="(item, index) in paginatedItems"
      :key="index"
    >
      <slot
        name="item"
        :item="item"
        :index="index"
      />
    </div>

    <slot v-if="!paginatedItems.length" name="no-items"/>

    <VueInfiniteLoading
      @infinite="load"
      :distance="500"
      ref="vueInfiniteLoading"
    >
      <div slot="no-more"/>
      <div slot="no-results"/>
    </VueInfiniteLoading>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import VueInfiniteLoading, {StateChanger} from 'vue-infinite-loading';

  export default Vue.extend({
    name: 'InfiniteLoading',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data: () => ({
      page: 0,
      itemsPerPage: 10,
      paginatedItems: Array<any>()
    }),
    watch: {
      items: {
        handler() {
          this.reset();
        }
      }
    },
    mounted() {
      this.reset();
    },
    methods: {
      load(state: StateChanger) {
        const start = this.page * this.itemsPerPage;
        const end = (this.page + 1) * this.itemsPerPage;

        this.paginatedItems.push(...this.items.slice(start, end));

        if (end < this.items.length) {
          this.page++;
          state.loaded();
        } else {
          state.complete();
        }
      },
      reset() {
        const stateChanger = (<VueInfiniteLoading>this.$refs.vueInfiniteLoading).stateChanger;
        this.page = 0;
        this.paginatedItems = [];
        stateChanger.reset();
        this.load(stateChanger);
        window.scrollTo(0, 0);
      }
    },
    components: {
      VueInfiniteLoading
    }
  });
</script>
