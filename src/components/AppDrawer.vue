<!--
  Date: 15/03/2024
  Author: Javier García
  Description: This component serves as a dynamic navigation drawer for a web application. It is designed to be highly customizable through props, allowing the display of a logo, user information, and a navigational menu with support for sub-menus. 
  Each menu item can be configured with icons, titles, and navigation paths, making it suitable for various application structures.

  Props:
    logo: Boolean, // Determines whether the user logo is visible.
    fastMenu: Boolean, // Determines whether the "fast menu" is visible.
    visible: Boolean // Determines whether the navigation drawer is visible.
    logoSrc: String // The source URL for the logo image.
    userAvatar: String // The source URL for the user's avatar image.
    userName: String // The name of the user to be displayed.
    userEmail: String // The email of the user to be displayed.
    menuItems: Array // An array of objects representing the menu items and sub-menu items. Each object can have the following properties:
      {
        'title': String, // The title of the menu item
        'icon': String, // The icon to be displayed alongside the menu item, using Material Design icons naming conventions
        'to': String, // The navigation path for the menu item
        'pos': Number, // A unique identifier for the menu item, used for keying purposes in Vue's rendering algorithm
        'subPages': Array // An optional array of objects representing sub-menu items, with the same structure as the menu item objects
      }

  Example usage:
    <AppDrawer
      :logo="true"
      :fastMenu="true"
      :visible="true"
      logoSrc="../assets/logo.png"
      userAvatar="../assets/user-avatar.jpg"
      userName="John Doe"
      userEmail="john.doe@example.com"
      :menuItems="[
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/dashboard',
          pos: 1,
          subPages: [
            { title: 'Subpage 1', icon: 'mdi-chart-bubble', to: '/dashboard/sub1', pos: 11 },
            { title: 'Subpage 2', icon: 'mdi-book-open', to: '/dashboard/sub2', pos: 12 },
          ]
        },
        {
          title: 'Settings',
          icon: 'mdi-settings',
          to: '/settings',
          pos: 2
        }
      ]"
    />
-->


<template>
  <v-navigation-drawer :value="visible" expand-on-hover rail>
    <v-list three-line>
      <!-- Logo podría ser opcional -->
      <v-list-item>
        <v-list-item-avatar>
          <img :src="logoSrc" alt="Logo">
        </v-list-item-avatar>
      </v-list-item>

      <v-divider style="margin: 1em;" thickness="2" color="black"></v-divider>

      <!-- Información del Usuario -->
      <v-list-item>
        <v-list-item-avatar :value="logo">
          <img :src="userAvatar" alt="Logo usuario">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
          <v-list-item-subtitle>{{ userEmail }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider style="margin: 1em;" thickness="2" color="black"></v-divider>

      <!-- Menú -->
      <v-list nav style="margin-top:30px">
        <template v-for="item in menuItems" :key="item.pos">
          <v-list-group v-if="item.subPages" no-action sub-group>
            <template v-slot:activator>
              <v-list-item :prepend-icon="item.icon">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item v-for="subItem in item.subPages" :prepend-icon="subItem.icon" :key="subItem.pos" :to="subItem.to">
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.pos" :prepend-icon="item.icon" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppDrawer',
  props: {
    logo: Boolean,
    fastMenu: Boolean,
    visible: Boolean,
    config: Boolean,
    logoSrc: String,
    userAvatar: String,
    userName: String,
    userEmail: String,
    menuItems: Array
  }
});
</script>

<style scoped>
</style>
