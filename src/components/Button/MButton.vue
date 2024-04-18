<template >
  <v-btn class="custom-transform-class text-none"
    v-bind="{
      rounded: rounded,
      color: color,
      flat: flat,
      variant: variant,
      size: size || undefined,
      ...$attrs,
    }"
  >
    <v-icon v-if="icon && !label">{{ icon }}</v-icon>
    <span v-if="label">
      <v-icon v-if="icon && iconPosition === 'prepend-icon'">{{ icon }}</v-icon>
      {{ label }}
      <v-icon v-if="icon && iconPosition === 'append-icon'">{{ icon }}</v-icon>
    </span>
  </v-btn>
</template>

<script lang="ts">
export default {
  name: 'MButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
    rounded: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: 'append-icon',
    },
    flat: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String,
      default: 'flat',
    }
  },
}
</script>
<style lang="sass">
  .custom-transform-class
    text-transform: uppercase
</style>