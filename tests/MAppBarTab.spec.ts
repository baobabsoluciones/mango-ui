import { describe, test } from 'vitest'
import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import MAppBarTab from '../src/components/MAppBarTab/MAppBarTab.vue'

describe('MAppBarTab', () => {
  test('renders the tabs if provided', ({ expect }) => {
    const tabs = [
      { text: 'Tab 1', icon: 'mdi-home', selected: true, loading: false },
      { text: 'Tab 2', icon: 'mdi-account', selected: false, loading: false },
    ]
    const mountPoint = document.createElement('div')
    createApp(MAppBarTab, { tabs }).mount(mountPoint)
    tabs.forEach((tab, index) => {
      const tabElement = mountPoint.querySelector(
        `.my-tab:nth-child(${index + 1})`,
      )
      expect(tabElement).not.toBeNull()
    })
  })

  test('renders the create tab button', ({ expect }) => {
    const createTitle = 'Create'
    const mountPoint = document.createElement('div')
    createApp(MAppBarTab, { createTitle }).mount(mountPoint)
    const createTabButton = mountPoint.querySelector('.create-tab-btn')
    expect(createTabButton).not.toBeNull()
  })

  test('emits "create" event when create tab button is clicked', async ({
    expect,
  }) => {
    const createTitle = 'Create'
    const wrapper = mount(MAppBarTab, { props: { createTitle } })
    await wrapper.find('.create-tab-btn').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('create')
  })

  test('emits "select" event when a tab is clicked', async ({ expect }) => {
    const tabs = [
      { text: 'Tab 1', icon: 'mdi-home', selected: true, loading: false },
      { text: 'Tab 2', icon: 'mdi-account', selected: false, loading: false },
    ]
    const wrapper = mount(MAppBarTab, { props: { tabs } })
    await wrapper.find('.my-tab').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('select')
  })

  test('emits "close" event when close icon is clicked', async ({ expect }) => {
    const tabs = [
      {
        text: 'Tab 1',
        icon: 'mdi-home',
        selected: true,
        loading: false,
        closable: true,
      },
      {
        text: 'Tab 2',
        icon: 'mdi-account',
        selected: false,
        loading: false,
        closable: true,
      },
    ]
    const wrapper = mount(MAppBarTab, { props: { tabs } })
    await wrapper.find('.close-icon').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
