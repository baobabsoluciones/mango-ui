<template>
  <div class="icon-title">
    <i :class="`pi ${icon}`"></i>
    <h4 class="title">{{ title }}</h4>
  </div>
  <div class="description">
    <p v-if="description">{{ description }}</p>
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
.icon-title {
  display: flex;
  align-items: center; /* Alinea verticalmente icono y texto */
  gap: 0.5rem; /* Espacio entre icono y título */
}
</style>