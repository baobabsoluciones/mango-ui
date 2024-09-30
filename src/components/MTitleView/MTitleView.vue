<template>
  <div class="icon-title">
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
</template>

<script>
export default {
  name: 'MTitleView',
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
  },
}
</script>

<style src="./MTitleView.css" scoped></style>
