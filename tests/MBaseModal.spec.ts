import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MBaseModal from '../src/components/MBaseModal/MBaseModal.vue'

describe('MBaseModal.vue', () => {
  test('renders the modal', async ({ expect }) => {
    const wrapper = mount(MBaseModal)
    expect(wrapper.find('v-dialog').exists()).toBe(true)
  })

  test('renders the title when passed', ({ expect }) => {
    const title = 'Test Modal'
    const wrapper = mount(MBaseModal, {
      props: { title },
    })
    expect(wrapper.text()).toContain(title)

    const titleElement = wrapper.find('.modal_title')
    expect(titleElement.text()).toBe(title)
  })

  test('renders the icon when passed', ({ expect }) => {
    const icon = 'mdi-test-icon'
    const wrapper = mount(MBaseModal, {
      props: { icon },
    })
    expect(wrapper.html()).toContain(icon)
  })

  test('renders the buttons when passed', ({ expect }) => {
    const buttons = [
      { text: 'Button 1', action: 'action1', class: 'class1' },
      { text: 'Button 2', action: 'action2', class: 'class2' },
    ]
    const wrapper = mount(MBaseModal, {
      props: { buttons },
    })
    expect(wrapper.findAll('v-btn').length).toBe(buttons.length)
    buttons.forEach((button, index) => {
      const btn = wrapper.findAll('v-btn')[index]
      expect(btn.text()).toBe(button.text)
      expect(btn.attributes('class')).toContain(button.class)
    })
  })

  test('emits the correct action when a button is clicked', async ({
    expect,
  }) => {
    const buttons = [
      { text: 'Button 1', action: 'action1', class: 'class1' },
      { text: 'Button 2', action: 'action2', class: 'class2' },
    ]
    const wrapper = mount(MBaseModal, {
      props: { buttons },
    })
    await wrapper.findAll('v-btn')[0].trigger('click')
    expect(wrapper.emitted()).toHaveProperty(buttons[0].action)
  })

  test('emits the close event when the close icon is clicked', async ({
    expect,
  }) => {
    const wrapper = mount(MBaseModal, {})
    await wrapper.find('.modal_icon_title').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
