## Search and filter for tables

The `MSearchFilter` component is a Vue 3 component that contains a search input field with a toggle button, that shows and hides and a set of filters in a row.
It allows users to browse and apply various filters to narrow down the search results in a table of data.
The component provides a smooth transition when toggling the display of filters.

### Props
filters: an object representing the available filters. Each filter object should have the following structure:
'name': {
  'type': String, //The type of filter. This can be 'range', 'checkbox' or 'dateRange'.
}

### Usage
First, import th `MSearchFilter` component in the script of the project you want to use it in:
```vue
import MSearchFilter from './MSearchFilter.vue';
```

Then you can use it:
```vue
<FilterSearch :filters="{
  name1: {
    type: 'range'
  },
  name2: {
    type: 'checkbox',
    options: [
      {checked: true, label: 'Label1', value: 'value1'},
      {checked: false, label: 'Label2', value: 'value2'}
    ]
  },
  name3: {
    type: 'daterange',
  }
}"/>
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







