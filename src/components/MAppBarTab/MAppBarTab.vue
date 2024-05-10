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
    </v-tabs>
    <v-spacer></v-spacer>
    <v-btn
      class="create-tab-btn"
      variant="outlined"
      size="x-small"
      rounded="lg"
      @click="$emit('create')"
    >
      <v-row no-gutters class="align-center">
        <v-col cols="auto">
          <v-icon style="font-size: 0.85rem" class="mr-1">mdi-plus</v-icon>
        </v-col>
        <v-col cols="auto">
          {{ createTitle }}
        </v-col>
      </v-row>
    </v-btn>
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
