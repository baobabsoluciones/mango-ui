<template>
<SearchAndFilterForTables :filters=filters @filter="handleFilter($event)" @search="handleSearch($event)"></SearchAndFilterForTables>
</template>


<script setup lang="ts">
import Test from './components/Test.vue';
import SearchAndFilterForTables from '@/components/SearchAndFilterForTables.vue';
import { ref } from 'vue';
  
    const filters = ref([
      {
        'name': 'Categoría',
        'value': 'type',
        'type': 'category',
        'categories': ['HIJ', 'DEFG', 'WXYZ'],
        'selectedFilter': { 'value': []}
      },
      {
        'name': 'Categoría',
        'value': 'type',
        'type': 'category',
        'categories': ['HIJ', 'DEFG', 'WXYZ'],
        'selectedFilter': { 'value': []}
      },
      {
        'name': 'Categoría',
        'value': 'type',
        'type': 'category',
        'categories': ['HIJ', 'DEFG', 'WXYZ'],
        'selectedFilter': { 'value': []}
      },
    ]);

    const handleFilter = (filters) => {
      filtersSelected.value = filters;
    };

    const handleSearch = (search) => {
      searchText.value = search;
    };

</script>


