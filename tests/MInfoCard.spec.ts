import { mount } from '@vue/test-utils'
import { describe, test, beforeEach } from 'vitest'
import MInfoCard from '../src/components/MInfoCard/MInfoCard.vue'
import vuetify from './vuetify-setup.ts'

describe('MInfoCard.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MInfoCard, {
      global: {
        plugins: [vuetify],
      },
      props: {
        icon: 'mdi-information',
        iconColor: 'blue',
        title: 'Test Title',
        description: 'Test Description',
      },
    })
  })

  test('renders the icon prop correctly', ({ expect }) => {
    const icon = wrapper.find('i.mdi-information')
    expect(icon.exists()).toBe(true)
  })

  test('renders the iconColor prop correctly', ({ expect }) => {
    const icon = wrapper.find('i.text-blue')
    expect(icon.exists()).toBe(true)
  })

  test('renders the title prop correctly', ({ expect }) => {
    const title = wrapper.find('.info-card-title')
    expect(title.text()).toBe('Test Title')
  })

  test('renders the description prop correctly', ({ expect }) => {
    const description = wrapper.find('.info-card-subtitle')
    expect(description.text()).toBe('Test Description')
  })

  describe('with slots', () => {
    beforeEach(() => {
      wrapper = mount(MInfoCard, {
        global: {
          plugins: [vuetify],
        },
        slots: {
          icon: '<div class="icon-slot">Icon Slot</div>',
          title: '<div class="title-slot">Title Slot</div>',
          description: '<div class="description-slot">Description Slot</div>',
          content: '<div class="content-slot">Content Slot</div>',
        },
      })
    })

    test('renders the icon slot correctly', ({ expect }) => {
      const iconSlot = wrapper.find('.icon-slot')
      expect(iconSlot.exists()).toBe(true)
    })

    test('renders the title slot correctly', ({ expect }) => {
      const titleSlot = wrapper.find('.title-slot')
      expect(titleSlot.exists()).toBe(true)
    })

    test('renders the description slot correctly', ({ expect }) => {
      const descriptionSlot = wrapper.find('.description-slot')
      expect(descriptionSlot.exists()).toBe(true)
    })

    test('renders the content slot correctly', ({ expect }) => {
      const contentSlot = wrapper.find('.content-slot')
      expect(contentSlot.exists()).toBe(true)
    })
  })
})
