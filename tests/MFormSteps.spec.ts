import { mount } from '@vue/test-utils'
import MFormSteps from '../src/components/MFormSteps/MFormSteps.vue'
import { describe, test, beforeEach } from 'vitest'
import vuetify from './vuetify-setup.ts'

describe('MFormSteps.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MFormSteps, {
      global: {
        plugins: [vuetify],
      },
      props: {
        steps: [
          {
            title: 'Step 1',
            subtitle: 'Subtitle 1',
            titleContent: 'Title Content 1',
            subtitleContent: 'Subtitle Content 1',
          },
          {
            title: 'Step 2',
            subtitle: 'Subtitle 2',
            titleContent: 'Title Content 2',
            subtitleContent: 'Subtitle Content 2',
          },
          {
            title: 'Step 3',
            subtitle: 'Subtitle 3',
            titleContent: 'Title Content 3',
            subtitleContent: 'Subtitle Content 3',
          },
        ],
        previousButtonText: 'Back',
        continueButtonText: 'Next',
        disablePreviousButton: false,
        disableNextButton: false,
        currentStep: 0,
      },
    })
  })

  test('renders the correct number of steps', ({ expect }) => {
    expect(wrapper.findAll('.step-item').length).toBe(3)
  })

  test('renders the correct step titles and subtitles', ({ expect }) => {
    const stepItems = wrapper.findAll('.step-item')
    expect(stepItems.at(0).find('.step-title').text()).toBe('Step 1')
    expect(stepItems.at(0).find('.step-subtitle').text()).toBe('Subtitle 1')
    expect(stepItems.at(1).find('.step-title').text()).toBe('Step 2')
    expect(stepItems.at(1).find('.step-subtitle').text()).toBe('Subtitle 2')
    expect(stepItems.at(2).find('.step-title').text()).toBe('Step 3')
    expect(stepItems.at(2).find('.step-subtitle').text()).toBe('Subtitle 3')
  })

  test('renders the correct step content', ({ expect }) => {
    expect(wrapper.find('.v-card-title span').text()).toBe('Title Content 1')
    expect(wrapper.find('.ml-4').html()).toContain('Subtitle Content 1')
  })

  test('emits "update:currentStep" event when previous button is clicked', async ({
    expect,
  }) => {
    wrapper.setProps({ currentStep: 1 })
    await wrapper.vm.$nextTick() // wait for DOM update

    const button = wrapper.find('.previous-button')
    if (button.exists()) {
      await button.trigger('click')
      await wrapper.vm.$nextTick() // wait for DOM update after click
      expect(wrapper.emitted('update:currentStep')).toBeTruthy()
      expect(wrapper.vm.localCurrentStep).toEqual(0)
    } else {
      throw new Error('Previous button not found')
    }
  })

  test('emits "update:currentStep" event when next button is clicked', async ({
    expect,
  }) => {
    await wrapper.find('.continue-button').trigger('click')
    expect(wrapper.emitted('update:currentStep')).toBeTruthy()
    expect(wrapper.emitted('update:currentStep')[0]).toEqual([1])
  })

  test('disables the previous button when disablePreviousButton prop is true', async ({
    expect,
  }) => {
    wrapper.setProps({ currentStep: 1 })
    await wrapper.vm.$nextTick() // wait for DOM update

    await wrapper.setProps({ disablePreviousButton: true })
    expect(wrapper.find('.previous-button').element.disabled).toBe(true)
  })

  test('disables the next button when disableNextButton prop is true', async ({
    expect,
  }) => {
    await wrapper.setProps({ disableNextButton: true })
    expect(wrapper.find('.continue-button').element.disabled).toBe(true)
  })
})
