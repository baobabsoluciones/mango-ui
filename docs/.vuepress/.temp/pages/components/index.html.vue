<template><div><h1 id="component-documentation" tabindex="-1"><a class="header-anchor" href="#component-documentation"><span>Component Documentation</span></a></h1>
<p>This page provides documentation for all components in our library.</p>
<h2 id="index" tabindex="-1"><a class="header-anchor" href="#index"><span>Index</span></a></h2>
<ul>
<li><a href="#app-drawer">MAppDrawer</a></li>
<li><a href="#search-and-filter-for-tables">MSearchAndFilterForTables</a></li>
<li><a href="#button">MButton</a></li>
<li><a href="#dragndropfile">MDragNDropFile</a></li>
<li><a href="#mformsteps">MFormSteps</a></li>
<li><a href="#mtitleview">MTitleView</a></li>
<li><a href="#mappbartab">MAppBarTab</a></li>
<li><a href="#minfocard">MInfoCard</a></li>
<li><a href="#mpaneldata">MPanelData</a></li>
<li><a href="#msnackbar">Snackbar</a></li>
<li><a href="#mbasemodal">MBaseModal</a></li>
<li><a href="#minputfield">MInputField</a></li>
<li><a href="#mdatatable">MDataTable</a></li>
<li><a href="#mcheckboxoptions">MCheckboxOptions</a></li>
<li><a href="#mtabtable">MTabTable</a></li>
</ul>
<h2 id="app-drawer" tabindex="-1"><a class="header-anchor" href="#app-drawer"><span>App Drawer</span></a></h2>
<p>The <code v-pre>MAppDrawer</code> is a Vue 3 component that provides a navigation drawer for your application. It uses the v-navigation-drawer component from Vuetify and provides additional features such as a logo, user information, a menu, and actions.</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<ul>
<li><code v-pre>visible</code>: Boolean - Determines whether the drawer is visible or not.</li>
<li><code v-pre>width</code>: Number - Specifies the width of the drawer.</li>
<li><code v-pre>logo</code>: Object - Contains the logo information. It should have the following structure: <code v-pre>{ src: 'logo.png', title: 'Logo' }</code>.</li>
<li><code v-pre>items</code>: Array - An array of objects representing the menu items. Each object should have the following structure: <code v-pre>{ title: 'Item', to: '/path', icon: 'icon-name', subPages: [{ title: 'SubPage', to: '/subpath', icon: 'icon-name' }] }</code>.</li>
<li><code v-pre>actions</code>: Array - An array of objects representing the action items. Each object should have the following structure: <code v-pre>{ title: 'Action', to: '/path', icon: 'icon-name' }</code>.</li>
<li><code v-pre>user</code>: Object - Contains the user information. It should have the following structure: <code v-pre>{ name: 'User', email: 'user@example.com', src: 'user.png' }</code>.</li>
</ul>
<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3>
<p>First, import the <code v-pre>MAppDrawer</code> component:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>import MAppDrawer from './MAppDrawer.vue';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, you can use it in your template:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MAppDrawer</span>
  <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
  <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">:logo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ src: 'logo.png', title: 'Logo' }<span class="token punctuation">"</span></span>
  <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
    { title: 'Home', to: '/', icon: 'home' },
    { title: 'About', to: '/about', icon: 'info' },
    { title: 'Contact', to: '/contact', icon: 'mail' },
  ]<span class="token punctuation">"</span></span>
  <span class="token attr-name">:actions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
    { title: 'Settings', to: '/settings', icon: 'settings' },
    { title: 'Logout', to: '/logout', icon: 'logout' },
  ]<span class="token punctuation">"</span></span>
  <span class="token attr-name">:user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ name: 'User', email: 'user@example.com', src: 'user.png' }<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<p>The <code v-pre>MAppDrawer</code> component provides several slots for customization:</p>
