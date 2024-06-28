# Component Documentation

This page provides documentation for all components in our library.

## Index

- [MAppDrawer](#app-drawer)
- [MSearchAndFilterForTables](#search-and-filter-for-tables)
- [MButton](#button)

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

## Button

The `MButton` is a very simple Vue 3 component based on the v-btn component from Vuetify.
It provides flexibility in customizing button appearance and behavior by allowing developers to easily create buttons with labels, icons, various colors, rounded corners, different sizes, and variant styles.


### Props

- `label`: String - It is the text label to display on the button.
- `icon`: String - Name of the Material Design Icons (MDI) icon to display on the button.
- `iconPosition`: String - Determines the position of the icon relative to the label. Can be 'prepend-icon' or 'append-icon'. 
- `color`: String - The background color of the button. Accepts any valid CSS color value (for example #033 or rgba(255, 0, 0, 0.5)) or the name of the material color (for example success or purple)
- `rounded`: String - Controls the roundedness of the button's corners. Possible values are '0', 'xs', 'sm', 'lg' or 'xl'.
- `size`: String - Controls the size of the button. Accepted values are 'x-small', 'small', 'large' or 'x-large'.
- `variant`: String - Controls the appearance or style of the botton. Possible values are elevated(default), flat, tonal, outlined, text, and plain.

### Usage

To use the `MButton` component, import it in the script of the project you want to use it in:

```vue
import MButton from './MButton.vue';
```

Then, within your template, use the `MButton` component as follows:

    ```vue
    <MButton
    label="Button"
    icon="mdi-heart"
    icon-position="prepend-icon"
    color="#020246"
    rounded="xl"
    size="small"
    :variant="'outlined'"/>
    ```

    This will render a small button with the label "Button", an MDI heart icon positioned before the label, rounded corners of extra-large size, and an outlined style in a custom dark blue color.

## KPI Chart Cards

The `KPIChartCard` component is a Vue 3 component designed to be part of dashboards or tables. It displays a card with a KPI value with its accompanying chart. The component is highly customizable, allowing the usear to choose different charts, colors and styles.

### Props

- `title`: String - The title of the KPI card.
- `value`: Number - The primary KPI value to be displayed for the chart type 'donut'.
- `series`: Array - An array of numbers representing the data series for the chart type 'area'.
- `chartType`: String - The type of chart to display. Accepted values are 'donut' and 'area'.
- `backgroundColor`: String - The background color of the card. Default color is `#b8b6b7`.
- `chartColor`: String - The color of the chart. Default color is `#214270`.
- `valueColor`: String - The color of the KPI value. Default color is `#000000`.
- `titleolor`: String - The color of the KPI title. Default color is `#000000`.

### Usage

To use the `KPIChartCard` component, it has to be imported in the script of the project you want to use it in:

```vue
import KPIChartCard from './KPIChartCard.vue';
```
The usage of the `KPIChartCard` component varies depending on the type of chart you want to display: `area` or `donut`. Here are examples of how to use the component for each type of chart:

For area chart (`chartType="area"`):
```vue
<KPIChartCard
  title="Occupation rate of filling racks"
  :series="[90, 31, 80, 40, 51, 42, 109, 100]"
  chartType="area"
  backgroundColor="#f2b6d6"
  titleColor="#8c0e21"
  valueColor="#8c0e21"
  chartColor="#214270"
/>
```

This example requires the series prop, which is an array representing the data series for the area chart.
This will render a KPI card with the title "Occupation rate of filling racks", an area chart, and a KPI value of 100 (the last element in the series). The background color of the card will be light pink (#f2b6d6), the chart color will be dark blue (#1b1c2e), and both the title and KPI value will be dark red (#8c0e21).

For donut chart (`chartType="donut"`):
```vue
<KPIChartCard
  title="Occupation rate of filling racks"
  :value="50"
  chartType="donut"
  backgroundColor="#f2b6d6"
  chartColor="#1b1c2e"
  titleColor="#8c0e21"
  valueColor="#8c0e21"
/>
```

This example only requires the value prop, which represents the KPI value to be displayed in the donut chart. 
This will render a KPI card with the title "Occupation rate of filling racks", a donut chart, and a KPI value of 50. The background color of the card will be light pink (#f2b6d6), the chart color will be dark blue (#1b1c2e), and both the title and KPI value will be dark red (#8c0e21).

In summary, when using the `KPIChartCard` component, provide the `series` prop for area charts and the `value` prop for donut charts, along with other necessary props for styling and customization.

### Additional info

The `KPIChartCard` component is organized within the `KPICharts` folder, which contains several subcomponents:

- `ChartCardTitle.vue`: Displays the title of the KPI card.
- `KPIValue.vue`: Displays the KPI value.
- `DonutChart.vue`: Displays a donut chart using Vue Apex Charts.
- `AreaChart.vue`: Displays an area chart using Vue Apex Charts.

The `KPIChartCard.vue` component orchestrates the communication between its child components.
