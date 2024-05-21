<template>
  <v-row style="align-items: center;">
    <!-- Search input -->
    <v-col class="v-col-md-4 v-col-s-3">
      <SearchBox :autofocus="autofocus" @search="handleSearch($event)" :size="size" />
    </v-col>
    <div style="width:35px !important">
      <FilterToggle @click="toggleFilters" />
    </div>
    <v-col cols="7">
      <v-expand-transition>
        <FilterRow :filters="filters" v-if="showFilters"
        @range="handleFilterRange($event)"
        @checked="handleFilterMultiCheckboxes($event)"
        @dateRange="handleFilterRangeDate($event)"/>
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
      handleSearch(text) {
        this.$emit('search', text);
      },
      handleFilterRange(range) {
        this.$emit('filter', { type: 'range', value: range })        
      },
      handleFilterMultiCheckboxes(checkedList) {
        this.$emit('filter', { type: 'checkbox', value: checkedList });
      },
      handleFilterRangeDate(date) {
        this.$emit('filter', { type: 'dateRange', value: date });
      },
    },
}
</script>

<style>
.v-row + .v-row{
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
