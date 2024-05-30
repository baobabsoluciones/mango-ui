<template>
  <v-bottom-navigation
    style="position: fixed !important"
    bg-color="#EAEAEA"
    height="40"
    elevation="0"
  >
    <v-tabs density="compact">
      <v-tab
        class="my-tab"
        max-height="40"
        density="compact"
        rounded="xs"
        slim
        v-for="(tab, index) in tabs"
        :key="index"
        :class="tab.selected === true ? 'selected-tab' : ''"
        @click="selectTab(tab)"
      >
        <v-icon v-if="tab.loading" class="mr-2 loading-icon" color="primary"
          >mdi-loading</v-icon
        >
        <v-icon v-else class="mr-2" color="primary">{{ tab.icon }}</v-icon>
        {{ tab.text
        }}<v-icon
          style="font-size: 0.7rem !important"
          @click="closeTab(index)"
          class="ml-3"
          >mdi-close</v-icon
        >
      </v-tab>
        <v-tab
        class="create-tab-btn"
        max-height="40"
        density="compact"
        rounded="xs"
        slim
        @click.stop="$emit('create')"
      >
        <v-icon style="font-size: 0.85rem" class="mr-1">mdi-plus</v-icon>
        <span style="font-size: 0.85rem !important; text-transform: none !important; letter-spacing: normal !important;">{{ createTitle }}</span>
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <slot name="actions"></slot>
  </v-bottom-navigation>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MAppBarTab',
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    createTitle: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const closeTab = (index) => {
      emit('close', index)
    }

    const selectTab = (tab) => {
      emit('select', tab)
    }

    return { closeTab, selectTab }
  },
}
</script>

<style src="./MAppBarTab.css" scoped></style>
