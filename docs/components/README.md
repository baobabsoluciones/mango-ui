# Component Documentation

This page provides documentation for all components in our library.

## Index

- [MAppDrawer](#app-drawer)
- [MSearchAndFilterForTables](#search-and-filter-for-tables)
- [MButton](#button)
- [MDragNDropFile](#drag-n-drop-file)

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

## DragNDropFile

The DragNDropFile component is a Vue 3 component that facilitates drag and drop file uploading. It provides a user-friendly interface for users to upload files by dragging them onto a designated area.

### Props

- `uploadedFile`: File - The currently uploaded file.
- `downloadIcon`: String - The Material Design Icons (MDI) icon to display in the drop area.
- `description`: String - Description text to display in the drop area.
- `formatsAllowed`: Array - An array of file formats allowed for upload.
- `downloadButtonTitle`: String - Title for the upload button.
- `invalidFileText`: String - Text to display when an invalid file is uploaded.
- `errors`: String - Error message to display.

### Emits

- `file-selected`: This event is emitted when a file is successfully selected, either by manually selecting a file from the file explorer or by dragging and dropping a file into the designated area. The selected file is passed as an argument in the event. You can listen for this event in the parent component to handle logic related to the selected file.

### Usage

```vue
import DragNDropFile from './DragNDropFile.vue';
<DragNDropFile
  downloadIcon="mdi-upload"
  :description="'Description'"
  :uploadedFile="selectedFile"
  :formatsAllowed="['json', 'xlsx']"
  :errors="instanceErrors"
  :downloadButtonTitle="'DownloadButtonTitle'"
  :invalidFileText="'InvalidFileText'"
  @file-selected="onFileSelected"
/>
```

### MFormSteps

The MFormSteps is a Vue 3 component designed to facilitate the creation of multi-step form interfaces. It provides a structured approach to presenting form steps, enabling developers to guide users through sequential stages of a form submission process.

### Props

- `steps`: Array - An array of objects representing each step of the form. Each step object contains a title and subtitle to be displayed.
- `previousButtonText`: String - Text to display on the "Previous" button for navigating to the previous step.
- `continueButtonText`: String - Text to display on the "Continue" button for navigating to the next step.
- `disablePreviousButton`: Boolean - Whether to disable the "Previous" button when on the first step.
- `disableNextButton`: Boolean - Whether to disable the "Continue" button when on the last step.
- `currentStep`: Number - The index of the current step. Defaults to 0.

### Emits

- `update:currentStep`: This event is emitted when the value of localCurrentStep changes. It is used to synchronize the state of the parent component with the internal state of the MFormSteps component. By listening to this event in the parent component and updating the value of currentStep, the parent component can control the current step of the form.

### Slots

- `step-${localCurrentStep}-title`: This slot allows the user to customize the title of the current step of the form. If provided, it will replace the default title of the current step. This allows greater flexibility in displaying specific information at each step of the form.

- `step-${localCurrentStep}-content`: This slot allows the user to customize the content of the current step of the form. If provided, it will replace the default content of the current step. This is useful for displaying specific form fields or any other content related to the current step.

- `step-${localCurrentStep}-previous-button`: This slot allows the user to customize the "Previous" button of the current step of the form. If provided, it will replace the default "Previous" button of the current step. This allows customizing the appearance or behavior of the "Previous" button according to the user's needs.

- `step-${localCurrentStep}-continue-button`: This slot allows the user to customize the "Continue" button of the current step of the form. If provided, it will replace the default "Continue" button of the current step. This is useful for customizing the appearance or behavior of the "Continue" button according to the user's needs.

### Usage

```vue
<MFormSteps
  :steps="steps"
  :disablePreviousButton="disablePrevButton"
  :disableNextButton="disableNextButton"
  :currentStep.sync="currentStep"
  :continueButtonText="$t('projectExecution.continueButton')"
  :previousButtonText="$t('projectExecution.previousButton')"
  @update:currentStep="handleStepChange"
  class="mt-5"
></MFormSteps>
```

This will render a multi-step form interface with each step represented by a card. The user can navigate between steps using the "Previous" and "Continue" buttons. The appearance and behavior of these buttons can be customized using the provided props.

### MTitleView

The MTitleView component is a Vue 3 component designed to display a title along with an optional icon and description. It provides a simple and flexible way to present information with a consistent layout.

### Props

- `icon`: String - The name of the icon to display alongside the title.
- `title`: String - The main title to be displayed.
- `description`: String - An optional description to provide additional context or details.

### Usage

To use the MTitleView component, import it into the script of your Vue project:

```vue
<MTitleView
  :icon="'mdi-check'"
  :title="'Title'"
  :description="'Description text goes here'"
/>
```

This will render a title along with an icon, if provided, and an optional description. The appearance of the title and description can be customized using CSS styles defined within the component.

### MAppBarTab Component

The MAppBarTab component provides a customizable bottom navigation bar with tabs and a create button. It allows users to navigate between different tabs and create new items.

### Props

- `tabs` (Array, default: []): An array of objects representing each tab in the bottom navigation bar. Each object should contain the following properties:

  - `icon (String)`: The icon to display for the tab.
  - `text (String)`: The text to display for the tab.
  - `selected (Boolean, optional)`: Indicates whether the tab is currently selected.
  - `loading (Boolean, optional)`: Indicates whether the tab is in a loading state.

- `createTitle (String, default: '')`: The title to display on the create button.

### Events

- `close`: Emitted when a tab is closed. Emits the index of the tab that was closed.
- `select`: Emitted when a tab is selected. Emits the tab object that was selected.
- `create`: Emitted when the create button is clicked.

```vue
  <MAppBarTab
    :tabs="tabs"
    createTitle="Add New"
    @close="onTabClose"
    @select="onTabSelect"
    @create="onCreate"
  />
</template>
```

### MInfoCard Component

The MInfoCard component represents an information card that displays an icon, title, description, and optional content.

### Props

`icon (String, default: '')`: The icon to display on the card.
`iconColor (String, default: '')`: The color of the icon.
`title (String, default: '')`: The title of the card.
`description (String, default: '')`: The description of the card.

### Slots

`Default Slot`: The default slot is used to provide additional content within the card.
`icon`: This slot allows you to customize the icon displayed on the card. If not provided, the default icon specified in the icon prop will be used.
'title': This slot allows you to customize the title displayed on the card. If not provided, the default title specified in the title prop will be used.
`description`: This slot allows you to customize the description displayed on the card. If not provided, the default description specified in the description prop will be used.

### Usage

Here's an example of how to use the MInfoCard component:

```vue
<template>
  <MInfoCard
    icon="mdi-account"
    iconColor="primary"
    title="User Information"
    description="View and edit user details"
  >
  </MInfoCard>
</template>
```

### MPanelData Component

The MPanelData component displays data in an expandable panel format, allowing users to view detailed information categorized by date. It also provides options to filter the data by date range.

### Props

- `data (Array, required)`: An array of objects representing the data to be displayed. Each object should contain a date property and a data property.
- `showFirstHeaders (Boolean, default: false)`: Controls whether to show headers for the first panel.
- `checkboxOptions (Array, required)`: An array of objects representing the checkbox options for filtering the data by date range. Each object should contain label, value, and color properties.
- `noDataMessage (String, default: 'No data for the selected range')`: The message to display when there is no data available for the selected range.
- `allPanelsOpen (Boolean, default: true)`: Controls whether all panels are initially expanded.
- `language (String, default: 'en')`: Indicates the language for the date formatting

### Events

- `date-range-changed`: Emitted when the date range is changed. Emits the selected date range value.

### Slots

- `Default Slot`: The default slot is used to provide a table component to display the data.

The slot receives the following props:

- `item-data`: The data to be displayed in the table.
- `show-headers`: Indicates whether to show headers for the table.
- `no-data`: This slot is used to provide custom content to be displayed when there is no data available.
- `custom-checkbox`: This slot is used to provide custom content for the "custom" date range option.

### Methods

formatDateForHeaders: A method to format dates for use as panel headers.

### Data

- `selectedDateRange`: The currently selected date range.
  customDateRange: An object representing the custom date range selected by the user, with from and to properties.

- `openedPanels`: An array containing the indices of the currently opened panels.

### Watchers

- `data`: Watches changes in the data prop and expands all panels if allPanelsOpen is true.

### Usage

Here's an example of how to use the MPanelData component:

```vue
<template>
  <MPanelData
    :data="panelData"
    :checkboxOptions="checkboxOptions"
    :noDataMessage="noDataMessage"
    :allPanelsOpen="true"
    @date-range-changed="onDateRangeChanged"
  >
    <template #table="{ itemData, showHeaders }">
      <!-- Custom table component -->
    </template>
    <template #no-data>
      <div>No data available for the selected range</div>
    </template>
    <template #custom-checkbox>
      <!-- Custom content for custom date range -->
    </template>
  </MPanelData>
</template>
```

### MPanelData Component

The MPanelData component displays data in an expandable panel format, allowing users to view detailed information categorized by date. It also provides options to filter the data by date range.

### Props

- `data (Array, required)`: An array of objects representing the data to be displayed. Each object should contain a date property and a data property.
- `showFirstHeaders (Boolean, default: false)`: Controls whether to show headers for the first panel.
- `checkboxOptions (Array, required)`: An array of objects representing the checkbox options for filtering the data by date range. Each object should contain label, value, and color properties.
- `noDataMessage (String, default: 'No data for the selected range')`: The message to display when there is no data available for the selected range.
- `allPanelsOpen (Boolean, default: true)`: Controls whether all panels are initially expanded.
- `language (String, default: 'en')`: Indicates the language for the date formatting

### Events

- `date-range-changed`: Emitted when the date range is changed. Emits the selected date range value.

### Slots

- `Default Slot`: The default slot is used to provide a table component to display the data.

The slot receives the following props:

- `item-data`: The data to be displayed in the table.
- `show-headers`: Indicates whether to show headers for the table.
- `no-data`: This slot is used to provide custom content to be displayed when there is no data available.
- `custom-checkbox`: This slot is used to provide custom content for the "custom" date range option.

### Methods

formatDateForHeaders: A method to format dates for use as panel headers.

### Data

- `selectedDateRange`: The currently selected date range.
  customDateRange: An object representing the custom date range selected by the user, with from and to properties.

- `openedPanels`: An array containing the indices of the currently opened panels.

### Watchers

- `data`: Watches changes in the data prop and expands all panels if allPanelsOpen is true.

### Usage

Here's an example of how to use the MPanelData component:

```vue
<template>
  <MPanelData
    :data="panelData"
    :checkboxOptions="checkboxOptions"
    :noDataMessage="noDataMessage"
    :allPanelsOpen="true"
    @date-range-changed="onDateRangeChanged"
  >
    <template #table="{ itemData, showHeaders }">
      <!-- Custom table component -->
    </template>
    <template #no-data>
      <div>No data available for the selected range</div>
    </template>
    <template #custom-checkbox>
      <!-- Custom content for custom date range -->
    </template>
  </MPanelData>
</template>
```

### Snackbar Component

The Snackbar component displays short-lived messages or notifications at the bottom of the screen. It allows users to receive important information without disrupting their current workflow.

Uses Vuetify's v-snackbar component to display the message. It binds the show property of the snackbar object to control the visibility of the snackbar. The color of the snackbar is also dynamically set based on the color property of the snackbar object. The message content is bound to the message property of the snackbar object.

### Usage

To use the Snackbar component, you need to provide a snackbar object from a parent component or a global provider. This snackbar object should contain the following properties:

- `show`: A Boolean value indicating whether the snackbar should be visible.
- `message`: The message content to be displayed in the snackbar.
- `color`: The color of the snackbar, typically indicating the severity or type of the message (e.g., success, error, warning).

```vue
<template>
  <div>
    <Snackbar :snackbar="snackbarData" />
    <!-- Other content -->
  </div>
</template>

<script>
import { ref } from 'vue'
import Snackbar from '@/components/Snackbar.vue'

export default {
  components: {
    Snackbar,
  },
  setup() {
    const snackbarData = ref({
      show: false,
      message: '',
      color: 'success',
    })

    return {
      snackbarData,
    }
  },
}
</script>
```

### InputField

The InputField component provides a customizable input field with various features such as icons, prefixes, suffixes, and password visibility toggling.

Consists of a v-text-field from Vuetify, which serves as the input field. It allows users to input text or other data. The component supports features such as outlined variant, compact density, placeholder text, prefix, suffix, and validation rules.

### Props

  - `type (String, default: 'text')`: Specifies the type of input field (e.g., text, password).
  - `prependIcon (String)`: Specifies the icon to be prepended to the input field.
  - `appendIcon (String)`: Specifies the icon to be appended to the input field.
  - `prependInnerIcon (String)`: Specifies the icon to be prepended inside the input field.
  - `title (String)`: The title or label of the input field.
  - `placeholder (String)`: The placeholder text displayed in the input field when it is empty.
  - `prefix (String)`: The text or icon to be displayed as a prefix inside the input field.
  - `suffix (String)`: The text or icon to be displayed as a suffix inside the input field.
  - `rules (Array)`: An array of validation rules for the input field.
  - `modelValue (String, Number, Boolean)`: The value of the input field, typically bound using the v-model directive.

### Usage

The InputField component can be used in templates wherever input fields are required. Here's an example of how to use the component:

  ```vue
    <template>
      <div>
        <InputField
          type="password"
          title="Password"
          placeholder="Enter your password"
          prependIcon="mdi-lock"
          suffix="characters"
          :rules="passwordRules"
          v-model="password"
        />
      </div>
    </template>
  ```

