import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'
import MTabTable from '../src/components/MTabTable/MTabTable.vue'
import vuetify from './vuetify-setup.ts'

describe('MTabTable.vue', () => {
  test('renders the component', ({ expect }) => {
    const wrapper = mount(MTabTable, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('renders the correct number of tabs', ({ expect }) => {
    const tabsData = [
      { text: 'Tab 1', value: 'tab1' },
      { text: 'Tab 2', value: 'tab2' },
      { text: 'Tab 3', value: 'tab3' },
    ]
    const wrapper = mount(MTabTable, {
      props: { tabsData },
      global: {
        plugins: [vuetify],
      },
    })
    const tabs = wrapper.findAll('.v-tab')
    expect(tabs.length).toBe(tabsData.length)
  })

  test('renders the correct tab text', ({ expect }) => {
    const tabsData = [
      { text: 'Tab 1', value: 'tab1' },
      { text: 'Tab 2', value: 'tab2' },
      { text: 'Tab 3', value: 'tab3' },
    ]
    const wrapper = mount(MTabTable, {
      props: { tabsData },
      global: {
        plugins: [vuetify],
      },
    })
    tabsData.forEach((tab, index) => {
      const tabElement = wrapper.findAll('.v-tab')[index]
      expect(tabElement.text()).toBe(tab.text)
    })
  })

  test('sets the correct initial selected tab', async ({ expect }) => {
    const tabsData = [
      { text: 'Tab 1', value: 'tab1' },
      { text: 'Tab 2', value: 'tab2' },
      { text: 'Tab 3', value: 'tab3' },
    ]
    const selectedTable = 'tab2'
    const wrapper = mount(MTabTable, {
      props: { tabsData, selectedTable },
      global: {
        plugins: [vuetify],
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.selectedTab).toBe(selectedTable)
  })
})
