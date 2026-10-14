<template>
  <v-menu
    v-model="isOpen"
    :close-on-content-click="false"
    :offset="4"
    location="bottom end"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="activator" :props="activatorProps" :isOpen="isOpen">
        <v-btn
          icon="mdi-dots-vertical"
          variant="text"
          size="small"
          v-bind="activatorProps"
          class="m-dropdown-menu__trigger"
        />
      </slot>
    </template>

    <v-card class="m-dropdown-menu" elevation="2" rounded="lg" min-width="200">
      <v-list density="compact" class="m-dropdown-menu__list">
        <template v-for="(section, sectionIndex) in sections" :key="sectionIndex">
          <v-list-subheader
            v-if="section.title"
            class="m-dropdown-menu__section-header"
          >
            {{ section.title }}
          </v-list-subheader>

          <MDropdownMenuItem
            v-for="(item, itemIndex) in section.items"
            :key="itemIndex"
            :item="item"
            @item-click="handleItemClick"
          />

          <v-divider
            v-if="sectionIndex < sections.length - 1"
            class="m-dropdown-menu__divider"
          />
        </template>

        <MDropdownMenuItem
          v-for="(item, itemIndex) in items"
          :key="`item-${itemIndex}`"
          :item="item"
          @item-click="handleItemClick"
        />

        <slot name="content" />
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import MDropdownMenuItem from './MDropdownMenuItem.vue'
import type { DropdownItem, DropdownSection } from './types'

const props = withDefaults(
  defineProps<{
    items?: DropdownItem[]
    sections?: DropdownSection[]
    modelValue?: boolean
    closeOnItemClick?: boolean
  }>(),
  {
    items: () => [],
    sections: () => [],
    modelValue: false,
    closeOnItemClick: true,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'item-click': [item: DropdownItem]
}>()

const isOpen = ref(props.modelValue)

watch(
  () => props.modelValue,
  (value) => {
    isOpen.value = value
  },
)

watch(isOpen, (value) => {
  if (value !== props.modelValue) emit('update:modelValue', value)
})

// Runs item.action() and then emits item-click: listeners must not call
// item.action() again.
const handleItemClick = (item: DropdownItem) => {
  if (item.disabled) return

  if (item.action) {
    item.action()
  }

  emit('item-click', item)

  if (props.closeOnItemClick) {
    isOpen.value = false
  }
}
</script>

<style scoped>
.m-dropdown-menu {
  background: white;
  border-radius: 8px;
  border: 1px solid #6e6e6e33;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.m-dropdown-menu__list {
  padding: 8px 0;
}

.m-dropdown-menu__section-header {
  font-weight: 600;
  font-size: 12px;
  color: var(--title);
  padding: 8px 16px 4px 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.m-dropdown-menu__divider {
  margin: 4px 0;
  border-color: #e0e0e0;
}

.m-dropdown-menu__trigger {
  color: var(--subtitle);
}

.m-dropdown-menu__trigger:hover {
  background-color: var(--primary-light-variant);
}
</style>
