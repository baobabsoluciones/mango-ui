# Component Documentation

This page provides documentation for all components in our library.

## Index

- [MAppDrawer](#app-drawer)
- [MSearchAndFilterForTables](#search-and-filter-for-tables)

## App Drawer

The `MAppDrawer` is a Vue 3 component that provides a navigation drawer for your application. It uses the v-navigation-drawer component from Vuetify and provides additional features such as a logo, user information, a menu, and actions.

### Props

- `visible`: Boolean - Determines whether the drawer is visible or not.
- `width`: Number - Specifies the width of the drawer.
- `logo`: Object - Contains the logo information. It should have the following structure: `{ src: 'logo.png', title: 'Logo' }`.
- `items`: Array - An array of objects representing the menu items. Each object should have the following structure: `{ title: 'Item', to: '/path', icon: 'icon-name', subPages: [{ title: 'SubPage', to: '/subpath', icon: 'icon-name' }] }`.
- `actions`: Array - An array of objects representing the action items. Each object should have the following structure: `{ title: 'Action', to: '/path', icon: 'icon-name' }`.
- `user`: Object - Contains the user information. It should have the following structure: `{ name: 'User', email: 'user@example.com', src: 'user.png' }`.

### Usage

First, import the `MAppDrawer` component:

```vue
import MAppDrawer from './MAppDrawer.vue';
```

Then, you can use it in your template:

```vue
<MAppDrawer
  :visible="true"
  :width="200"
  :logo="{ src: 'logo.png', title: 'Logo' }"
  :items="[
    { title: 'Home', to: '/', icon: 'home' },
    { title: 'About', to: '/about', icon: 'info' },
    { title: 'Contact', to: '/contact', icon: 'mail' },
  ]"
  :actions="[
    { title: 'Settings', to: '/settings', icon: 'settings' },
    { title: 'Logout', to: '/logout', icon: 'logout' },
  ]"
  :user="{ name: 'User', email: 'user@example.com', src: 'user.png' }"
/>
```

### Slots

The `MAppDrawer` component provides several slots for customization:

- `logo`: Use this slot to customize the logo.
- `user`: Use this slot to customize the user information.
- `menu`: Use this slot to customize the menu items.
- `actions`: Use this slot to customize the action items.

Here's an example of how to use the slots:

```vue
<MAppDrawer>
    <template #logo>
      <img src="custom-logo.png" alt="Logo" />
    </template>

    <template #user>
      <div>
        <img src="custom-user.png" alt="User" />
        <p>Custom User</p>
      </div>
    </template>

    <template #menu>
      <div>
        <a href="/custom-path">Custom Item</a>
      </div>
    </template>

    <template #actions>
      <div>
        <a href="/custom-action">Custom Action</a>
      </div>
    </template>
  </MAppDrawer>
```

## Search and filter for tables

The `MSearchFilter` component is a Vue 3 component that contains a search input field with a toggle button, that shows and hides and a set of filters in a row.
It allows users to browse and apply various filters to narrow down the search results in a table of data.
The component provides a smooth transition when toggling the display of filters.

### Props

- `filters`: an object representing the available filters. Each filter object should have the following structure:
  `'name': { 'type': String, //The type of filter. This can be 'range', 'checkbox' or 'dateRange'. }`

### Usage

First, import the `MSearchFilter` component in the script of the project you want to use it in:

```vue
import MSearchFilter from './MSearchFilter.vue';
```

Then you can use it:

```vue
<FilterSearch
  :filters="{
    name1: {
      type: 'range',
    },
    name2: {
      type: 'checkbox',
      options: [
        { checked: true, label: 'Label1', value: 'value1' },
        { checked: false, label: 'Label2', value: 'value2' },
      ],
    },
    name3: {
      type: 'daterange',
    },
  }"
/>
```

### Aditional info

The `MSearchFilter` component is organized within the `FilterSearch` folder, which contains several subcomponents:

- FilterRow.vue: responsible for displaying and handling a row of individual filters
- FilterToggle.vue: provides the toggle functionality to show or hide the set of filters
- SearchBox.vue: presents the search input field for users to input their search queries

The `FilterSearch.vue` component orchestrates the communication between its child components by emitting events:

- `search`: this event is emitted when a search queries is entered in the space input field
- `range`: this event is emitted when a numeric range is entered in a filter
- `checked`: this event is emitted when a checkbox is selected in a filter
- `dateRange`: this event is emitted when a date range is selected in a filter
