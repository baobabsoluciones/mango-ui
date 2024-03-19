<template>
    <v-navigation-drawer v-if="!editionMode" expand-on-hover rail>
      <!-- Logo -->
      <v-list-item three-line>
        <v-list-item-avatar>
          <img height="40" src="../assets/default-user-img.jpg">
        </v-list-item-avatar>
      </v-list-item>
      <v-divider style="margin: 1em;" thickness="2" color="black"></v-divider>
      <!-- User info -->
      <v-list-item>
        <v-list-item-avatar>
          <img height="40" src="../assets/default-user-img.jpg">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Nombre del Usuario</v-list-item-title>
          <v-list-item-subtitle>email@dominio.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider style="margin: 1em;" thickness="2" color="black"></v-divider>
      <!-- Fast menu -->
      <v-list nav style="margin-top:30px">
        <template v-for="item in pages" :key="item.pos">
          <v-list-group v-if="item.subPages" no-action sub-group>
            <template v-slot:activator>
              <v-list-item :prepend-icon="item.icon">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item v-for="subItem in item.subPages" :prepend-icon="subItem.icon" :key="subItem.pos"
              :to="subItem.to">
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.pos" :prepend-icon="item.icon" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
      <v-divider style="margin: 1em;" thickness="2" color="black"></v-divider>
      <!-- Main menu -->
      <v-list nav style="margin-top:30px">
        <template v-for="item in pages" :key="item.pos">
          <v-list-group v-if="item.subPages" no-action sub-group>
            <template v-slot:activator>
              <v-list-item :prepend-icon="item.icon">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item v-for="subItem in item.subPages" :prepend-icon="subItem.icon" :key="subItem.pos"
              :to="subItem.to">
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.pos" :prepend-icon="item.icon" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </template>
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import logo from '@/assets/logo_escudo_simple.png';
  import { useGeneralStore } from '@/stores/general'
  export default defineComponent({
    name: 'CoreAppDrawer',
    components: {},
    props: {},
    setup() {
      const generalStore = useGeneralStore();
      // Usamos computed para reaccionar a cambios en el estado.
      const role = computed(() => generalStore.getSessionUserRole);
      const editionMode = computed(() => generalStore.editionMode);
      const brand = {}
      const pages = computed(() => {
        // Aquí nos aseguramos de usar role.value porque es una ref/computed.
        if (role.value === 'admin') {
          return [
            {
              title: 'Cargas',
              icon: 'mdi-import',
              to: '/carga',
              pos: 1,
              subPages: [{
              title: 'Planos',
              icon: 'mdi-map-outline',
              to: '/planos',
              pos: 2,
              class: 'no-fill-button',
            },
            {
              title: 'Vehículos',
              icon: 'mdi-car',
              to: '/vehiculos',
              pos: 3,
              class: 'no-fill-button',
            },]            },
            {
              title: 'Planos',
              icon: 'mdi-map-outline',
              to: '/planos',
              pos: 2,
              class: 'no-fill-button',
            },
            {
              title: 'Vehículos',
              icon: 'mdi-car',
              to: '/vehiculos',
              pos: 3,
              class: 'no-fill-button',
            },
            {
              title: 'Usuarios',
              icon: 'mdi-account-multiple',
              to: '/usuarios',
              pos: 4,
              class: 'no-fill-button',
            },
          ];
        } else {
          return [
            {
              title: 'Cargas',
              icon: 'mdi-import',
              to: '/carga',
              pos: 1,
            },
            {
              title: 'Planos',
              icon: 'mdi-map-outline',
              to: '/planos',
              pos: 2,
              class: 'no-fill-button',
            },
            {
              title: 'Vehículos',
              icon: 'mdi-car',
              to: '/vehiculos',
              pos: 3,
              class: 'no-fill-button',
            },
          ];
        }
      });
      return { logo, role, editionMode, pages };
    },
  });
  </script>
  <style></style>