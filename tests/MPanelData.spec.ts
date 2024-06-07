import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'
import MPanelData from '../src/components/MPanelData/MPanelData.vue'
import vuetify from './vuetify-setup.ts'

describe('MPanelData.vue', () => {
  test('renders no-data slot when data is an empty array', ({ expect }) => {
    const checkboxOptions = [
      { label: 'Option 1', value: 'option1', color: 'red' },
      { label: 'Option 2', value: 'option2', color: 'blue' },
    ]
    const wrapper = mount(MPanelData, {
      global: {
        plugins: [vuetify],
      },
      props: { checkboxOptions, data: [] },
      slots: {
        'no-data': '<div>No data available</div>',
      },
    })

    expect(wrapper.text()).toContain('No data available')
  })
})
