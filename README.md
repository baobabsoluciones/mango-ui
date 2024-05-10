# Mango Vue

Mango Vue is a Vue 3 component library based on Vuetify. This library provides a set of reusable UI components that can be used in any Vue 3 project.

## Creating new components

1. Create a new Vue component in the `src/components` directory.
2. Export the component in the `src/index.ts` file.

For example, if you have a component named `MyComponent.vue`, you can export it like this:

```typescript
// src/index.ts
export { default as MyComponent } from './components/MyComponent.vue'
```

## Using components in other projects

You can use the components from this library in other projects by importing them like this:

```typescript
import { MyComponent } from 'mango-ui'
```

## Documentation with VuePress

We use VuePress for documentation. Here are the steps to document a new component:

1. Navigate to docs/components/README.md and add the new component
2. Update in docs/guides/README.md component the 'Component' section
   For more information: https://vuepress.vuejs.org/

To initialize VuePress in local:
`npx vuepress dev docs`

To build Vuepress:
`npx vuepress build docs`

## Tips

- Keep your components small and focused. Each component should do one thing well.
- Make sure to document all props, events, and slots of your components.
- Write unit tests for your components to ensure they work as expected.
