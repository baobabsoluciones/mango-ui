<template>
  <v-app>
    <v-main>
      <v-row class="d-flex justify-space-between mt-3">
        <v-btn
          color="primary"
          prepend-icon="mdi-pencil"
          @click="showSnackbar('info', 'Custom button clicked')"
        >
          Modo edición
        </v-btn>
        <MButton
            label="HoLi"
            icon="mdi-heart"
            icon-position="prepend-icon"
            color="#020246"
            rounded="xl"
            size="small"
          />
      </v-row>

      <v-container class="fill-height">
          <FilterSearch :filters="filters" @search="handleSearch" @filter="handleFilters"/>
          
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import FormSteps from '@/components/FormSteps.vue'

const filters = {
  status: {
    type: 'checkbox',
    options: [
      { checked: true, label: 'Single', value: 'single' },
      { checked: true, label: 'Married', value: 'married' },
    ],
  },
  skills: {
    type: 'checkbox',
    options: [
      { checked: false, label: 'Python', value: 'python' },
      { checked: false, label: 'C', value: 'c' },
      { checked: false, label: 'Rust', value: 'rust' },
      { checked: false, label: 'Go', value: 'go' },
      { checked: false, label: 'C++', value: 'c++' },
      { checked: false, label: 'SQL', value: 'sql' },
      { checked: false, label: 'HTML', value: 'html' },
      { checked: false, label: 'PHP', value: 'php' },
      { checked: false, label: 'Vue', value: 'vue' },
      { checked: false, label: 'React', value: 'react' },
      { checked: false, label: 'Javascript', value: 'javascript' },
      { checked: false, label: 'Typescript', value: 'typescript' },
      { checked: false, label: 'Java', value: 'java' },
      { checked: false, label: 'C#', value: 'c#' },
      { checked: false, label: 'Ruby', value: 'ruby' },
      { checked: false, label: 'Perl', value: 'perl' },
      { checked: false, label: 'Cobol', value: 'cobol' },
      { checked: false, label: 'Fortran', value: 'fortran' },
      { checked: false, label: 'Pascal', value: 'pascal' },
      { checked: false, label: 'Basic', value: 'basic' },
    ],
  },
  availability: {
    type: 'daterange',
    min: new Date('2024-03-01'),
    max: new Date('2024-12-31'),
  },
};

const handleSearch = (text) => {
  console.log('Search text:', text)
};

const handleFilters = (filters) => {
  console.log('Applied filters:', filters)
};
</script>
