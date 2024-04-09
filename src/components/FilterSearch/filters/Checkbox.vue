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
      active: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      //
    },
    data() {
      return {
        checked: false,
        label: '',
      }
    },
    methods: {
      handleChange() {
        if (this.checked) {
          this.checked=true
          this.$emit('addChecked', this.name);

        } else {
          this.checked=false
          this.$emit('removeChecked', this.name);
        }
      },
    },
    watch: {
      
  }
}
</script>

<style scoped>
  .checkbox-container {
    max-height: 48px;
    overflow: hidden;
  }
</style>
