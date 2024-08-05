import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MAppDrawer from '../src/components/AppDrawer/MAppDrawer.vue'

describe('MAppDrawer', () => {
  test('renders the logo if provided', ({ expect }) => {
    const logo = { src: 'logo.png', title: 'Logo' }
    const visible = true
    const wrapper = mount(MAppDrawer, {
      props: { logo, visible },
    })
    const logoElement = wrapper.find('[prepend-avatar="logo.png"]')
    expect(logoElement.exists()).toBe(true)
  })

  test('renders the user if provided', ({ expect }) => {
    const user = { src: 'user.png', name: 'User', email: 'user@example.com' }
    const wrapper = mount(MAppDrawer, {
      props: { user },
    })
    const userElement = wrapper.find('[prepend-avatar="user.png"]')
    expect(userElement.exists()).toBe(true)
  })

  test('renders the items if provided', ({ expect }) => {
    const items = [
      { title: 'Item 1', to: '/item1' },
      { title: 'Item 2', to: '/item2' },
    ]
    const wrapper = mount(MAppDrawer, {
      props: { items },
    })
    items.forEach((item) => {
      const itemElement = wrapper.find(`[to="${item.to}"]`)
      expect(itemElement.exists()).toBe(true)
    })
  })

  test('renders the actions if provided', ({ expect }) => {
    const actions = [
      { title: 'Action 1', to: '/action1' },
      { title: 'Action 2', to: '/action2' },
    ]
    const wrapper = mount(MAppDrawer, {
      props: { actions },
    })
    actions.forEach((action) => {
      const actionElement = wrapper.find(`[to="${action.to}"]`)
      expect(actionElement.exists()).toBe(true)
    })
  })
})
