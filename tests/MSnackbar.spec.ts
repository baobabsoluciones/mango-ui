import { nextTick } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import { describe, test, beforeEach } from 'vitest'
import MSnackbar from '../src/components/MSnackbar/MSnackbar.vue'
import vuetify from './vuetify-setup.ts'

describe('MSnackbar.vue', () => {
  let wrapper
  let snackbar

  beforeEach(() => {
    snackbar = {
      show: true,
      color: 'success',
      message: 'Test message',
    }

    wrapper = mount(MSnackbar, {
      global: {
        plugins: [vuetify],
        provide: {
          snackbar,
        },
      },
    })
  })

  test('renders the component', ({ expect }) => {
    expect(wrapper.exists()).toBe(true)
  })

  //   test('displays the snackbar message', async ({ expect }) => {
  //     expect(wrapper.text()).toContain('Test message')
  //   })

  //   test('applies the snackbar color', async ({ expect }) => {
  //     await nextTick()
  //     expect(wrapper.attributes('color')).toBe('success')
  //   })

  //   test('closes the snackbar when the close icon is clicked', async ({
  //     expect,
  //   }) => {
  //     await nextTick()
  //     await wrapper.find('v-icon').trigger('click')
  //     expect(snackbar.show).toBe(false)
  //   })
})
