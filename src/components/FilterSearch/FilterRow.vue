<template>
  <v-row class="filters-row">
    <v-col v-for="(filter, key) in filters" :key="key" class="flex-grow-0 pt-0">
      <!-- Render filter components based on their type -->
      <template v-if="filter.type === 'range'">
        <!-- Render range filter component -->
        <Range :filterData="filter" :name="key" @range="handleRange($event)" />
      </template>
      <template v-else-if="filter.type === 'checkbox'">
        <!-- Render checkbox filter component -->
        <MultiCheckbox
          :filterData="filter"
          :name="key"
          @checked="handleMultiCheckboxes($event)"
        />
      </template>
      <template v-else-if="filter.type === 'daterange'">
        <!-- Render select filter component -->
        <DateRange :filterData="filter" :name="key" />
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Range from './filters/Range.vue'
import MultiCheckbox from './filters/MultiCheckbox.vue'
import DateRange from './filters/DateRange.vue'
export default {
  name: 'FilterRow',
  props: {
    filters: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleRange(range) {
      this.$emit('range', [range[0], range[1]])
    },
    handleMultiCheckboxes(checkedList) {
      this.$emit('checked', checkedList)
    },
  },
}
</script>

<style scoped>
.filters-row {
  animation: slide-in 0.5s;
}
</style>
