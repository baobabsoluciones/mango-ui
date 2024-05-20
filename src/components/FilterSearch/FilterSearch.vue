<template>
  <v-row v-if="Object.keys(filters).length <= 4">
    <!-- Search input -->
    <v-col>
      <SearchBox :autofocus="autofocus" @search="handleSearch($event)" />
    </v-col>
    <v-col >
      <FilterToggle @click="toggleFilters" />
    </v-col>
    <v-col>
      <v-expand-transition>
        <FilterRow :filters="filters" v-if="showFilters"
        @range="handleFilterRange($event)"
        @checked="handleFilterMultiCheckboxes($event)"
        @dateRange="handleFilterRangeDate($event)"/>
      </v-expand-transition>
    </v-col>
  </v-row>
  <div v-else>
    <v-row>
      <!-- Search input -->
      <v-col>
        <SearchBox :autofocus="autofocus" @search="handleSearch($event)" />
      </v-col>
      <v-col>
        <FilterToggle @click="toggleFilters" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-3">
        <v-expand-transition>
          <FilterRow :filters="filters" v-if="showFilters"
          @range="handleFilterRange($event)"
          @checked="handleFilterMultiCheckboxes($event)"
          @dateRange="handleFilterRangeDate($event)"/>
        </v-expand-transition>
      </v-col>
    </v-row>
  </div>
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
  },
  setup() {
    //
  },
  mounted() {
    console.log(Object.keys(this.filters).length
)
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
