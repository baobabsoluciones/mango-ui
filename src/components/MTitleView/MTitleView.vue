<template>
  <div class="icon-title">
    <div class="icon-title-header">
      <div class="icon-title-left">
        <div class="icon-title-row">
          <div class="icon">
            <v-icon>{{ icon }}</v-icon>
          </div>
          <h4 class="title">{{ title }}</h4>
        </div>
        <div class="description">
          <p v-if="description">{{ description }}</p>
        </div>
      </div>
      <div v-if="$slots.actions || hasDropdownActions" class="actions">
        <slot name="actions">
          <MDropdownMenu
            :items="dropdownItems"
            :sections="dropdownSections"
            @item-click="$emit('dropdown-item-click', $event)"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import MDropdownMenu from '../MDropdownMenu/MDropdownMenu.vue'

export default {
  name: 'MTitleView',
  components: { MDropdownMenu },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    dropdownItems: {
      type: Array,
      default: () => [],
    },
    dropdownSections: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['dropdown-item-click'],
  computed: {
    hasDropdownActions() {
      return (
        (this.dropdownItems?.length ?? 0) > 0 ||
        (this.dropdownSections?.length ?? 0) > 0
      )
    },
  },
}
</script>

<style src="./MTitleView.css" scoped></style>
