<template><div><h1 id="component-documentation" tabindex="-1"><a class="header-anchor" href="#component-documentation"><span>Component Documentation</span></a></h1>
<p>This page provides documentation for all components in our library.</p>
<h2 id="index" tabindex="-1"><a class="header-anchor" href="#index"><span>Index</span></a></h2>
<ul>
<li><a href="#app-drawer">MAppDrawer</a></li>
<li><a href="#search-and-filter-for-tables">MSearchAndFilterForTables</a></li>
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
</div></template>


