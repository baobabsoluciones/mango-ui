<template>
<SearchAndFilterForTables :filters=filters @filter="handleFilter($event)" @search="handleSearch($event)"></SearchAndFilterForTables>
</template>


<script setup lang="ts">
import Test from './components/Test.vue';
import SearchAndFilterForTables from './components/SearchAndFilterForTables.vue';
import { ref } from 'vue';
  
    const filters = ref([
      {
        'name': 'Color',
        'value': 'type',
        'type': 'category',
        'categories': ['Marrón', 'Negro', 'Blanco', 'Verde'],
        'selectedFilter': { 'value': []}
      },
      {
        'name': 'Precio',
        'value': 'type',
        'type': 'number',
        'selectedFilter': { 'value': null, 'option': null}
      },
      {
        'name': 'Rotable',
        'value': 'type',
        'type': 'boolean',
        'selectedFilter': { 'value': null}
      },
    ]);

    const handleFilter = (filters) => {
      filtersSelected.value = filters;
    };

    const handleSearch = (search) => {
      searchText.value = search;
    };

</script>


