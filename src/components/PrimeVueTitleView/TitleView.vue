<template>
  <div class="icon-title">
    <div class="icon-title-row">
      <div class="icon">
        <i :class="`pi ${icon}`"></i>
      </div>
      <h4 class="title">{{ title }}</h4>
    </div>
    <div class="description">
      <p v-if="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  icon: string
  title: string
  description?: string
}

const props = defineProps<Props>()
</script>
<style scoped>
i, span {
  display: block; /* esto rompe PrimeIcons, que usa inline-block */
}</style>