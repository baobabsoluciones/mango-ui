<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="flex justify-center overflow-visible">
          <ThemeToggle/>
          <Header/>
          <FilterSearch :filters="filters"/>
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

  import { FilterSearch } from '@/components/FilterSearch'

  // Example people to test the search filters
  // const people = [
  //   { name: 'Pepe', age: 42, salary: 1200, single: true, skills: ['Python', 'C', 'Rust', 'Go'], availability: new Date('2024-06-01')},
  //   { name: 'Juan', age: 32, salary: 1500, single: false, skills: ['C++', 'SQL', 'HTML', 'PHP'], availability: new Date('2025-01-01')},
  //   { name: 'Maria', age: 22, salary: 2000, single: true, skills: ['Vue', 'React', 'Javascript', 'Typescript'], availability: new Date('2024-09-15')},
  //   { name: 'Ana', age: 52, salary: 1000, single: false, skills: ['Java', 'C#', 'Ruby', 'Perl'], availability: new Date('2024-11-21')},
  //   { name: 'Luis', age: 62, salary: 800, single: true, skills: ['Cobol', 'Fortran', 'Pascal', 'Basic'], availability: new Date('2024-04-07')}
  // ]

  const filters = {
    age: {
      min: 18,
      max: 65,
      type: 'range',
    },
    salary: {
      min: 800,
      max: 2000,
      type: 'range',
    },
    status: {
      type: 'checkbox',
      options: [
        {checked: true, label: 'Single', value: 'single'},
        {checked: true, label: 'Married', value: 'married'},
      ],
    },
    skills: {
      type: 'checkbox',
      options: [
        {checked: true, label: 'Python', value: 'python'},
        {checked: false, label: 'C', value: 'c'},
        {checked: false, label: 'Rust', value: 'rust'},
        {checked: false, label: 'Go', value: 'go'},
        {checked: false, label: 'C++', value: 'c++'},
        {checked: false, label: 'SQL', value: 'sql'},
        {checked: false, label: 'HTML', value: 'html'},
        {checked: false, label: 'PHP', value: 'php'},
        {checked: false, label: 'Vue', value: 'vue'},
        {checked: false, label: 'React', value: 'react'},
        {checked: false, label: 'Javascript', value: 'javascript'},
        {checked: false, label: 'Typescript', value: 'typescript'},
        {checked: false, label: 'Java', value: 'java'},
        {checked: false, label: 'C#', value: 'c#'},
        {checked: false, label: 'Ruby', value: 'ruby'},
        {checked: false, label: 'Perl', value: 'perl'},
        {checked: false, label: 'Cobol', value: 'cobol'},
        {checked: false, label: 'Fortran', value: 'fortran'},
        {checked: false, label: 'Pascal', value: 'pascal'},
        {checked: false, label: 'Basic', value: 'basic'},
      ],
    },
    availability: {
      type: 'daterange',
      min: new Date('2024-03-01'),
      max: new Date('2024-12-31'),
    },
  }
</script>