<ul>
<li><code v-pre>logo</code>: Use this slot to customize the logo.</li>
<li><code v-pre>user</code>: Use this slot to customize the user information.</li>
<li><code v-pre>menu</code>: Use this slot to customize the menu items.</li>
<li><code v-pre>actions</code>: Use this slot to customize the action items.</li>
</ul>
<p>Here's an example of how to use the slots:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MAppDrawer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#logo</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#user</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-user.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Custom User<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#menu</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/custom-path<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom Item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#actions</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/custom-action<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MAppDrawer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="search-and-filter-for-tables" tabindex="-1"><a class="header-anchor" href="#search-and-filter-for-tables"><span>Search and filter for tables</span></a></h2>
<p>The <code v-pre>MSearchFilter</code> component is a Vue 3 component that contains a search input field with a toggle button, that shows and hides and a set of filters in a row.
It allows users to browse and apply various filters to narrow down the search results in a table of data.
The component provides a smooth transition when toggling the display of filters.</p>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3>
<ul>
<li><code v-pre>filters</code>: an object representing the available filters. Each filter object should have the following structure:
<code v-pre>'name': { 'type': String, //The type of filter. This can be 'range', 'checkbox' or 'dateRange'. }</code></li>
</ul>
<h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3>
<p>First, import the <code v-pre>MSearchFilter</code> component in the script of the project you want to use it in:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>import MSearchFilter from './MSearchFilter.vue';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you can use it:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FilterSearch</span>
  <span class="token attr-name">:filters</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
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
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aditional-info" tabindex="-1"><a class="header-anchor" href="#aditional-info"><span>Aditional info</span></a></h3>
<p>The <code v-pre>MSearchFilter</code> component is organized within the <code v-pre>FilterSearch</code> folder, which contains several subcomponents:</p>
<ul>
<li>FilterRow.vue: responsible for displaying and handling a row of individual filters</li>
<li>FilterToggle.vue: provides the toggle functionality to show or hide the set of filters</li>
<li>SearchBox.vue: presents the search input field for users to input their search queries</li>
</ul>
<p>The <code v-pre>FilterSearch.vue</code> component orchestrates the communication between its child components by emitting events:</p>
<ul>
<li><code v-pre>search</code>: this event is emitted when a search queries is entered in the space input field</li>
<li><code v-pre>range</code>: this event is emitted when a numeric range is entered in a filter</li>
<li><code v-pre>checked</code>: this event is emitted when a checkbox is selected in a filter</li>
<li><code v-pre>dateRange</code>: this event is emitted when a date range is selected in a filter</li>
</ul>
<h2 id="button" tabindex="-1"><a class="header-anchor" href="#button"><span>Button</span></a></h2>
<p>The <code v-pre>MButton</code> is a very simple Vue 3 component based on the v-btn component from Vuetify.
It provides flexibility in customizing button appearance and behavior by allowing developers to easily create buttons with labels, icons, various colors, rounded corners, different sizes, and variant styles.</p>
<h3 id="props-2" tabindex="-1"><a class="header-anchor" href="#props-2"><span>Props</span></a></h3>
<ul>
<li><code v-pre>label</code>: String - It is the text label to display on the button.</li>
<li><code v-pre>icon</code>: String - Name of the Material Design Icons (MDI) icon to display on the button.</li>
<li><code v-pre>iconPosition</code>: String - Determines the position of the icon relative to the label. Can be 'prepend-icon' or 'append-icon'.</li>
<li><code v-pre>color</code>: String - The background color of the button. Accepts any valid CSS color value (for example #033 or rgba(255, 0, 0, 0.5)) or the name of the material color (for example success or purple)</li>
<li><code v-pre>rounded</code>: String - Controls the roundedness of the button's corners. Possible values are '0', 'xs', 'sm', 'lg' or 'xl'.</li>
<li><code v-pre>size</code>: String - Controls the size of the button. Accepted values are 'x-small', 'small', 'large' or 'x-large'.</li>
<li><code v-pre>variant</code>: String - Controls the appearance or style of the botton. Possible values are elevated(default), flat, tonal, outlined, text, and plain.</li>
</ul>
<h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3>
<p>To use the <code v-pre>MButton</code> component, import it in the script of the project you want to use it in:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>import MButton from './MButton.vue';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, within your template, use the <code v-pre>MButton</code> component as follows:</p>
<pre><code>```vue
&lt;MButton
label=&quot;Button&quot;
icon=&quot;mdi-heart&quot;
icon-position=&quot;prepend-icon&quot;
color=&quot;#020246&quot;
rounded=&quot;xl&quot;
size=&quot;small&quot;
:variant=&quot;'outlined'&quot;/&gt;
```

This will render a small button with the label &quot;Button&quot;, an MDI heart icon positioned before the label, rounded corners of extra-large size, and an outlined style in a custom dark blue color.
</code></pre>
<h2 id="dragndropfile" tabindex="-1"><a class="header-anchor" href="#dragndropfile"><span>DragNDropFile</span></a></h2>
<p>The DragNDropFile component is a Vue 3 component that facilitates drag and drop file uploading. It provides a user-friendly interface for users to upload files by dragging them onto a designated area.</p>
<h3 id="props-3" tabindex="-1"><a class="header-anchor" href="#props-3"><span>Props</span></a></h3>
<ul>
<li><code v-pre>uploadedFile</code>: File - The currently uploaded file.</li>
<li><code v-pre>downloadIcon</code>: String - The Material Design Icons (MDI) icon to display in the drop area.</li>
<li><code v-pre>description</code>: String - Description text to display in the drop area.</li>
<li><code v-pre>formatsAllowed</code>: Array - An array of file formats allowed for upload.</li>
<li><code v-pre>downloadButtonTitle</code>: String - Title for the upload button.</li>
<li><code v-pre>invalidFileText</code>: String - Text to display when an invalid file is uploaded.</li>
<li><code v-pre>errors</code>: String - Error message to display.</li>
</ul>
<h3 id="emits" tabindex="-1"><a class="header-anchor" href="#emits"><span>Emits</span></a></h3>
<ul>
<li><code v-pre>file-selected</code>: This event is emitted when a file is successfully selected, either by manually selecting a file from the file explorer or by dragging and dropping a file into the designated area. The selected file is passed as an argument in the event. You can listen for this event in the parent component to handle logic related to the selected file.</li>
</ul>
<h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3"><span>Usage</span></a></h3>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>import DragNDropFile from './DragNDropFile.vue';
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DragNDropFile</span>
  <span class="token attr-name">downloadIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdi-upload<span class="token punctuation">"</span></span>
  <span class="token attr-name">:description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Description'<span class="token punctuation">"</span></span>
  <span class="token attr-name">:uploadedFile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectedFile<span class="token punctuation">"</span></span>
  <span class="token attr-name">:formatsAllowed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['json', 'xlsx']<span class="token punctuation">"</span></span>
  <span class="token attr-name">:errors</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>instanceErrors<span class="token punctuation">"</span></span>
  <span class="token attr-name">:downloadButtonTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>DownloadButtonTitle'<span class="token punctuation">"</span></span>
  <span class="token attr-name">:invalidFileText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>InvalidFileText'<span class="token punctuation">"</span></span>
  <span class="token attr-name">@file-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onFileSelected<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mformsteps" tabindex="-1"><a class="header-anchor" href="#mformsteps"><span>MFormSteps</span></a></h2>
<p>The MFormSteps is a Vue 3 component designed to facilitate the creation of multi-step form interfaces. It provides a structured approach to presenting form steps, enabling developers to guide users through sequential stages of a form submission process.</p>
<h3 id="props-4" tabindex="-1"><a class="header-anchor" href="#props-4"><span>Props</span></a></h3>
<ul>
<li><code v-pre>steps</code>: Array - An array of objects representing each step of the form. Each step object contains a title and subtitle to be displayed.</li>
<li><code v-pre>previousButtonText</code>: String - Text to display on the &quot;Previous&quot; button for navigating to the previous step.</li>
<li><code v-pre>continueButtonText</code>: String - Text to display on the &quot;Continue&quot; button for navigating to the next step.</li>
<li><code v-pre>disablePreviousButton</code>: Boolean - Whether to disable the &quot;Previous&quot; button when on the first step.</li>
<li><code v-pre>disableNextButton</code>: Boolean - Whether to disable the &quot;Continue&quot; button when on the last step.</li>
<li><code v-pre>currentStep</code>: Number - The index of the current step. Defaults to 0.</li>
</ul>
<h3 id="emits-1" tabindex="-1"><a class="header-anchor" href="#emits-1"><span>Emits</span></a></h3>
<ul>
<li><code v-pre>update:currentStep</code>: This event is emitted when the value of localCurrentStep changes. It is used to synchronize the state of the parent component with the internal state of the MFormSteps component. By listening to this event in the parent component and updating the value of currentStep, the parent component can control the current step of the form.</li>
</ul>
<h3 id="slots-1" tabindex="-1"><a class="header-anchor" href="#slots-1"><span>Slots</span></a></h3>
<ul>
<li>
<p><code v-pre>step-${localCurrentStep}-title</code>: This slot allows the user to customize the title of the current step of the form. If provided, it will replace the default title of the current step. This allows greater flexibility in displaying specific information at each step of the form.</p>
</li>
<li>
<p><code v-pre>step-${localCurrentStep}-content</code>: This slot allows the user to customize the content of the current step of the form. If provided, it will replace the default content of the current step. This is useful for displaying specific form fields or any other content related to the current step.</p>
</li>
<li>
<p><code v-pre>step-${localCurrentStep}-previous-button</code>: This slot allows the user to customize the &quot;Previous&quot; button of the current step of the form. If provided, it will replace the default &quot;Previous&quot; button of the current step. This allows customizing the appearance or behavior of the &quot;Previous&quot; button according to the user's needs.</p>
</li>
<li>
<p><code v-pre>step-${localCurrentStep}-continue-button</code>: This slot allows the user to customize the &quot;Continue&quot; button of the current step of the form. If provided, it will replace the default &quot;Continue&quot; button of the current step. This is useful for customizing the appearance or behavior of the &quot;Continue&quot; button according to the user's needs.</p>
</li>
</ul>
<h3 id="usage-4" tabindex="-1"><a class="header-anchor" href="#usage-4"><span>Usage</span></a></h3>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MFormSteps</span>
  <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disablePreviousButton</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disablePrevButton<span class="token punctuation">"</span></span>
  <span class="token attr-name">:disableNextButton</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disableNextButton<span class="token punctuation">"</span></span>
  <span class="token attr-name">:currentStep.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentStep<span class="token punctuation">"</span></span>
  <span class="token attr-name">:continueButtonText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t('projectExecution.continueButton')<span class="token punctuation">"</span></span>
  <span class="token attr-name">:previousButtonText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t('projectExecution.previousButton')<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">@update:</span>currentStep</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleStepChange<span class="token punctuation">"</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-5<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MFormSteps</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will render a multi-step form interface with each step represented by a card. The user can navigate between steps using the &quot;Previous&quot; and &quot;Continue&quot; buttons. The appearance and behavior of these buttons can be customized using the provided props.</p>
<h2 id="mtitleview" tabindex="-1"><a class="header-anchor" href="#mtitleview"><span>MTitleView</span></a></h2>
<p>The MTitleView component is a Vue 3 component designed to display a title along with an optional icon and description. It provides a simple and flexible way to present information with a consistent layout.</p>
<h3 id="props-5" tabindex="-1"><a class="header-anchor" href="#props-5"><span>Props</span></a></h3>
<ul>
<li><code v-pre>icon</code>: String - The name of the icon to display alongside the title.</li>
<li><code v-pre>title</code>: String - The main title to be displayed.</li>
<li><code v-pre>description</code>: String - An optional description to provide additional context or details.</li>
</ul>
<h3 id="usage-5" tabindex="-1"><a class="header-anchor" href="#usage-5"><span>Usage</span></a></h3>
<p>To use the MTitleView component, import it into the script of your Vue project:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MTitleView</span>
  <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>mdi-check'<span class="token punctuation">"</span></span>
  <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Title'<span class="token punctuation">"</span></span>
  <span class="token attr-name">:description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>Description text goes here'<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will render a title along with an icon, if provided, and an optional description. The appearance of the title and description can be customized using CSS styles defined within the component.</p>
<h2 id="mappbartab-component" tabindex="-1"><a class="header-anchor" href="#mappbartab-component"><span>MAppBarTab Component</span></a></h2>
<p>The MAppBarTab component provides a customizable bottom navigation bar with tabs and a create button. It allows users to navigate between different tabs and create new items.</p>
<h3 id="props-6" tabindex="-1"><a class="header-anchor" href="#props-6"><span>Props</span></a></h3>
<ul>
<li>
<p><code v-pre>tabs</code> (Array, default: []): An array of objects representing each tab in the bottom navigation bar. Each object should contain the following properties:</p>
<ul>
<li><code v-pre>icon (String)</code>: The icon to display for the tab.</li>
<li><code v-pre>text (String)</code>: The text to display for the tab.</li>
<li><code v-pre>selected (Boolean, optional)</code>: Indicates whether the tab is currently selected.</li>
<li><code v-pre>loading (Boolean, optional)</code>: Indicates whether the tab is in a loading state.</li>
</ul>
</li>
<li>
<p><code v-pre>createTitle (String, default: '')</code>: The title to display on the create button.</p>
</li>
</ul>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3>
<ul>
<li><code v-pre>close</code>: Emitted when a tab is closed. Emits the index of the tab that was closed.</li>
<li><code v-pre>select</code>: Emitted when a tab is selected. Emits the tab object that was selected.</li>
<li><code v-pre>create</code>: Emitted when the create button is clicked.</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MAppBarTab</span>
    <span class="token attr-name">:tabs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs<span class="token punctuation">"</span></span>
    <span class="token attr-name">createTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Add New<span class="token punctuation">"</span></span>
    <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onTabClose<span class="token punctuation">"</span></span>
    <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onTabSelect<span class="token punctuation">"</span></span>
    <span class="token attr-name">@create</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onCreate<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="minfocard-component" tabindex="-1"><a class="header-anchor" href="#minfocard-component"><span>MInfoCard Component</span></a></h2>
<p>The MInfoCard component represents an information card that displays an icon, title, description, and optional content.</p>
<h3 id="props-7" tabindex="-1"><a class="header-anchor" href="#props-7"><span>Props</span></a></h3>
<p><code v-pre>icon (String, default: '')</code>: The icon to display on the card.
<code v-pre>iconColor (String, default: '')</code>: The color of the icon.
<code v-pre>title (String, default: '')</code>: The title of the card.
<code v-pre>description (String, default: '')</code>: The description of the card.</p>
<h3 id="slots-2" tabindex="-1"><a class="header-anchor" href="#slots-2"><span>Slots</span></a></h3>
<p><code v-pre>Default Slot</code>: The default slot is used to provide additional content within the card.
<code v-pre>icon</code>: This slot allows you to customize the icon displayed on the card. If not provided, the default icon specified in the icon prop will be used.
'title': This slot allows you to customize the title displayed on the card. If not provided, the default title specified in the title prop will be used.
<code v-pre>description</code>: This slot allows you to customize the description displayed on the card. If not provided, the default description specified in the description prop will be used.</p>
<h3 id="usage-6" tabindex="-1"><a class="header-anchor" href="#usage-6"><span>Usage</span></a></h3>
<p>Here's an example of how to use the MInfoCard component:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MInfoCard</span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdi-account<span class="token punctuation">"</span></span>
    <span class="token attr-name">iconColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>User Information<span class="token punctuation">"</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>View and edit user details<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MInfoCard</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mpaneldata-component" tabindex="-1"><a class="header-anchor" href="#mpaneldata-component"><span>MPanelData Component</span></a></h2>
<p>The MPanelData component displays data in an expandable panel format, allowing users to view detailed information categorized by date. It also provides options to filter the data by date range.</p>
<h3 id="props-8" tabindex="-1"><a class="header-anchor" href="#props-8"><span>Props</span></a></h3>
<ul>
<li><code v-pre>data (Array, required)</code>: An array of objects representing the data to be displayed. Each object should contain a date property and a data property.</li>
<li><code v-pre>showFirstHeaders (Boolean, default: false)</code>: Controls whether to show headers for the first panel.</li>
<li><code v-pre>checkboxOptions (Array, required)</code>: An array of objects representing the checkbox options for filtering the data by date range. Each object should contain label, value, and color properties.</li>
<li><code v-pre>noDataMessage (String, default: 'No data for the selected range')</code>: The message to display when there is no data available for the selected range.</li>
<li><code v-pre>allPanelsOpen (Boolean, default: true)</code>: Controls whether all panels are initially expanded.</li>
<li><code v-pre>language (String, default: 'en')</code>: Indicates the language for the date formatting</li>
</ul>
<h3 id="events-1" tabindex="-1"><a class="header-anchor" href="#events-1"><span>Events</span></a></h3>
<ul>
<li><code v-pre>date-range-changed</code>: Emitted when the date range is changed. Emits the selected date range value.</li>
</ul>
<h3 id="slots-3" tabindex="-1"><a class="header-anchor" href="#slots-3"><span>Slots</span></a></h3>
<ul>
<li><code v-pre>Default Slot</code>: The default slot is used to provide a table component to display the data.</li>
</ul>
<p>The slot receives the following props:</p>
<ul>
<li><code v-pre>item-data</code>: The data to be displayed in the table.</li>
<li><code v-pre>show-headers</code>: Indicates whether to show headers for the table.</li>
<li><code v-pre>no-data</code>: This slot is used to provide custom content to be displayed when there is no data available.</li>
<li><code v-pre>custom-checkbox</code>: This slot is used to provide custom content for the &quot;custom&quot; date range option.</li>
</ul>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h3>
<p>formatDateForHeaders: A method to format dates for use as panel headers.</p>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>Data</span></a></h3>
<ul>
<li>
<p><code v-pre>selectedDateRange</code>: The currently selected date range.
customDateRange: An object representing the custom date range selected by the user, with from and to properties.</p>
</li>
<li>
<p><code v-pre>openedPanels</code>: An array containing the indices of the currently opened panels.</p>
</li>
</ul>
<h3 id="watchers" tabindex="-1"><a class="header-anchor" href="#watchers"><span>Watchers</span></a></h3>
<ul>
<li><code v-pre>data</code>: Watches changes in the data prop and expands all panels if allPanelsOpen is true.</li>
</ul>
<h3 id="usage-7" tabindex="-1"><a class="header-anchor" href="#usage-7"><span>Usage</span></a></h3>
<p>Here's an example of how to use the MPanelData component:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MPanelData</span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>panelData<span class="token punctuation">"</span></span>
    <span class="token attr-name">:checkboxOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkboxOptions<span class="token punctuation">"</span></span>
    <span class="token attr-name">:noDataMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noDataMessage<span class="token punctuation">"</span></span>
    <span class="token attr-name">:allPanelsOpen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">@date-range-changed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onDateRangeChanged<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#table</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ itemData, showHeaders }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- Custom table component --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#no-data</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>No data available for the selected range<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#custom-checkbox</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- Custom content for custom date range --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MPanelData</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="msnackbar" tabindex="-1"><a class="header-anchor" href="#msnackbar"><span>MSnackbar</span></a></h2>
<p>The Snackbar component displays short-lived messages or notifications at the bottom of the screen. It allows users to receive important information without disrupting their current workflow.</p>
<p>Uses Vuetify's v-snackbar component to display the message. It binds the show property of the snackbar object to control the visibility of the snackbar. The color of the snackbar is also dynamically set based on the color property of the snackbar object. The message content is bound to the message property of the snackbar object.</p>
<h3 id="usage-8" tabindex="-1"><a class="header-anchor" href="#usage-8"><span>Usage</span></a></h3>
<p>To use the Snackbar component, you need to provide a snackbar object from a parent component or a global provider. This snackbar object should contain the following properties:</p>
<ul>
<li><code v-pre>show</code>: A Boolean value indicating whether the snackbar should be visible.</li>
<li><code v-pre>message</code>: The message content to be displayed in the snackbar.</li>
<li><code v-pre>color</code>: The color of the snackbar, typically indicating the severity or type of the message (e.g., success, error, warning).</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Snackbar</span> <span class="token attr-name">:snackbar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>snackbarData<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- Other content --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Snackbar <span class="token keyword">from</span> <span class="token string">'@/components/Snackbar.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Snackbar<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> snackbarData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      snackbarData<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mbasemodal" tabindex="-1"><a class="header-anchor" href="#mbasemodal"><span>MBaseModal</span></a></h2>
<p>The MBaseModal component is a base modal component that provides a customizable modal dialog box. It allows users to display content and interact with buttons within the modal.</p>
<h3 id="template" tabindex="-1"><a class="header-anchor" href="#template"><span>Template</span></a></h3>
<p>The template of the MBaseModal component uses Vuetify's v-dialog component to create a modal dialog box. Inside the dialog, it includes a v-card containing the modal's title, content, and action buttons. The modal title can optionally display an icon on the left side. The content area is provided by the default slot named &quot;content&quot;. Action buttons are dynamically generated based on the provided buttons prop.</p>
<h3 id="props-9" tabindex="-1"><a class="header-anchor" href="#props-9"><span>Props</span></a></h3>
<ul>
<li><code v-pre>value (Boolean, default: false)</code>: Controls the visibility of the modal dialog.</li>
<li><code v-pre>title (String, default: '')</code>: The title text displayed at the top of the modal.</li>
<li><code v-pre>icon (String, default: '')</code>: An optional icon to display alongside the title.</li>
<li><code v-pre>buttons (Array, default: [])</code>: An array of objects representing action buttons displayed at the bottom of the modal. Each button object should contain text, class, and action properties.</li>
<li><code v-pre>size (String, default: 'md')</code>: Specifies the size of the modal. Can be one of 'xs', 'md', or 'lg'.</li>
<li><code v-pre>closeOnOutsideClick (Boolean, default: true)</code>: Controls whether the modal should be closed when clicking outside of it.</li>
</ul>
<h3 id="emits-2" tabindex="-1"><a class="header-anchor" href="#emits-2"><span>Emits</span></a></h3>
<ul>
<li><code v-pre>emitButtonAction(action)</code>: Emits the specified action when a button is clicked within the modal.</li>
</ul>
<h3 id="usage-9" tabindex="-1"><a class="header-anchor" href="#usage-9"><span>Usage</span></a></h3>
<p>Here's an example of how to use the MBaseModal component:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MBaseModal</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openConfirmationSaveModal<span class="token punctuation">"</span></span>
  <span class="token attr-name">:closeOnOutsideClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
  <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$t('inputOutputData.saveChanges')<span class="token punctuation">"</span></span>
  <span class="token attr-name">:buttons</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
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
  ]<span class="token punctuation">"</span></span>
  <span class="token attr-name">@save</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>saveChanges<span class="token punctuation">"</span></span>
  <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cancelEdit<span class="token punctuation">"</span></span>
  <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openConfirmationSaveModal = false<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MBaseModal</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="minputfield" tabindex="-1"><a class="header-anchor" href="#minputfield"><span>MInputField</span></a></h2>
<p>The InputField component provides a customizable input field with various features such as icons, prefixes, suffixes, and password visibility toggling.</p>
<p>Consists of a v-text-field from Vuetify, which serves as the input field. It allows users to input text or other data. The component supports features such as outlined variant, compact density, placeholder text, prefix, suffix, and validation rules.</p>
<h3 id="props-10" tabindex="-1"><a class="header-anchor" href="#props-10"><span>Props</span></a></h3>
<ul>
<li><code v-pre>type (String, default: 'text')</code>: Specifies the type of input field (e.g., text, password).</li>
<li><code v-pre>prependIcon (String)</code>: Specifies the icon to be prepended to the input field.</li>
<li><code v-pre>appendIcon (String)</code>: Specifies the icon to be appended to the input field.</li>
<li><code v-pre>prependInnerIcon (String)</code>: Specifies the icon to be prepended inside the input field.</li>
<li><code v-pre>title (String)</code>: The title or label of the input field.</li>
<li><code v-pre>placeholder (String)</code>: The placeholder text displayed in the input field when it is empty.</li>
<li><code v-pre>prefix (String)</code>: The text or icon to be displayed as a prefix inside the input field.</li>
<li><code v-pre>suffix (String)</code>: The text or icon to be displayed as a suffix inside the input field.</li>
<li><code v-pre>rules (Array)</code>: An array of validation rules for the input field.</li>
<li><code v-pre>modelValue (String, Number, Boolean)</code>: The value of the input field, typically bound using the v-model directive.</li>
</ul>
<h3 id="usage-10" tabindex="-1"><a class="header-anchor" href="#usage-10"><span>Usage</span></a></h3>
<p>The InputField component can be used in templates wherever input fields are required. Here's an example of how to use the component:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputField</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Enter your password<span class="token punctuation">"</span></span>
      <span class="token attr-name">prependIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdi-lock<span class="token punctuation">"</span></span>
      <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>characters<span class="token punctuation">"</span></span>
      <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passwordRules<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mdatatable" tabindex="-1"><a class="header-anchor" href="#mdatatable"><span>MDataTable</span></a></h2>
<p>The DataTable component renders a dynamic table using Vuetify's v-data-table. It allows users to display, edit, and delete tabular data with customizable headers and items.</p>
<p>Contains a v-data-table component, which is responsible for rendering the table. It iterates over the provided headers and items to dynamically create table rows and cells. It supports various features such as fixed headers, slot-based customization, and pagination.</p>
<h3 id="props-11" tabindex="-1"><a class="header-anchor" href="#props-11"><span>Props</span></a></h3>
<ul>
<li><code v-pre>headers (Array, required)</code>: Specifies the headers of the table, including text, value, and optional configuration.</li>
<li><code v-pre>items (Array, required)</code>: Specifies the data items to be displayed in the table.</li>
<li><code v-pre>options (Object)</code>: Additional options to configure the behavior and appearance of the table.</li>
<li><code v-pre>showHeaders (Boolean, default: true)</code>: Indicates whether to display the table headers.</li>
<li><code v-pre>showFooter (Boolean, default: true)</code>: Indicates whether to display the table footer.</li>
<li><code v-pre>editionMode (Boolean, default: false)</code>: Indicates whether the table is in edition mode, allowing users to edit or delete items.</li>
</ul>
<h3 id="emits-3" tabindex="-1"><a class="header-anchor" href="#emits-3"><span>Emits</span></a></h3>
<ul>
<li><code v-pre>create-item</code>: This event is emitted when the user requests to create a new item in the DataTable, typically through an &quot;Add&quot; button. The parent component can handle this event by adding a new item to the data list displayed in the DataTable.</li>
<li><code v-pre>delete-item</code>: This event is emitted when the user requests to delete an item from the DataTable, usually by clicking on a delete button associated with a specific item in the table. The parent component can handle this event by removing the corresponding item from the data list.</li>
</ul>
<h3 id="slots-4" tabindex="-1"><a class="header-anchor" href="#slots-4"><span>Slots</span></a></h3>
<p>The default slot allows customization of table cells based on the header value.
The top slot enables adding a custom button at the top of the table, typically used for adding new items in edition mode.</p>
<h3 id="usage-11" tabindex="-1"><a class="header-anchor" href="#usage-11"><span>Usage</span></a></h3>
<p>The DataTable component can be used to display tabular data with customized headers and items. It supports features such as sorting, searching, and pagination. Below is an example of how to use the component:</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataTable</span>
    <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableHeaders<span class="token punctuation">"</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableItems<span class="token punctuation">"</span></span>
    <span class="token attr-name">:showHeaders</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">:showFooter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">:editionMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">@create-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addItem<span class="token punctuation">"</span></span>
    <span class="token attr-name">@delete-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteItem<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ item }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DataTable</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mcheckboxoptions" tabindex="-1"><a class="header-anchor" href="#mcheckboxoptions"><span>MCheckboxOptions</span></a></h2>
