<template>
  <v-container fluid>
    <v-row>
      <!-- <v-col cols="12" class="mb-6">
        <h2 class="text-h4 mb-4">Empty Data Table</h2>
        <m-data-table
          :headers="emptyHeaders"
          :items="[]"
          :show-footer="true"
          no-data-message="No users found"
        />
      </v-col>
      <v-col cols="12" class="mb-6">
        <h2 class="text-h4 mb-4">Data Table with 50 Registers</h2>
        <m-data-table
          :headers="fullHeaders"
          :items="fullItems"
          :show-footer="true"
          :items-per-page="10"
          no-data-message="No users found"
        />
      </v-col> -->
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Data Table with 3 Rows (Height Space Enabled)</h2>
        <m-data-table
          :headers="fullHeaders"
          :items="threeItems"
          :show-footer="true"
          :items-per-page="10"
          :add-space-between-pagination="true"
          :options="{ density: 'compact' }"
          no-data-message="No users found"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDataTable from '@/components/MDataTable/MDataTable.vue'

const emptyHeaders = ref([
  { text: 'ID', value: 'id', sortable: true },
  { text: 'Name', value: 'name', sortable: true },
  { text: 'Email', value: 'email', sortable: true },
  { text: 'Active', value: 'active', type: 'boolean' }
])

const fullHeaders = ref([
  { text: 'ID', value: 'id', sortable: true },
  { text: 'Name', value: 'name', sortable: true },
  { text: 'Email', value: 'email', sortable: true },
  { text: 'Age', value: 'age', type: 'number' },
  { text: 'Active', value: 'active', type: 'boolean' }
])

const fullItems = ref(Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  age: Math.floor(Math.random() * 50) + 20,
  active: index % 3 === 0
})))

const threeItems = ref(Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  age: Math.floor(Math.random() * 50) + 20,
  active: index % 2 === 0
})))
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}
</style>
