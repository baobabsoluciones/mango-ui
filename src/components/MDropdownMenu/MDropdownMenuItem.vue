<template>
  <v-list-item
    :disabled="item.disabled"
    :class="[
      'm-dropdown-menu__item',
      { 'm-dropdown-menu__item--disabled': item.disabled },
    ]"
    @click="$emit('item-click', item)"
  >
    <template v-if="item.icon" v-slot:prepend>
      <v-icon :icon="item.icon" size="16" class="m-dropdown-menu__item-icon" />
    </template>

    <v-list-item-title class="m-dropdown-menu__item-title">
      {{ item.title }}
    </v-list-item-title>

    <template v-if="item.rightIcon || item.rightContent" v-slot:append>
      <v-icon
        v-if="item.rightIcon"
        :icon="item.rightIcon"
        size="16"
        class="m-dropdown-menu__item-right-icon"
      />
      <span
        v-else-if="item.rightContent"
        class="m-dropdown-menu__item-right-content"
      >
        {{ item.rightContent }}
      </span>
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import type { DropdownItem } from './types'

defineProps<{
  item: DropdownItem
}>()

defineEmits<{
  'item-click': [item: DropdownItem]
}>()
</script>

<style scoped>
.m-dropdown-menu__item {
  padding: 8px 16px;
  min-height: 36px;
  transition: background-color 0.2s ease;
}

.m-dropdown-menu__item:hover {
  background-color: var(--primary-light-variant);
}

.m-dropdown-menu__item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.m-dropdown-menu__item--disabled:hover {
  background-color: transparent;
}

.m-dropdown-menu__item-title {
  font-size: 14px;
  color: var(--subtitle);
  font-weight: 400;
}

.m-dropdown-menu__item-icon {
  color: var(--subtitle);
  margin-right: 12px;
}

.m-dropdown-menu__item-right-icon {
  color: var(--subtitle);
  margin-left: 8px;
}

.m-dropdown-menu__item-right-content {
  color: var(--subtitle);
  font-size: 12px;
  margin-left: 8px;
}
</style>
