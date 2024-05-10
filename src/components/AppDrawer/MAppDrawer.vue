<template>
  <v-navigation-drawer
    v-model="menu"
    permanent
    rail
    expand-on-hover
    :width="width"
    @mouseenter="expanded = true"
    @mouseleave="expanded = false"
    :color="'var(--background)'"
  >
    <div class="drawer-content">
      <!-- Logo -->
      <v-list>
        <slot name="logo">
          <v-list-item
            v-if="logo"
            :prepend-avatar="logo.src"
            :title="logo.title"
          ></v-list-item>
        </slot>
      </v-list>

      <!-- User -->
      <v-list>
        <slot name="user">
          <v-list-item
            :base-color="'var(--info)'"
            v-if="user"
            :prepend-avatar="user.src"
            :subtitle="user.email"
            :title="user.name"
          ></v-list-item>
        </slot>
      </v-list>

      <v-divider class="mt-4 mb-4"></v-divider>

      <!-- Menu -->
      <v-list class="pages-content">
        <slot name="menu">
          <template v-for="item in items" :key="item.title">
            <v-list-item
              :base-color="'var(--title)'"
              :color="'var(--accent)'"
              :class="{ 'non-clickable': !item.to }"
              :to="item.to"
            >
              <div class="d-flex align-center">
                <v-icon v-if="item.icon" left>{{ item.icon }}</v-icon>
                <h4 class="ml-4" v-if="expanded">{{ item.title }}</h4>
              </div>
            </v-list-item>
            <template v-if="item.subPages && expanded">
              <v-list class="subpages">
                <v-list-item
                  :base-color="'var(--subtitle)'"
                  :color="'var(--accent)'"
                  v-for="subPage in item.subPages"
                  :key="subPage.title"
                  :to="subPage.to"
                  :title="subPage.title"
                  :prepend-icon="subPage.icon"
                ></v-list-item>
              </v-list>
            </template>
          </template>
        </slot>
      </v-list>

      <v-list class="actions">
        <slot name="actions">
          <v-list-item
            v-for="action in actions"
            :key="action.title"
            :to="action.to"
            :base-color="'var(--title)'"
            :color="'var(--accent)'"
          >
            <div class="d-flex align-center">
              <v-icon v-if="action.icon" left>{{ action.icon }}</v-icon>
              <h4 class="ml-4" v-if="expanded">{{ action.title }}</h4>
            </div>
          </v-list-item>
        </slot>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MAppDrawer',
  props: {
    visible: Boolean,
    width: Number,
    logo: Object,
    items: Array,
    actions: Array,
    user: Object,
  },
  data() {
    return {
      menu: this.visible,
      expanded: false,
    }
  },
})
</script>

<style src="./MAppDrawer.css" scoped></style>
