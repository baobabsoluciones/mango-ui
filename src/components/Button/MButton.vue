<template>
  <v-btn
    class="m-button text-none"
    v-bind="{
      rounded: rounded,
      color: resolvedColor,
      flat: flat,
      variant: resolvedVariant,
      icon: isIconOnly,
      size: resolvedSize,
      style: textColor ? { color: textColor } : undefined,
      ...$attrs,
    }"
    @click="$emit('click', $event)"
  >
    <v-icon v-if="isIconOnly">{{ icon }}</v-icon>
    <span v-else-if="$slots.default || displayText" class="m-button__content">
      <v-icon v-if="icon && resolvedIconPosition === 'prepend-icon'">{{
        icon
      }}</v-icon>
      <slot>{{ displayText }}</slot>
      <v-icon v-if="icon && resolvedIconPosition === 'append-icon'">{{
        icon
      }}</v-icon>
    </span>
  </v-btn>
</template>

<script lang="ts">
// Semantic colors resolved to the CSS variables in variables.css
const COLOR_MAP: Record<string, string> = {
  danger: 'var(--danger)',
  warning: 'var(--warning)',
  success: 'var(--success)',
}

const VARIANT_MAP: Record<string, string> = {
  filled: 'flat',
  icon: 'text',
}

const SIZE_MAP: Record<string, string> = {
  xs: 'x-small',
  xl: 'x-large',
}

const ICON_POSITION_MAP: Record<string, string> = {
  before: 'prepend-icon',
  after: 'append-icon',
}

export default {
  name: 'MButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    // Alias of label
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    // Vuetify color, CSS color, or one of: danger, warning, success
    color: {
      type: String,
      default: 'primary',
    },
    // Overrides color
    backgroundColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    rounded: {
      type: String,
      default: '',
    },
    // Vuetify size, or xs / xl
    size: {
      type: String,
      default: '',
    },
    // 'prepend-icon' | 'append-icon' (or 'before' | 'after')
    iconPosition: {
      type: String,
      default: 'append-icon',
    },
    flat: {
      type: Boolean,
      default: true,
    },
    // Vuetify variant, or filled / icon
    variant: {
      type: String,
      default: 'flat',
    },
  },
  emits: ['click'],
  computed: {
    displayText(): string {
      return this.text || this.label
    },
    isIconOnly(): boolean {
      return (
        !!this.icon &&
        (this.variant === 'icon' || (!this.displayText && !this.$slots.default))
      )
    },
    resolvedColor(): string {
      return this.backgroundColor || COLOR_MAP[this.color] || this.color
    },
    resolvedVariant(): string {
      return VARIANT_MAP[this.variant] || this.variant
    },
    resolvedSize(): string | undefined {
      return SIZE_MAP[this.size] || this.size || undefined
    },
    resolvedIconPosition(): string {
      return ICON_POSITION_MAP[this.iconPosition] || this.iconPosition
    },
  },
}
</script>

<style>
.v-btn.m-button {
  font-weight: 600;
  letter-spacing: 0;
  border-radius: 12px;
}

.m-button__content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
</style>
