<template>
  <div>
    <div
      v-for="(option, index) in localOptions"
      :key="index"
      class="option"
      :class="{ checked: option.checked }"
      @click="handleClick(option)"
    >
      <v-checkbox
        :value="true"
        v-model="option.checked"
        color="primary"
        hide-details
      />
      <div class="content">
        <div class="title-option">{{ option.text }}</div>
        <div class="description-option" v-if="option.description">
          {{ option.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localOptions: this.options,
    }
  },
  methods: {
    handleClick(selectedOption) {
      if (!this.multiple) {
        this.localOptions = this.localOptions.map((option) => {
          if (option !== selectedOption) {
            option.checked = false
          }
          return option
        })
      }
    },
  },
  watch: {
    localOptions: {
      handler(newOptions) {
        this.$emit('update:options', newOptions)
      },
      deep: true,
    },
  },
}
</script>

<style src="./MCheckboxOptions.css" scoped></style>