<p>This component provides a flexible interface for selecting options with checkboxes, allowing for single or multiple selections and emitting events to notify parent components of selection changes.</p>
<h3 id="props-12" tabindex="-1"><a class="header-anchor" href="#props-12"><span>Props</span></a></h3>
<ul>
<li><code v-pre>options</code>: An array of objects representing the options to be displayed, including text, description, and checked status.</li>
<li><code v-pre>multiple</code>: A boolean indicating if multiple options can be selected simultaneously.</li>
</ul>
<h3 id="usage-12" tabindex="-1"><a class="header-anchor" href="#usage-12"><span>Usage</span></a></h3>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index === 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MCheckboxOptions</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>solvers<span class="token punctuation">"</span></span>
    <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">@update:</span>options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>solvers = $event<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-4<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mtabtable" tabindex="-1"><a class="header-anchor" href="#mtabtable"><span>MTabTable</span></a></h2>
<p>This component is a combination of tabs and a table, allowing users to toggle between different datasets represented by tabs and view the content of each tab in a table.</p>
<h3 id="props-13" tabindex="-1"><a class="header-anchor" href="#props-13"><span>Props</span></a></h3>
<ul>
<li><code v-pre>tabsData</code>: An array of objects containing information about the tabs, where each object has a text property representing the tab's text and a value property representing the tab's value.</li>
<li><code v-pre>selectedTable</code>: The initially selected tab value. Defaults to null.</li>
<li><code v-pre>direction</code>: The direction in which the tabs are displayed, can be 'vertical' or 'horizontal'. Defaults to 'vertical'.</li>
</ul>
<h3 id="usage-13" tabindex="-1"><a class="header-anchor" href="#usage-13"><span>Usage</span></a></h3>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tabs-table</span>
    <span class="token attr-name">:tabsData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs<span class="token punctuation">"</span></span>
    <span class="token attr-name">:selectedTable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectedTab<span class="token punctuation">"</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">@update:</span>selectedTab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelectedTabUpdate<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Tabs Content --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tabs</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-tabs</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-tab</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tab, index) in tabs<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab.value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          {{ tab.text }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-tab</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-tabs</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Actions Content --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#actions</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-btn</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doSomething<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Do Something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-btn</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Table Content --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#table</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-data-table</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getDataForTab(props.tableData)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Custom Button --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#customButton</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-btn</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customAction<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-btn</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tabs-table</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


