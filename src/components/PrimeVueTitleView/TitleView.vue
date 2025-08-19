<template>
  <div class="icon-title">
    <i :class="`pi ${icon}`"></i>
    <h4 class="title">{{ title }}</h4>
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

defineProps<Props>()
</script>
<style scoped>
i, span {
  display: block; /* esto rompe PrimeIcons, que usa inline-block */
}</style>