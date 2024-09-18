import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'
import MInputField from '../src/components/MInputField/MInputField.vue'
import vuetify from './vuetify-setup.ts'

describe('MInputField.vue', () => {
  test('renders title prop correctly', ({ expect }) => {
    const title = 'Test Title'
    const wrapper = mount(MInputField, {
      props: { title },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.find('.title-input').text()).toBe(title)
  })

  test('renders v-text-field when isSelector is false', ({ expect }) => {
    const wrapper = mount(MInputField, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.findComponent('.v-text-field').exists()).toBe(true)
  })

  test('renders v-select when isSelector is true', async ({ expect }) => {
    const wrapper = mount(MInputField, {
      props: { isSelect: true },
      global: {
        plugins: [vuetify],
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent('.v-select').exists()).toBe(true)
  })

  test('emits update:modelValue event when computedValue is set', async ({
    expect,
  }) => {
    const wrapper = mount(MInputField, {
      global: {
        plugins: [vuetify],
      },
    })
    wrapper.vm.computedValue = 'test'
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['test'])
  })

  test('toggles password visibility when togglePasswordVisibility is called', async ({
    expect,
  }) => {
    const wrapper = mount(MInputField, {
      props: { type: 'password' },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.vm.showPassword).toBe(false)
    wrapper.vm.togglePasswordVisibility()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.showPassword).toBe(true)
  })

  test('renders prependIcon correctly', ({ expect }) => {
    const prependIcon = 'mdi-information'
    const wrapper = mount(MInputField, {
      props: { prependIcon },
      global: {
        plugins: [vuetify],
      },
    })

    const prependIconDiv = wrapper.find('.v-input__prepend')
    expect(prependIconDiv.exists()).toBe(true)

    const icon = prependIconDiv.find('i.mdi-information')
    expect(icon.exists()).toBe(true)
  })

  test('renders appendIcon correctly', ({ expect }) => {
    const appendIcon = 'mdi-information'
    const wrapper = mount(MInputField, {
      props: { appendIcon },
      global: {
        plugins: [vuetify],
      },
    })

    const appendIconDiv = wrapper.find('.v-input__append')
    expect(appendIconDiv.exists()).toBe(true)

    const icon = appendIconDiv.find('i.mdi-information')
    expect(icon.exists()).toBe(true)
  })

  test('renders prependInnerIcon correctly', ({ expect }) => {
    const prependInnerIcon = 'mdi-information'
    const wrapper = mount(MInputField, {
      props: { prependInnerIcon },
      global: {
        plugins: [vuetify],
      },
    })

    const prependIconDiv = wrapper.find('.v-field__prepend-inner')
    expect(prependIconDiv.exists()).toBe(true)

    const icon = prependIconDiv.find('i.mdi-information')
    expect(icon.exists()).toBe(true)
  })

  test('renders appendInnerIcon correctly', ({ expect }) => {
    const appendInnerIcon = 'mdi-information'
    const wrapper = mount(MInputField, {
      props: { appendInnerIcon },
      global: {
        plugins: [vuetify],
      },
    })
    const appendIconDiv = wrapper.find('.v-field__append-inner')
    expect(appendIconDiv.exists()).toBe(true)

    const icon = appendIconDiv.find('i.mdi-information')
    expect(icon.exists()).toBe(true)
  })

  test('renders password icon correctly when type is password', ({
    expect,
  }) => {
    const wrapper = mount(MInputField, {
      props: { type: 'password' },
      global: {
        plugins: [vuetify],
      },
    })

    const appendIconDiv = wrapper.find('.v-field__append-inner')
    expect(appendIconDiv.exists()).toBe(true)

    const icon = appendIconDiv.find('i.mdi-eye')
    expect(icon.exists()).toBe(true)
  })

  test('toggles password visibility correctly', async ({ expect }) => {
    const wrapper = mount(MInputField, {
      props: { type: 'password' },
      global: {
        plugins: [vuetify],
      },
    })
    const appendIconDiv = wrapper.find('.v-field__append-inner')
    expect(appendIconDiv.exists()).toBe(true)

    const icon = appendIconDiv.find('i.mdi-eye')
    expect(icon.exists()).toBe(true)

    await wrapper.vm.togglePasswordVisibility()

    const offIcon = appendIconDiv.find('i.mdi-eye-off')
    expect(offIcon.exists()).toBe(true)
  })

  test('renders appendInnerIcon when type is password and appendInnerIcon is defined', ({
    expect,
  }) => {
    const wrapper = mount(MInputField, {
      global: {
        plugins: [vuetify],
      },
      props: { type: 'password', appendInnerIcon: 'mdi-information' },
    })

    const appendIconDiv = wrapper.find('.v-field__append-inner')
    expect(appendIconDiv.exists()).toBe(true)

    const icon = appendIconDiv.find('i.mdi-eye')
    expect(icon.exists()).toBe(true)
  })
})
