<template>
  <v-row style="align-items: center;">
    <!-- Search input -->
    <v-col class="v-col-md-4">
      <SearchBox :autofocus="autofocus" @search="handleSearch($event)" :size="size" />
    </v-col>
    <div style="width:35px !important" v-if="hasFilters">
      <FilterToggle @click="toggleFilters" />
    </div>
    <div class="ml-3" style="width:35px !important" v-if="showFilters">
      <v-icon style="font-size: 1.2rem !important"icon="mdi-delete-sweep" @click="resetFilters" ></v-icon>
    </div>
    <v-col cols="7">
      <v-expand-transition>
        <FilterRow :filters="filters" v-if="showFilters"
        @range="handleFilterRange($event)"
        @checked="handleFilterMultiCheckboxes($event)"
        @daterange="handleFilterRangeDate($event)"/>
      </v-expand-transition>
    </v-col>
  </v-row>
</template>


<script lang="ts">
import FilterRow from './FilterRow.vue'
import SearchBox from './SearchBox.vue'
import FilterToggle from './FilterToggle.vue'

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
    size: {
      type: String,
      default: 'md',
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
      },
      resetFilters() {
        // Reset all filters
        this.$emit('reset');
      },
      handleSearch(text) {
        this.$emit('search', text);
      },
      handleFilterRange(filterRange) {
        this.$emit('filter', { type: 'range', value: filterRange.range, key: filterRange.key})        
      },
      handleFilterMultiCheckboxes(fitlerCheckboxes) {
        this.$emit('filter', { type: 'checkbox', value: fitlerCheckboxes.checkedList, key: fitlerCheckboxes.key});
      },
      handleFilterRangeDate(date) {
        this.$emit('filter', { type: 'daterange', value: date.date, key: date.key});
      },
    },
    computed: {
      hasFilters() {
        // Check if the filters object is empty
        return Object.keys(this.filters).length > 0;
      },
  },
}
</script>

<style scoped>
.v-row + .v-row{
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
