<template>
  <div>
    <span class="title-input">
      {{ title }}
    </span>
    <v-text-field
      v-if="!isSelector"
      variant="outlined"
      density="compact"
      :hide-details="rules?.length === 0"
      :type="showPassword ? 'text' : type"
      :placeholder="placeholder"
      :prefix="prefix"
      :suffix="suffix"
      :rules="rules"
      v-model="computedValue"
      style="font-size: 0.9rem !important"
    >
      <template v-slot:prepend v-if="prependIcon">
        <v-icon v-if="prependIcon">{{ prependIcon }}</v-icon>
      </template>
      <template v-slot:append v-if="appendIcon">
        <v-icon v-if="appendIcon">{{ appendIcon }}</v-icon>
      </template>
      <template v-slot:prepend-inner v-if="prependInnerIcon">
        <v-icon v-if="prependInnerIcon">{{ prependInnerIcon }}</v-icon>
      </template>
      <template
        v-slot:append-inner
        v-if="type === 'password' || appendInnerIcon"
      >
        <v-icon v-if="type === 'password'" @click="togglePasswordVisibility">{{
          showPassword ? 'mdi-eye-off' : 'mdi-eye'
        }}</v-icon>
        <v-icon v-else-if="appendInnerIcon">{{ appendInnerIcon }}</v-icon>
      </template>
    </v-text-field>
    <v-select
      v-if="isSelector"
      class="select-field"
      density="compact"
      variant="outlined"
      v-model="optionSelected"
      :items="options"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'MInputField',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    prependIcon: String,
    appendIcon: String,
    prependInnerIcon: String,
    appendInnerIcon: String,
    title: String,
    placeholder: String,
    prefix: String,
    suffix: String,
    rules: Array,
    modelValue: [String, Number, Boolean],
    isSelect: Boolean,
    options: Array,
    defaultSelection: String,
  },
  data() {
    return {
      optionSelected: '',
      showPassword: false,
      isSelector: false,
    }
  },
  computed: {
    computedValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
  },
  mounted() {
    this.isSelector = this.isSelect
    this.optionSelected = this.defaultSelection
  },
}
</script>

<style src="./MInputField.css" scoped></style>
