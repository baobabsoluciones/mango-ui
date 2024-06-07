import { mount } from '@vue/test-utils'
import { describe, test } from 'vitest'
import MTitleView from '../src/components/MTitleView/MTitleView.vue'
import vuetify from './vuetify-setup.ts'

describe('MTitleView.vue', () => {
  test('renders the component', ({ expect }) => {
    const wrapper = mount(MTitleView, {
      props: {
        icon: 'mdi-home',
        title: 'Home',
      },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('renders the correct icon', ({ expect }) => {
    const icon = 'mdi-home'
    const wrapper = mount(MTitleView, {
      props: {
        icon,
        title: 'Home',
      },
      global: {
        plugins: [vuetify],
      },
    })
    const iconElement = wrapper.find('i.mdi-home')
    expect(iconElement.exists()).toBe(true)
  })

  test('renders the correct title', ({ expect }) => {
    const title = 'Home'
    const wrapper = mount(MTitleView, {
      props: {
        icon: 'mdi-home',
        title,
      },
      global: {
        plugins: [vuetify],
      },
    })
    const titleElement = wrapper.find('.title')
    expect(titleElement.text()).toBe(title)
  })

  test('renders the correct description', ({ expect }) => {
    const description = 'This is the home page'
    const wrapper = mount(MTitleView, {
      props: {
        icon: 'mdi-home',
        title: 'Home',
        description,
      },
      global: {
        plugins: [vuetify],
      },
    })
    const descriptionElement = wrapper.find('.description p')
    expect(descriptionElement.text()).toBe(description)
  })

  test('does not render a description if none is provided', ({ expect }) => {
    const wrapper = mount(MTitleView, {
      props: {
        icon: 'mdi-home',
        title: 'Home',
      },
      global: {
        plugins: [vuetify],
      },
    })
    const descriptionElement = wrapper.find('.description p')
    expect(descriptionElement.exists()).toBe(false)
  })
})
