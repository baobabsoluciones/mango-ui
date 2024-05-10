# Guide

Mango Vue is a Vue 3 component library that provides a set of reusable and customizable UI components.

## Installation

To install Mango Vue, use the following command:

```bash
npm install mango-ui
```

## Usage

After installing the library, you can import and use the components in your Vue 3 project. Here's an example of how to use a Button component:

```vue
<template>
  <MangoButton @click="handleClick">Click me</MangoButton>
</template>

<script>
import { MangoButton } from 'mango-ui'

export default {
  components: {
    MangoButton,
  },
  methods: {
    handleClick() {
      console.log('Button clicked!')
    },
  },
}
</script>
```

## Licence

Mango Vue is MIT licensed.
