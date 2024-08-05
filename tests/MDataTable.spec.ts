import { mount } from '@vue/test-utils'
import { describe, test, beforeEach } from 'vitest'
import MDataTable from '../src/components/MDataTable/MDataTable.vue'
import vuetify from './vuetify-setup.ts'

describe('MDataTable.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MDataTable, {
      global: {
        plugins: [vuetify],
      },
      props: {
        headers: [{ text: 'Name', value: 'name' }],
        items: [{ name: 'John Doe' }, { name: 'Jane Doe' }],
        options: {},
        showHeaders: true,
        showFooter: true,
        editionMode: false,
        itemsPerPage: 2,
        prevText: 'Previous',
        nextText: 'Next',
      },
    })
  })

  test('renders a v-data-table', ({ expect }) => {
    expect(wrapper.findComponent({ name: 'v-data-table' }).exists()).toBe(true)
  })

  test('renders the correct number of rows', ({ expect }) => {
    expect(wrapper.findAll('tbody > tr').length).toBe(2)
  })

  test('renders the correct items', ({ expect }) => {
    const rows = wrapper.findAll('tbody > tr')
    expect(rows.at(0).text()).toContain('John Doe')
    expect(rows.at(1).text()).toContain('Jane Doe')
  })

  test('handles input correctly', async ({ expect }) => {
    await wrapper.vm.handleInput('New Name', 'text', 'name', 0)
    expect(wrapper.vm.items[0].name).toBe('New Name')
  })

  test('handles page change correctly', async ({ expect }) => {
    await wrapper.vm.handlePageChange(2)
    expect(wrapper.vm.currentPage).toBe(2)
  })

  test('goes to the next page correctly', async ({ expect }) => {
    await wrapper.vm.goNextPage()
    expect(wrapper.vm.currentPage).toBe(1)
  })

  test('goes to the previous page correctly', async ({ expect }) => {
    await wrapper.vm.goPrevPage()
    expect(wrapper.vm.currentPage).toBe(1)
  })

  test('computes tableHeaders correctly', ({ expect }) => {
    expect(wrapper.vm.tableHeaders).toEqual([{ text: 'Name', value: 'name' }])
  })

  test('computes itemsWithIndex correctly', ({ expect }) => {
    expect(wrapper.vm.itemsWithIndex).toEqual([
      { name: 'John Doe', index: 0 },
      { name: 'Jane Doe', index: 1 },
    ])
  })

  test('computes totalPages correctly', ({ expect }) => {
    expect(wrapper.vm.totalPages).toBe(1)
  })

  test('computes footerClass correctly', ({ expect }) => {
    expect(wrapper.vm.footerClass).toBe('')
  })

  test('computes headerClass correctly', ({ expect }) => {
    expect(wrapper.vm.headerClass).toBe('')
  })
})
