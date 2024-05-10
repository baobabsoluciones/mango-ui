<template>
  <v-card class="elevation-2 rounded-lg">
    <v-card-text class="text-center">
      <slot name="icon">
        <v-icon
          :color="iconColor"
          style="font-size: 4rem !important"
          class="mb-4"
          >{{ icon }}</v-icon
        >
      </slot>
      <slot name="title">
        <div class="info-card-title mb-2">
          {{ title }}
        </div>
      </slot>
      <slot name="description">
        <div
          class="info-card-subtitle mb-4"
          style="color: var(--subtitle); font-size: 0.8rem"
        >
          {{ description }}
        </div>
      </slot>
    </v-card-text>
    <slot name="content"></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style src="./MInfoCard.css" scoped></style>

