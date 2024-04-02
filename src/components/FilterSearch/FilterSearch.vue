<template>
      <v-row class="justify-center align-top">
        <!-- Search input -->
        <v-col class="flex-grow-0">
          <SearchBox :autofocus="autofocus"/>
        </v-col>
        <v-col class="flex-grow-0">
          <FilterToggle @click="toggleFilters"/>
        </v-col>
      </v-row>
      <v-expand-transition>
        <FilterRow :filters="filters" v-if="showFilters" />
      </v-expand-transition>
</template>

<script lang="ts">
  import FilterRow from './FilterRow.vue';
  import SearchBox from './SearchBox.vue';
  import FilterToggle from './FilterToggle.vue';
  export default {
    name: 'FilterSearch',
    props: {
      filters: {
        type: Object,
        default: () => ({}),
      },
      autofocus: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      //
    },
    data() {
      return {
        showFilters: false,
      }
    },
    methods: {
      toggleFilters() {
        // Toggle the value of showFilters when clicking on FilterToggle
        this.showFilters = !this.showFilters;
      }
    }
  }
  </script>
