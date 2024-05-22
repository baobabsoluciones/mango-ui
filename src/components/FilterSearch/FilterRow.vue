<template>
  <div class="filters-row" :class="{ 'scroll-active': isScrollActive }">
    <div class="filter-col" v-for="(filter, key) in filters" :key="key">
      <!-- Render filter components based on their type -->
      <template v-if="filter.type === 'range'">
        <!-- Render range filter component -->
        <Range :filterData="filter" :name="filter.title" @range="handleRange($event, key)" />
      </template>
      <template v-else-if="filter.type === 'checkbox'">
        <!-- Render checkbox filter component -->
        <MultiCheckbox
          :filterData="filter"
          :name="filter.title"
          @checked="handleMultiCheckboxes($event, key)"
        />
      </template>
      <template v-else-if="filter.type === 'daterange'">
        <!-- Render date filter component -->
        <DateRange :filterData="filter" :name="filter.title" @daterange="handleDateRange($event, key)" />
      </template>
    </div>
  </div>
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
  data() {
    return {
      isScrollActive: false,
    };
  },
  mounted() {
    this.checkScroll();
    window.addEventListener('resize', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScroll);
  },
  methods: {
    handleRange(range, key) {
      const filterRange = { key: key, range: range}
      this.$emit('range', filterRange)
    },
    handleMultiCheckboxes(checkedList, key) {
      this.filters[key].checkedList = checkedList;
      const filterCheckboxes = { key: key, checkedList: checkedList }
      this.$emit('checked', filterCheckboxes)
    },
    handleDateRange(date, key) {
      const filterDate = { key: key, date: date }
      this.$emit('daterange', filterDate)
    },
    checkScroll() {
      this.isScrollActive = this.$el.scrollWidth > this.$el.clientWidth;
    },
  },
}
</script>

<style scoped>
.filters-row {
  animation: slide-in 0.5s;
  overflow-x: auto;
  white-space: nowrap;
}

.filters-row.scroll-active {
  margin-bottom: -10px !important;
}

/* For Webkit browsers */
.filters-row::-webkit-scrollbar {
  height: 10px; /* Adjust height */
}

.filters-row::-webkit-scrollbar-track {
  background: transparent; /* Make track transparent */
}

.filters-row::-webkit-scrollbar-thumb {
  background: var(--background-variant-2); /* Change thumb color */
  border-radius: 10px; /* Make thumb rounder */
}

.filters-row::-webkit-scrollbar-thumb:hover {
  background: #bbbbbb; /* Change thumb color when hovering */
}

/* For Firefox */
.filters-row {
  scrollbar-width: thin; /* Make scrollbar thinner */
  scrollbar-color: var(--background-variant-2) transparent; /* Change thumb color and make track transparent */
}

.filter-col {
  display: inline-block;
  margin-right: 10px;
}

.filter-col:last-child {
  margin-right: 0;
}
</style>