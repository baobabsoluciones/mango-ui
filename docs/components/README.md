# Component Documentation

This page provides documentation for all components in our library.

## Index

- [MAppDrawer](#app-drawer)
- [MSearchAndFilterForTables](#search-and-filter-for-tables)
- [MButton](#button)
- [MDragNDropFile](#dragndropfile)
- [MFormSteps](#mformsteps)
- [MTitleView](#mtitleview)
- [MAppBarTab](#mappbartab)
- [MInfoCard](#minfocard)
- [MPanelData](#mpaneldata)
- [Snackbar](#msnackbar)
- [MBaseModal](#mbasemodal)
- [MInputField](#minputfield)
- [MDataTable](#mdatatable)
- [MCheckboxOptions](#mcheckboxoptions)
- [MTabTable](#mtabtable)

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

The `MFilterSearch` component is a Vue 3 component that contains a search input field with a toggle button, that shows and hides and a set of filters in a row.
It allows users to browse and apply various filters to narrow down the search results in a table of data.
The component provides a smooth transition when toggling the display of filters.

### Props

- `filters`: an object representing the available filters. Each filter object should have the following structure:
  ```javascript
  {
    'name': {
      'title': String, // The title of the filter.
      'filterable': Boolean, // Whether the filter is applicable.
      'type': String, // The type of filter. This can be 'range', 'checkbox', or 'dateRange'.
      'selected': Boolean, // Whether the filter is selected.
      'required': Boolean, // Whether the filter is required.
      'options': Array, // (Optional) The options for 'checkbox' type filters.
      'min': Number | Date, // (Optional) The minimum value for 'range' or 'dateRange' type filters.
      'max': Number | Date, // (Optional) The maximum value for 'range' or 'dateRange' type filters.
    }
  }
  ```

### Usage

First, import the `MFilterSearch` component in the script of the project you want to use it in:

```vue
import MFilterSearch from './MFilterSearch.vue';
```

Then you can use it:

```vue
<template>
  <MFilterSearch
    :filters="filters"
    @reset="handleResetFilters"
    @search="handleSearch"
    @filter="handleFilters"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MFilterSearch from './MFilterSearch.vue'

const filters = ref({
  name1: {
    title: 'Filter 1',
    filterable: true,
    type: 'range',
    selected: false,
    required: false,
    min: 0,
    max: 100,
  },
  name2: {
    title: 'Filter 2',
    filterable: true,
    type: 'checkbox',
    selected: false,
    required: false,
    options: [
      { checked: true, label: 'Label1', value: 'value1' },
      { checked: false, label: 'Label2', value: 'value2' },
    ],
  },
  name3: {
    title: 'Filter 3',
    filterable: true,
    type: 'daterange',
    selected: false,
    required: false,
    min: new Date('2022-01-01'),
    max: new Date('2022-12-31'),
  },
})

const handleResetFilters = () => {
  console.log('Filters reset')
}

const handleSearch = (query) => {
  console.log('Search query:', query)
}

const handleFilters = (filters) => {
  console.log('Filters applied:', filters)
}
</script>
```

### Emits

The `FilterSearch.vue` component emits the following events:

- `reset`: this event is emitted when the filters are reset.
- `search`: this event is emitted when a search query is entered in the search input field.
- `filter`: this event is emitted when filters are applied.

### Aditional info

The `MFilterSearch` component is organized within the `FilterSearch` folder, which contains several subcomponents:

- FilterRow.vue: responsible for displaying and handling a row of individual filters
- FilterToggle.vue: provides the toggle functionality to show or hide the set of filters
- SearchBox.vue: presents the search input field for users to input their search queries

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

The `KPIChartCard` component is a Vue 3 component designed to be part of dashboards or tables. It displays a card with KPI values and their accompanying chart. The component is highly customizable, allowing the user to choose different charts, colors, sizes, and styles. It supports displaying multiple values with labels, making it perfect for comparisons.

### Props

- `title`: String - The title of the KPI card.
- `mainValue`: Object - The primary value object containing:
  - `value`: Number - The value to display
  - `label`: String - The label for this value (e.g., "Shift")
  - `color`: String - The color for this value and its chart element
- `secondaryValue`: Object - The secondary value object with the same structure as mainValue
- `series`: Array - An array of numbers representing the primary data series for the chart type 'area'.
- `secondarySeries`: Array - An array of numbers representing the secondary data series for the chart type 'area'.
- `chartType`: String - The type of chart to display. Accepted values are 'donut' and 'area'.
- `backgroundColor`: String - The background color of the card. Default color is `#FFFFFF`.
- `chartColor`: String - The default color of the primary chart element. Default color is `#214270`.
- `secondaryColor`: String - The default color of the secondary chart element. Default color is `#4CAF50`.
- `valueColor`: String - The default color of the KPI values. Default color is `#000000`.
- `titleColor`: String - The color of the KPI title. Default color is `#000000`.
- `height`: String - The height of the card in pixels. Default height is 150px.
- `width`: String - The width of the card in pixels. Default width is auto.
- `chartWidth`: String - The width of the chart in pixels. Default width for the charts is 150px.
- `chartHeight`: String - The height of the chart in pixels. Default height for the charts is 150px.
- `fontSize`: String - The size of the title font in pixels. Default size for the title font is 16px.
- `valueFontSize`: String - The size of the KPI value font in pixels. Default size for the value font is 42px.
- `formatSymbol`: String - An optional symbol to be displayed next to the KPI values (e.g., "%", "€", "m³"). The symbol will be shown with a slightly smaller font size (valueFontSize - 10px) for better visual hierarchy.

### Usage

To use the `KPIChartCard` component, import it in your script:

```vue
import KPIChartCard from './KPIChartCard.vue';
```

The usage varies depending on the type of chart. Here are examples for both types:

For donut chart (`chartType="donut"`):

```vue
<KPIChartCard
  title="Occupation Rate of Filling Racks"
  :mainValue="{ value: 90, label: 'Shift', color: '#3B82F6' }"
  :secondaryValue="{ value: 88, label: 'Avg.', color: '#10B981' }"
  chartType="donut"
  backgroundColor="#FFFFFF"
  width="400px"
  height="200px"
  chartWidth="120px"
  chartHeight="120px"
  valueFontSize="32px"
  formatSymbol="%"  // Will display "90%" and "88%" with the % slightly smaller
/>
```

For area chart (`chartType="area"`):

```vue
<KPIChartCard
  title="Expected Cryogenic Filled in the Shift"
  :mainValue="{ value: 23, label: 'Shift', color: '#3B82F6' }"
  :secondaryValue="{ value: 25, label: 'Avg.', color: '#10B981' }"
  chartType="area"
  :series="[18, 20, 22, 21, 23]"
  :secondarySeries="[20, 22, 24, 23, 25]"
  backgroundColor="#FFFFFF"
  width="400px"
  height="200px"
  chartWidth="200px"
  chartHeight="120px"
  valueFontSize="32px"
  formatSymbol="m³"  // Will display "23m³" and "25m³" with the m³ slightly smaller
/>
```

For single value usage:

```vue
<KPIChartCard
  title="Temperature Trend"
  :mainValue="{ value: 24, label: 'Celsius', color: '#3B82F6' }"
  chartType="area"
  :series="[20, 22, 23, 24, 24]"
  chartWidth="200px"
  chartHeight="120px"
  backgroundColor="#FFFFFF"
  width="400px"
  height="200px"
  valueFontSize="32px"
  formatSymbol="°C"  // Will display "24°C" with the °C slightly smaller
/>
```

### Additional info

The `KPIChartCard` component is organized within the `KPICharts` folder, which contains several subcomponents:

- `ChartCardTitle.vue`: Displays the title of the KPI card.
- `KPIValue.vue`: Displays the KPI values with their labels and optional format symbols.
- `DonutChart.vue`: Displays a donut chart using Vue Apex Charts, supporting multiple rings for value comparison.
- `AreaChart.vue`: Displays an area chart using Vue Apex Charts, supporting multiple series for trend comparison.

The component supports both single and multiple value displays, making it versatile for various dashboard needs. The charts automatically adapt to show comparisons when both main and secondary values are provided. Format symbols are automatically sized and positioned next to their respective values for optimal readability.

## MDragNDropFile

The MDragNDropFile component is a Vue 3 component that facilitates drag and drop file uploading. It provides a user-friendly interface for users to upload single or multiple files by dragging them onto a designated area or selecting them via a file dialog.

### Props

- `uploadedFiles`: Array - An array of previously uploaded files to display (used in multiple files mode).
- `uploadedFile`: File - A single file to display (used in single file mode for backward compatibility).
- `downloadIcon`: String - The Material Design Icons (MDI) icon to display in the drop area.
- `description`: String - Description text to display in the drop area.
- `formatsAllowed`: Array - An array of file formats allowed for upload (supports many formats including 'json', 'xlsx', 'csv', 'pdf', 'docx', 'jpg', etc.).
- `downloadButtonTitle`: String - Title for the upload button.
- `invalidFileText`: String - Text to display when an invalid file is uploaded.
- `errors`: String - Error message to display.
- `multiple`: Boolean - Whether to enable multiple file selection. Default is false for backward compatibility.

### Emits

- `files-selected`: This event is emitted when files are successfully selected in multiple mode. An array of selected files is passed as an argument.
- `file-selected`: This event is emitted when a single file is selected in single file mode (for backward compatibility).

### Features

- Multiple file selection via drag & drop or file dialog
- Single file selection mode for backward compatibility
- Comprehensive file type validation based on specified allowed formats
- Support for many file types:
  - Documents: PDF, TXT, DOC, DOCX, PPT, PPTX
  - Data files: JSON, CSV, XLSX, XML
  - Images: JPG, JPEG, PNG, GIF, SVG
  - Media: MP3, MP4
  - Archives: ZIP
- Robust MIME type detection with fallback to file extension checking
- Visual feedback for drag operations
- Individual file removal capability (in multiple mode)
- Compatible with Vue 3 and Vuetify

### Usage

#### Multiple File Mode

```vue
<template>
  <MDragNDropFile
    multiple
    downloadIcon="mdi-upload"
    description="Upload your files"
    :uploadedFiles="selectedFiles"
    :formatsAllowed="['json', 'xlsx', 'csv', 'pdf']"
    :errors="uploadErrors"
    downloadButtonTitle="Select Files"
    invalidFileText="Invalid file format. Please select appropriate files."
    @files-selected="onFilesSelected"
  />
</template>

<script>
import { ref } from 'vue'
import MDragNDropFile from './MDragNDropFile.vue'

export default {
  components: {
    MDragNDropFile
  },
  setup() {
    const selectedFiles = ref([])
    const uploadErrors = ref(null)
    
    const onFilesSelected = (files) => {
      selectedFiles.value = files
      // Process the files as needed
    }
    
    return {
      selectedFiles,
      uploadErrors,
      onFilesSelected
    }
  }
}
</script>
```

#### Single File Mode (Backward Compatible)

```vue
<template>
  <MDragNDropFile
    downloadIcon="mdi-upload"
    description="Upload a file"
    :uploadedFile="selectedFile"
    :formatsAllowed="['pdf', 'docx', 'doc']"
    :errors="uploadErrors"
    downloadButtonTitle="Select File"
    invalidFileText="Invalid file format. Please select a PDF or Word document."
    @file-selected="onFileSelected"
  />
</template>

<script>
import { ref } from 'vue'
import MDragNDropFile from './MDragNDropFile.vue'

export default {
  components: {
    MDragNDropFile
  },
  setup() {
    const selectedFile = ref(null)
    const uploadErrors = ref(null)
    
    const onFileSelected = (file) => {
      selectedFile.value = file
      // Process the file as needed
    }
    
    return {
      selectedFile,
      uploadErrors,
      onFileSelected
    }
  }
}
</script>
```

For a more comprehensive example of implementing multiple file uploads with this component, see the example in `docs/examples/MultipleFileUpload.vue`.

## MFormSteps

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

## MTitleView

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

## MAppBarTab Component

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

## MInfoCard Component

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

## MPanelData Component

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

## MSnackbar

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

## MBaseModal

The MBaseModal component is a base modal component that provides a customizable modal dialog box. It allows users to display content and interact with buttons within the modal.

### Template

The template of the MBaseModal component uses Vuetify's v-dialog component to create a modal dialog box. Inside the dialog, it includes a v-card containing the modal's title, content, and action buttons. The modal title can optionally display an icon on the left side. The content area is provided by the default slot named "content". Action buttons are dynamically generated based on the provided buttons prop.

### Props

- `value (Boolean, default: false)`: Controls the visibility of the modal dialog.
- `title (String, default: '')`: The title text displayed at the top of the modal.
- `icon (String, default: '')`: An optional icon to display alongside the title.
- `buttons (Array, default: [])`: An array of objects representing action buttons displayed at the bottom of the modal. Each button object should contain text, class, and action properties.
- `size (String, default: 'md')`: Specifies the size of the modal. Can be one of 'xs', 'md', or 'lg'.
- `closeOnOutsideClick (Boolean, default: true)`: Controls whether the modal should be closed when clicking outside of it.

### Emits

- `emitButtonAction(action)`: Emits the specified action when a button is clicked within the modal.

### Usage

Here's an example of how to use the MBaseModal component:

```vue
<MBaseModal
  v-model="openConfirmationSaveModal"
  :closeOnOutsideClick="false"
  :title="$t('inputOutputData.saveChanges')"
  :buttons="[
    {
      text: $t('inputOutputData.save'),
      action: 'save',
      class: 'primary-btn',
    },
    {
      text: $t('inputOutputData.exitWithoutSaving'),
      action: 'cancel',
      class: 'secondary-btn',
    },
  ]"
  @save="saveChanges"
  @cancel="cancelEdit"
  @close="openConfirmationSaveModal = false"
></MBaseModal>
```

## MInputField

The InputField component provides a customizable input field with various features such as icons, prefixes, suffixes, and password visibility toggling.

Consists of a v-text-field from Vuetify, which serves as the input field. It allows users to input text or other data. The component supports features such as outlined variant, compact density, placeholder text, prefix, suffix, and validation rules.

### Props

- `type (String, default: 'text')`: Specifies the type of input field (e.g., text, password). Not needed if selector.
- `prependIcon (String)`: Specifies the icon to be prepended to the input field.
- `appendIcon (String)`: Specifies the icon to be appended to the input field.
- `prependInnerIcon (String)`: Specifies the icon to be prepended inside the input field.
- `title (String)`: The title or label of the input field.
- `placeholder (String)`: The placeholder text displayed in the input field when it is empty.
- `prefix (String)`: The text or icon to be displayed as a prefix inside the input field.
- `suffix (String)`: The text or icon to be displayed as a suffix inside the input field.
- `rules (Array)`: An array of validation rules for the input field.
- `modelValue (String, Number, Boolean)`: The value of the input field, typically bound using the v-model directive.
- `isSelect (Boolean)`: If true, the component works like a v-selector
- `options` (Array): List of options if we use it like a selector. The array must contain {title: ..., value: ...}
- `defaultSelection`: String that defines the default selected option. Must be one of the titles of the options array.

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

## MDataTable

The DataTable component renders a dynamic table using Vuetify's v-data-table. It allows users to display, edit, and delete tabular data with customizable headers and items.

Contains a v-data-table component, which is responsible for rendering the table. It iterates over the provided headers and items to dynamically create table rows and cells. It supports various features such as fixed headers, slot-based customization, and pagination.

### Props

- `headers (Array, required)`: Specifies the headers of the table, including title, value, and optional configuration.
- `items (Array, required)`: Specifies the data items to be displayed in the table.
- `options (Object)`: Additional options to configure the behavior and appearance of the table.
- `showHeaders (Boolean, default: true)`: Indicates whether to display the table headers.
- `showFooter (Boolean, default: true)`: Indicates whether to display the table footer. If false, data will be shown virtually (all data at once, scroll is invisible) NOTICE: If false, table is not editable.
- `editionMode (Boolean, default: false)`: Indicates whether the table is in edition mode, allowing users to edit or delete items.
- `itemsPerPage (Number, default: 10)`: Determines the number of items to be displayed per page in the data table.
- `prevText (String, default: 'Previous')`: Sets the text for the "Previous" button in the pagination.
- `nextText (String, default: 'Next')`: Sets the text for the "Next" button in the pagination.
- `resetCurrentPage (Boolean, default: false)`: Resets the current page to the first one when value is true.
- `noDataMessage (String, default: 'No data available')`: The message to display when there are no items in the table.
- `addSpaceBetweenPagination (Boolean, default: false)`: When enabled, adds additional vertical space between the table content and pagination to adjust for partially filled pages.

### Emits

- `create-item`: This event is emitted when the user requests to create a new item in the DataTable, typically through an "Add" button. The parent component can handle this event by adding a new item to the data list displayed in the DataTable.
- `delete-item`: This event is emitted when the user requests to delete an item from the DataTable, usually by clicking on a delete button associated with a specific item in the table. The parent component can handle this event by removing the corresponding item from the data list.
- `update:resetCurrentPage`: This event is emitted when the `resetCurrentPage` prop is set to `true` and the current page is reset to 1. The parent component can handle this event to set the `resetCurrentPage` prop back to `false` after the reset is done.

### Slots

The default slot allows customization of table cells based on the header value.
The top slot enables adding a custom button at the top of the table, typically used for adding new items in edition mode.

### Usage

The DataTable component can be used to display tabular data with customized headers and items. It supports features such as sorting, searching, and pagination. Below is an example of how to use the component:

```vue
<template>
  <DataTable
    :headers="tableHeaders"
    :items="tableItems"
    :showHeaders="true"
    :showFooter="true"
    :editionMode="true"
    @create-item="addItem"
    @delete-item="deleteItem"
  >
    <template #name="{ item }">
      <span>{{ item.name }}</span>
    </template>
  </DataTable>
</template>
```

## MCheckboxOptions

This component provides a flexible interface for selecting options with checkboxes, allowing for single or multiple selections and emitting events to notify parent components of selection changes.

### Props

- `options`: An array of objects representing the options to be displayed, including text, description, and checked status.
- `multiple`: A boolean indicating if multiple options can be selected simultaneously.

### Usage

```vue
<template v-else-if="index === 2">
  <MCheckboxOptions
    :options="solvers"
    :multiple="false"
    @update:options="solvers = $event"
    class="mt-4"
  />
</template>
```

## MTabTable

This component is a combination of tabs and a table, allowing users to toggle between different datasets represented by tabs and view the content of each tab in a table.

### Props

- `tabsData`: An array of objects containing information about the tabs, where each object has a text property representing the tab's text and a value property representing the tab's value.
- `selectedTable`: The initially selected tab value. Defaults to null.
- `direction`: The direction in which the tabs are displayed, can be 'vertical' or 'horizontal'. Defaults to 'vertical'.

### Usage

```vue
<template>
  <tabs-table
    :tabsData="tabs"
    :selectedTable="selectedTab"
    direction="vertical"
    @update:selectedTab="handleSelectedTabUpdate"
  >
    <!-- Tabs Content -->
    <template #tabs>
      <v-tabs>
        <v-tab v-for="(tab, index) in tabs" :key="index" :value="tab.value">
          {{ tab.text }}
        </v-tab>
      </v-tabs>
    </template>

    <!-- Actions Content -->
    <template #actions>
      <v-btn @click="doSomething">Do Something</v-btn>
    </template>

    <!-- Table Content -->
    <template #table="props">
      <v-data-table :items="getDataForTab(props.tableData)" />
    </template>

    <!-- Custom Button -->
    <template #customButton>
      <v-btn @click="customAction">Custom Action</v-btn>
    </template>
  </tabs-table>
</template>
```
