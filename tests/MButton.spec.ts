import { mount } from '@vue/test-utils'
import { describe, expect as globalExpect, test } from 'vitest'
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

  test('renders text as an alias of label', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { text: 'Alias' },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.text()).toContain('Alias')
  })

  test('renders the default slot instead of the text', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { text: 'Text' },
      slots: { default: 'Slot content' },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.text()).toContain('Slot content')
    expect(wrapper.text()).not.toContain('Text')
  })

  test('maps semantic colors to CSS variables', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { color: 'danger' },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('color')).toBe('var(--danger)')
  })

  test('backgroundColor overrides color', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { color: 'primary', backgroundColor: '#123456' },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('color')).toBe('#123456')
  })

  test.each([
    ['filled', 'flat'],
    ['outlined', 'outlined'],
    ['text', 'text'],
    ['icon', 'text'],
  ])('maps variant %s to Vuetify variant %s', (variant, expected) => {
    const expect = globalExpect
    const wrapper = mount(MButton, {
      props: { variant, icon: 'mdi-check', label: 'Label' },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('variant')).toBe(expected)
  })

  test('renders an icon-only button with the icon variant', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { variant: 'icon', icon: 'mdi-close', label: 'Ignored' },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('icon')).toBe(true)
    expect(wrapper.text()).not.toContain('Ignored')
  })

  test.each([
    ['xs', 'x-small'],
    ['small', 'small'],
    ['xl', 'x-large'],
  ])('maps size %s to Vuetify size %s', (size, expected) => {
    const expect = globalExpect
    const wrapper = mount(MButton, {
      props: { size },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('size')).toBe(expected)
  })

  test('accepts before / after as icon positions', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { label: 'Label', icon: 'mdi-check', iconPosition: 'before' },
      global: {
        plugins: [vuetify],
      },
    })
    const html = wrapper.find('.m-button__content').html()
    expect(html.indexOf('mdi-check')).toBeLessThan(html.indexOf('Label'))
  })

  test('maps primary to the --primary CSS variable', ({ expect }) => {
    const wrapper = mount(MButton, {
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('color')).toBe('var(--primary)')
  })

  test('grey keeps the default text color', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { color: 'grey', variant: 'text' },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('color')).toBeUndefined()
  })

  test('filled buttons with a CSS variable color get white text', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { variant: 'filled', backgroundColor: 'var(--danger)', label: 'Delete' },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.find('button').attributes('style')).toContain('color: white')
  })

  test('outlined buttons with a CSS variable color keep dark text', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { variant: 'outlined', color: 'primary', label: 'Cancel' },
      global: {
        plugins: [vuetify],
      },
    })
    const style = wrapper.find('button').attributes('style')
    expect(style).toContain('color: rgb(51, 51, 51)')
    expect(style).toContain('border-color: var(--primary)')
  })

  test('textColor overrides the automatic text color', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { variant: 'filled', color: 'danger', textColor: 'black', label: 'X' },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.find('button').attributes('style')).toContain('color: black')
  })

  test('textColor keeps the colored border on outlined buttons', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { variant: 'outlined', color: 'primary', textColor: 'black', label: 'X' },
      global: {
        plugins: [vuetify],
      },
    })
    const style = wrapper.find('button').attributes('style')
    expect(style).toContain('color: black')
    expect(style).toContain('border-color: var(--primary)')
  })

  test('does not resolve inherited object keys as colors or sizes', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { color: 'constructor', size: 'toString', label: 'X' },
      global: {
        plugins: [vuetify],
      },
    })
    const button = wrapper.findComponent({ name: 'v-btn' })
    expect(button.props('color')).toBe('constructor')
    expect(wrapper.find('button').classes().some((c) => c.startsWith('m-button--size-'))).toBe(false)
  })

  test('is rounded (pill) by default when rounded is not set', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { label: 'X' },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.find('button').classes()).toContain('v-btn--rounded')
  })

  test('adds the size class only when size is set', ({ expect }) => {
    const withSize = mount(MButton, {
      props: { size: 'small', label: 'A' },
      global: {
        plugins: [vuetify],
      },
    })
    const withoutSize = mount(MButton, {
      props: { label: 'B' },
      global: {
        plugins: [vuetify],
      },
    })
    expect(withSize.find('button').classes()).toContain('m-button--size-small')
    expect(withoutSize.find('button').classes().some((c) => c.startsWith('m-button--size-'))).toBe(false)
  })

  test('renders the icon before the text by default', ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { label: 'Label', icon: 'mdi-check' },
      global: {
        plugins: [vuetify],
      },
    })
    const html = wrapper.find('.m-button__content').html()
    expect(html.indexOf('mdi-check')).toBeLessThan(html.indexOf('Label'))
  })

  test('emits click', async ({ expect }) => {
    const wrapper = mount(MButton, {
      props: { label: 'Label' },
      global: {
        plugins: [vuetify],
      },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
