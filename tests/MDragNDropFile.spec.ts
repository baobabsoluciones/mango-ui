import { describe, test, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import MDragNDropFile from '../src/components/MDragNDropFile/MDragNDropFile.vue'
import vuetify from './vuetify-setup.ts'

describe('MDragNDropFile.vue', () => {
  let wrapper
  const file = new File([''], 'filename', { type: 'application/json' })
  const invalidFile = new File([''], 'filename', { type: 'text/plain' })

  beforeEach(() => {
    wrapper = mount(MDragNDropFile, {
      global: {
        plugins: [vuetify],
      },
      props: {
        downloadIcon: 'mdi-download',
        description: 'Drag and drop a file here',
        formatsAllowed: ['json'],
        downloadButtonTitle: 'Upload',
      },
    })
  })

  test('renders the component', ({ expect }) => {
    expect(wrapper.exists()).toBe(true)
  })

  test('emits "file-selected" event with selected file when a valid file is selected', async () => {
    Object.defineProperty(wrapper.find('input[type="file"]').element, 'files', {
      value: [file],
    })
    await wrapper.find('input[type="file"]').trigger('change')
    expect(wrapper.emitted('file-selected')).toBeTruthy()
    expect(wrapper.emitted('file-selected')[0]).toEqual([file])
  })

  test('does not emit "file-selected" event when an invalid file is selected', async () => {
    Object.defineProperty(wrapper.find('input[type="file"]').element, 'files', {
      value: [invalidFile],
    })
    await wrapper.find('input[type="file"]').trigger('change')
    expect(wrapper.emitted('file-selected')).toBeFalsy()
  })

  test('emits "file-selected" event with dropped file when a valid file is dropped', async ({
    expect,
  }) => {
    const dropEvent = new Event('drop')
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [file],
      },
    })
    await wrapper.find('.dnd-container').element.dispatchEvent(dropEvent)
    expect(wrapper.emitted('file-selected')).toBeTruthy()
    expect(wrapper.emitted('file-selected')[0]).toEqual([file])
  })

  test('does not emit "file-selected" event when an invalid file is dropped', async ({
    expect,
  }) => {
    const dropEvent = new Event('drop')
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [invalidFile],
      },
    })
    await wrapper.find('.dnd-container').element.dispatchEvent(dropEvent)
    expect(wrapper.emitted('file-selected')).toBeFalsy()
  })

  test('shows error message when an invalid file is selected', async () => {
    Object.defineProperty(wrapper.find('input[type="file"]').element, 'files', {
      value: [invalidFile],
    })
    await wrapper.find('input[type="file"]').trigger('change')
    expect(wrapper.find('.error-message').text()).toBe(
      'Invalid file. Please try again',
    )
  })

  test('shows error message when an invalid file is dropped', async ({
    expect,
  }) => {
    const dropEvent = new Event('drop')
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [invalidFile],
      },
    })
    await wrapper.find('.dnd-container').element.dispatchEvent(dropEvent)
    expect(wrapper.find('.error-message').text()).toBe(
      'Invalid file. Please try again',
    )
  })
})
