<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const products = ref([
  { code: '1', name: 'Product 1', category: 'Category 1', quantity: 10 },
  { code: '2', name: 'Product 2', category: 'Category 2', quantity: 20 },
  { code: '3', name: 'Product 3', category: 'Category 3', quantity: 30 },
]);
</script>
<template>
  <div>
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>

    <Button icon="pi pi-home" aria-label="Save" />
    <Button label="Profile" icon="pi pi-user" />
    <Button label="Save" icon="pi pi-check" iconPos="right" />
    <Button label="Search" icon="pi pi-search" iconPos="top" />
    <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />

    <Button icon="pi pi-check" label="Confirmar" />
<Button icon="pi pi-times" label="Cancelar" />
  </div>
</template>
<style>
</style>