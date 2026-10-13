import { mount } from '@vue/test-utils'
import { describe, test, vi } from 'vitest'
import MDropdownMenu from '../src/components/MDropdownMenu/MDropdownMenu.vue'
import vuetify from './vuetify-setup.ts'

// Stub the v-menu so the dropdown content renders inline (avoids jsdom overlay errors)
const menuStub = {
  name: 'v-menu',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template:
    '<div class="v-menu-stub"><slot name="activator" :props="{}" :isOpen="modelValue" /><slot /></div>',
}

const createWrapper = (props = {}, slots = {}) =>
  mount(MDropdownMenu, {
    props,
    slots,
    global: {
      plugins: [vuetify],
      stubs: {
        'v-menu': menuStub,
        'v-icon': true,
      },
    },
  })

describe('MDropdownMenu.vue', () => {
  test('renders default activator (trigger button) when no slot', ({ expect }) => {
    const wrapper = createWrapper()
    expect(wrapper.find('.m-dropdown-menu__trigger').exists()).toBe(true)
  })

  test('renders items without sections', ({ expect }) => {
    const wrapper = createWrapper({
      items: [
        { id: 'a', title: 'Item A', icon: 'mdi-a' },
        { id: 'b', title: 'Item B' },
      ],
    })
    const titles = wrapper.findAll('.m-dropdown-menu__item-title')
    expect(titles).toHaveLength(2)
    expect(titles[0].text()).toBe('Item A')
  })

  test('renders sections with header and divider between sections', ({ expect }) => {
    const wrapper = createWrapper({
      sections: [
        { title: 'Group 1', items: [{ title: 'One' }] },
        { title: 'Group 2', items: [{ title: 'Two' }] },
      ],
    })
    expect(wrapper.findAll('.m-dropdown-menu__section-header')).toHaveLength(2)
    expect(wrapper.findAll('.m-dropdown-menu__divider')).toHaveLength(1)
  })

  test('renders right content', ({ expect }) => {
    const wrapper = createWrapper({
      items: [
        { title: 'WithRightIcon', rightIcon: 'mdi-chevron-right' },
        { title: 'WithRightContent', rightContent: 'Ctrl+K' },
      ],
    })
    expect(wrapper.find('.m-dropdown-menu__item-right-content').text()).toBe(
      'Ctrl+K',
    )
  })

  test('clicking an item runs its action once and emits item-click', async ({ expect }) => {
    const action = vi.fn()
    const wrapper = createWrapper({
      items: [{ id: 'a', title: 'Click', action }],
    })
    await wrapper.find('.m-dropdown-menu__item').trigger('click')
    expect(action).toHaveBeenCalledTimes(1)
    expect(wrapper.emitted('item-click')![0][0]).toMatchObject({ id: 'a' })
  })

  test('disabled item does not emit item-click or run action', async ({ expect }) => {
    const action = vi.fn()
    const wrapper = createWrapper({
      items: [{ id: 'a', title: 'Disabled', disabled: true, action }],
    })
    await wrapper.find('.m-dropdown-menu__item').trigger('click')
    expect(action).not.toHaveBeenCalled()
    expect(wrapper.emitted('item-click')).toBeFalsy()
  })

  test('item without action still emits item-click', async ({ expect }) => {
    const wrapper = createWrapper({ items: [{ title: 'NoAction' }] })
    await wrapper.find('.m-dropdown-menu__item').trigger('click')
    expect(wrapper.emitted('item-click')).toBeTruthy()
  })

  test('disabled class applied to disabled items', ({ expect }) => {
    const wrapper = createWrapper({ items: [{ title: 'D', disabled: true }] })
    expect(wrapper.find('.m-dropdown-menu__item--disabled').exists()).toBe(true)
  })

  test('renders custom activator slot', ({ expect }) => {
    const wrapper = createWrapper(
      {},
      { activator: '<button class="my-activator">Open</button>' },
    )
    expect(wrapper.find('.my-activator').exists()).toBe(true)
    expect(wrapper.find('.m-dropdown-menu__trigger').exists()).toBe(false)
  })

  test('renders content slot', ({ expect }) => {
    const wrapper = createWrapper(
      {},
      { content: '<div class="custom-content">extra</div>' },
    )
    expect(wrapper.find('.custom-content').exists()).toBe(true)
  })

  test('empty props default to empty lists', ({ expect }) => {
    const wrapper = createWrapper()
    expect(wrapper.findAll('.m-dropdown-menu__item')).toHaveLength(0)
  })

  test('modelValue opens the menu and closing emits update:modelValue', async ({ expect }) => {
    const wrapper = createWrapper({
      modelValue: true,
      items: [{ title: 'Close me' }],
    })
    expect(wrapper.findComponent({ name: 'v-menu' }).props('modelValue')).toBe(true)

    await wrapper.find('.m-dropdown-menu__item').trigger('click')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false])
  })

  test('closeOnItemClick false keeps the menu open', async ({ expect }) => {
    const wrapper = createWrapper({
      modelValue: true,
      closeOnItemClick: false,
      items: [{ title: 'Stay' }],
    })
    await wrapper.find('.m-dropdown-menu__item').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})
