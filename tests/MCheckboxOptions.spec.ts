import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MCheckboxOptions from '../src/components/MCheckboxOptions/MCheckboxOptions.vue'
import vuetify from './vuetify-setup.ts'

describe('MCheckboxOptions.vue', () => {
  test('renders the options', ({ expect }) => {
    const options = [
      { text: 'Option 1', checked: false },
      { text: 'Option 2', checked: false },
    ]
    const wrapper = mount(MCheckboxOptions, {
      global: {
        plugins: [vuetify],
      },
      props: { options },
    })
    expect(wrapper.findAll('.option').length).toBe(options.length)
  })

  test('renders the option text and description when passed', ({ expect }) => {
    const options = [
      { text: 'Option 1', description: 'Description 1', checked: false },
      { text: 'Option 2', description: 'Description 2', checked: false },
    ]
    const wrapper = mount(MCheckboxOptions, {
      global: {
        plugins: [vuetify],
      },
      props: { options },
    })
    options.forEach((option, index) => {
      const optionElement = wrapper.findAll('.option')[index]
      expect(optionElement.text()).toContain(option.text)
      expect(optionElement.text()).toContain(option.description)
    })
  })
})
