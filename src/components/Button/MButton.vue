<template>
  <v-btn
    :class="['m-button', 'text-none', sizeClass, { 'm-button--filled': variant === 'filled' }]"
    v-bind="{
      rounded: rounded,
      color: resolvedColor,
      flat: flat,
      variant: resolvedVariant,
      icon: isIconOnly,
      size: resolvedSize,
      ...$attrs,
    }"
    :style="buttonStyle"
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
// Semantic colors resolved to the CSS variables in variables.css.
// 'grey' means no color: the button keeps the default text color.
const COLOR_MAP: Record<string, string> = {
  primary: 'var(--primary)',
  danger: 'var(--danger)',
  warning: 'var(--warning)',
  success: 'var(--success)',
  grey: '',
}

const VARIANT_MAP: Record<string, string> = {
  filled: 'flat',
  icon: 'text',
}

const SIZE_MAP: Record<string, string> = {
  xs: 'x-small',
  xl: 'x-large',
}

// Sizes with their own height scale (see the m-button--size-* styles)
const SIZE_CLASS_MAP: Record<string, string> = {
  xs: 'xs',
  'x-small': 'xs',
  small: 'small',
  default: 'default',
  large: 'large',
  xl: 'xl',
  'x-large': 'xl',
}

const FILLED_VARIANTS = ['flat', 'elevated']

const ICON_POSITION_MAP: Record<string, string> = {
  before: 'prepend-icon',
  after: 'append-icon',
}

// Own keys only, so values like 'constructor' are not resolved from the prototype
const lookup = (map: Record<string, string>, key: string) =>
  Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined

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
    // Vuetify color, CSS color, or one of: primary, danger, warning, success, grey
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
    // xs, small, default, large, xl (or the Vuetify x-small / x-large)
    size: {
      type: String,
      default: '',
    },
    // 'prepend-icon' | 'append-icon' (or 'before' | 'after')
    iconPosition: {
      type: String,
      default: 'prepend-icon',
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
    resolvedColor(): string | undefined {
      if (this.backgroundColor) return this.backgroundColor
      const mapped = lookup(COLOR_MAP, this.color)
      if (mapped !== undefined) return mapped || undefined
      return this.color
    },
    resolvedVariant(): string {
      return lookup(VARIANT_MAP, this.variant) || this.variant
    },
    resolvedSize(): string | undefined {
      return lookup(SIZE_MAP, this.size) || this.size || undefined
    },
    sizeClass(): string | undefined {
      const size = lookup(SIZE_CLASS_MAP, this.size)
      return size ? `m-button--size-${size}` : undefined
    },
    resolvedIconPosition(): string {
      return lookup(ICON_POSITION_MAP, this.iconPosition) || this.iconPosition
    },
    buttonStyle(): Record<string, string> | undefined {
      // Vuetify cannot compute a readable text color for CSS variables
      const isCssVariable = !!this.resolvedColor?.startsWith('var(')
      const style: Record<string, string> = {}

      if (isCssVariable && FILLED_VARIANTS.includes(this.resolvedVariant)) {
        style.color = 'white'
      }
      // Outlined buttons keep dark text on white and use the color for the border
      if (isCssVariable && this.resolvedVariant === 'outlined') {
        style.color = '#333333'
        style.backgroundColor = 'white'
        style.borderColor = this.resolvedColor as string
      }
      if (this.textColor) style.color = this.textColor

      return Object.keys(style).length ? style : undefined
    },
  },
}
</script>

<style>
/* Without size, the corners follow the rounded prop (pill by default) */
.v-btn.m-button {
  font-weight: 600;
  letter-spacing: 0;
  text-indent: 0;
}

.m-button__content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.m-button__content .v-icon {
  font-size: 1.25em;
}

/*
 * With an explicit size, MButton follows the cornflow button design
 * (the former CoreButton): system font, height scale, paddings, gaps,
 * icon sizes, disabled opacity and hover effects.
 */
.v-btn.m-button[class*='m-button--size-'] {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-btn.m-button[class*='m-button--size-'] .v-btn__overlay {
  display: none;
}

.v-btn.m-button[class*='m-button--size-'].v-btn--disabled {
  opacity: 0.6;
}

.v-btn.m-button[class*='m-button--size-'].v-btn--disabled .v-btn__underlay {
  display: none;
}

/* Hover effects */
.v-btn.m-button--filled:not(.v-btn--disabled) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.v-btn.m-button--filled[class*='m-button--size-']:not(.v-btn--disabled):hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.v-btn.m-button--filled[class*='m-button--size-']:not(.v-btn--disabled):active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-btn.m-button.v-btn--variant-outlined[class*='m-button--size-']:hover {
  opacity: 0.9;
}

.v-btn.m-button.v-btn--variant-text[class*='m-button--size-']:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.v-btn.m-button.v-btn--variant-text[class*='m-button--size-']:active {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Height scale */
.v-btn.m-button--size-xs:not(.v-btn--icon) {
  --v-btn-height: 28px;
  font-size: 12px;
  padding: 0 12px;
  border-radius: 8px;
}

.v-btn.m-button--size-small:not(.v-btn--icon) {
  --v-btn-height: 36px;
  font-size: 13px;
  padding: 0 16px;
  border-radius: 10px;
}

.v-btn.m-button--size-default:not(.v-btn--icon) {
  --v-btn-height: 44px;
  font-size: 14px;
  padding: 0 20px;
  border-radius: 12px;
}

.v-btn.m-button--size-large:not(.v-btn--icon) {
  --v-btn-height: 52px;
  font-size: 16px;
  padding: 0 24px;
  border-radius: 14px;
}

.v-btn.m-button--size-xl:not(.v-btn--icon) {
  --v-btn-height: 60px;
  font-size: 18px;
  padding: 0 32px;
  border-radius: 16px;
}

/* Text buttons have smaller side paddings */
.v-btn.m-button--size-xs.v-btn--variant-text:not(.v-btn--icon) {
  padding: 0 8px;
}

.v-btn.m-button--size-small.v-btn--variant-text:not(.v-btn--icon) {
  padding: 0 12px;
}

.v-btn.m-button--size-default.v-btn--variant-text:not(.v-btn--icon) {
  padding: 0 20px;
}

.v-btn.m-button--size-large.v-btn--variant-text:not(.v-btn--icon) {
  padding: 0 20px;
}

.v-btn.m-button--size-xl.v-btn--variant-text:not(.v-btn--icon) {
  padding: 0 24px;
}

/* Gap and icon size */
.m-button--size-xs .m-button__content,
.m-button--size-small .m-button__content {
  gap: 6px;
}

.m-button--size-large .m-button__content {
  gap: 10px;
}

.m-button--size-xl .m-button__content {
  gap: 12px;
}

.m-button--size-xs .v-icon {
  font-size: 14px;
}

.m-button--size-small .v-icon {
  font-size: 16px;
}

.m-button--size-default .v-icon {
  font-size: 18px;
}

.m-button--size-large .v-icon {
  font-size: 20px;
}

.m-button--size-xl .v-icon {
  font-size: 22px;
}

/* Icon-only buttons */
.v-btn.m-button--size-xs.v-btn--icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
}

.v-btn.m-button--size-small.v-btn--icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
}

.v-btn.m-button--size-default.v-btn--icon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
}

.v-btn.m-button--size-large.v-btn--icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
}

.v-btn.m-button--size-xl.v-btn--icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
}

.v-btn.m-button.v-btn--icon[class*='m-button--size-']:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
