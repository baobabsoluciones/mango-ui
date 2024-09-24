<template>
  <v-app>
    <MDataTable
      style="height: 200px"
      key="data-checks-table"
      class="data-checks-table"
      :items="filteredDataTable"
      :headers="headers"
      :showFooter="true"
      :options="{ density: 'compact' }"
      :prevText="'Anterior'"
    />
  </v-app>
</template>

<script setup lang="ts">
import MDataTable from './components/MDataTable/MDataTable.vue'

const filteredDataTable = [
  { id: 1, name: 'Juan', manager: true },
  { id: 2, name: 'Pedro', manager: true },
  { id: 3, name: 'Maria', manager: true },
  { id: 4, name: 'Jose', manager: true },
  { id: 5, name: 'Luis', manager: true },
  { id: 6, name: 'Ana', manager: false },
  { id: 7, name: 'Rosa', manager: false },
  { id: 8, name: 'Lorena', manager: false },
  { id: 9, name: 'Luisa', manager: false },
  { id: 10, name: 'Miguel', manager: false },
  { id: 11, name: 'Carlos', manager: false },
  { id: 12, name: 'Sofia', manager: false },
  { id: 13, name: 'Sara', manager: false },
  { id: 14, name: 'Sandra', manager: false },
]

const headers = [
  {
    title: 'Employee id.',
    value: 'id',
    sortable: true,
    filterable: true,
    type: 'number',
    required: true,
  },
  {
    title: 'Employee name',
    value: 'name',
    sortable: true,
    filterable: true,
    type: 'string',
    required: true,
  },
  {
    title: 'Manager',
    value: 'manager',
    sortable: true,
    filterable: true,
    type: 'boolean',
    required: true,
  },
  {
    title: 'Manager tasks',
    value: 'manager_tasks',
    sortable: true,
    filterable: false,
    type: 'boolean',
    required: false,
  },
]
</script>
