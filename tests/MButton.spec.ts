import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'
import MButton from '../src/components/Button/MButton.vue'
import vuetify from './vuetify-setup.ts'

describe('MButton.vue', () => {
  test('renders the button', ({ expect }) => {
    const wrapper = mount(MButton, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.findComponent({ name: 'v-btn' }).exists()).toBe(true)
  })

  test('renders the label when passed', ({ expect }) => {
    const label = 'Test Button'
    const wrapper = mount(MButton, {
      props: { label },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.text()).toContain(label)
  })

  test('renders the icon when passed', ({ expect }) => {
    const icon = 'mdi-test-icon'
    const wrapper = mount(MButton, {
      props: { icon },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.html()).toContain(icon)
  })

  test('applies the color when passed', ({ expect }) => {
    const color = 'secondary'
    const wrapper = mount(MButton, {
      props: { color },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })

    expect(button.props('color')).toBe(color)
  })
})
