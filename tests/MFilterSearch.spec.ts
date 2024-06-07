import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'
import FilterSearch from '../src/components/FilterSearch/FilterSearch.vue'
import FilterRow from '../src/components/FilterSearch/FilterRow.vue'
import SearchBox from '../src/components/FilterSearch/SearchBox.vue'
import FilterToggle from '../src/components/FilterSearch/FilterToggle.vue'
import vuetify from './vuetify-setup.ts'

describe('FilterSearch.vue', () => {
  test('renders the component', ({ expect }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('renders the search box', ({ expect }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
    })
    expect(wrapper.findComponent(SearchBox).exists()).toBe(true)
  })

  test('does not render the filter toggle if there are no filters', ({
    expect,
  }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
    })
    expect(wrapper.findComponent(FilterToggle).exists()).toBe(false)
  })

  test('renders the filter toggle if there are filters', ({ expect }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
      props: {
        filters: {
          range: {
            type: 'range',
            title: 'Range',
            min: 0,
            max: 100,
            step: 1,
          },
        },
      },
    })
    expect(wrapper.findComponent(FilterToggle).exists()).toBe(true)
  })

  test('does not render the filter reset if the filters are not shown', ({
    expect,
  }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
    })
    expect(wrapper.find('.filters').exists()).toBe(false)
  })

  test('renders the filter reset if the filters are shown', async ({
    expect,
  }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
      props: {
        filters: {
          range: {
            type: 'range',
            title: 'Range',
            min: 0,
            max: 100,
            step: 1,
          },
        },
      },
    })
    await wrapper.findComponent(FilterToggle).trigger('click')
    expect(wrapper.find('.filters').exists()).toBe(true)
  })

  test('does not render the filter row if the filters are not shown', ({
    expect,
  }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
    })
    expect(wrapper.findComponent(FilterRow).exists()).toBe(false)
  })

  test('renders the filter row if the filters are shown', async ({
    expect,
  }) => {
    const wrapper = mount(FilterSearch, {
      global: {
        plugins: [vuetify],
        components: {
          FilterRow,
          SearchBox,
          FilterToggle,
        },
      },
      props: {
        filters: {
          range: {
            type: 'range',
            title: 'Range',
            min: 0,
            max: 100,
            step: 1,
          },
        },
      },
    })
    await wrapper.findComponent(FilterToggle).trigger('click')
    expect(wrapper.findComponent(FilterRow).exists()).toBe(true)
  })
})
