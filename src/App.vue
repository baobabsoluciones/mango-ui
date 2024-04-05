<template>
  <v-app>
    <MAppDrawer
      :visible="true"
      :width="250"
      :logo="logo"
      :items="items"
      :actions="actions"
      :user="user"
    >
    </MAppDrawer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MAppDrawer from './components/AppDrawer/MAppDrawer.vue'

export default defineComponent({
  name: 'App',
  components: {
    MAppDrawer,
  },
  data() {
    return {
      logo: {
        src: './assets/logo.png',
        title: 'Logo',
      },
      items: [
        {
          title: 'Home',
          to: '',
          icon: 'mdi-home',
          subPages: [
            {
              title: 'Dashboard',
              to: '/dashboard',
              icon: 'mdi-view-dashboard',
            },
            {
              title: 'Profile',
              to: '/profile',
              icon: 'mdi-account',
            },
            // ...other subPages
          ],
        },
        {
          title: 'About',
          to: '/about',
          icon: 'mdi-information',
        },
        // ...other items
      ],
      actions: [
        {
          title: 'Logout',
          to: '/logout',
          icon: 'mdi-logout',
        },
        // ...other actions
      ],
      user: {
        src: './assets/user.png',
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    }
  },
})
</script>
