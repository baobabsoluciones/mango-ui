This page provides documentation for some of the key components in our library: `AppMenuDrawer` and `SearchAndFilterForTables`.

## Navigation Drawer

The `MangoNavigationDrawer` is a sidebar navigation component.

### Usage

```vue
<template>
  <MangoNavigationDrawer :items="menuItems" />
</template>

<script>
import { MangoNavigationDrawer } from 'mango-ui'

export default {
  components: {
    MangoNavigationDrawer
  },
  data() {
    return {
     
    }
  },
}
</script>
```
In this example, items is a prop that takes an array of menu items. Each menu item is an object with title and link properties.

## Search and filter for tables

The `MangoSearchFilter` component provides search and filter functionality for tables.

### Usage
```vue

```