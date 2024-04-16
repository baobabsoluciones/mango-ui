<template>
    <v-btn
    :rounded="rounded"
    :color="color"
    :flat="flat"
    :prepend-icon="iconPosition === 'prepend-icon' ? icon : undefined"
    :append-icon="iconPosition === 'append-icon' ? icon : undefined"
    :size="size"
     v-bind="$attrs">
      <span v-if="label"> {{ label }} </span>  
    </v-btn>
</template>

<script lang="ts">
export default {
    name: 'MButton',
      props: {
        label: {
          type: String,
          default: ''
        },
        icon: {
          type: String,
          default: ''
        },
        color: {
          type: String,
          default: 'primary'
        },
        rounded: {
          type: String,
          default: '',
        },
        size: {
          type: String,
          default: ''
        },
        iconPosition: {
          type: String,
          default: 'append-icon',
        },
        flat: {
          type: Boolean,
          default: true
        },
      },
};
</script>
