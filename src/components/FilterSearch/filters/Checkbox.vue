<template>
  <v-checkbox v-model="checked" :label="name" @change="handleChange"/>
</template>

<script lang="ts">
export default {
  name: 'MultiCheckbox',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number], 
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: this.active, // Initialize checked with the value of active
      label: '',
    }
  },
  methods: {
    handleChange() {
      if (this.checked) {
        this.$emit('addChecked', this.value);
      } else {
        this.$emit('removeChecked', this.value);
      }
    },
  },
  watch: {
    active(newActive) {
      // Update checked when active changes
      this.checked = newActive;
    },
  },
}
</script>

<style scoped>
.checkbox-container {
  max-height: 48px;
  overflow: hidden;
}
</style>