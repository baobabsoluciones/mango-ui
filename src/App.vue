<template>
  <AppDrawer
    :visible="true"
    logoSrc="../assets/logo.png"
    userAvatar="../assets/user-avatar.jpg"
    userName="Jane Doe"
    userEmail="jane.doe@example.com"
    :menuItems="menuItems"
  />
</template>

<script setup lang="ts">
import AppDrawer from './components/AppDrawer.vue';

// Datos de prueba para las props

const menuItems = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard',
    pos: 1,
    subPages: [
      { title: 'Subpage 1', icon: 'mdi-chart-bubble', to: '/dashboard/sub1', pos: 11 },
      { title: 'Subpage 2', icon: 'mdi-book-open', to: '/dashboard/sub2', pos: 12 },
    ],
  },
  {
    title: 'Settings',
    icon: 'mdi-settings',
    to: '/settings',
    pos: 2,
  },
];
</script>
