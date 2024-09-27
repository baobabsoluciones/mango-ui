<template>
  <v-data-table
    v-if="showFooter"
    fixed-header
    class="pa-2 data-table"
    :headers="tableHeaders"
    :items="itemsWithIndex"
    v-bind="options"
    :hide-default-footer="!showFooter"
    :class="[footerClass, headerClass]"
  >
    <template
      v-for="header in tableHeaders"
      v-slot:[`item.${header.value}`]="{ item }"
    >
      <slot :name="header.value" :item="item">
        <div v-if="!editionMode">
          <template v-if="header.type === 'boolean'">
            <input type="checkbox" :checked="item[header.value]" disabled />
          </template>
          <template v-else>
            {{ item[header.value] }}
          </template>
        </div>
        <div v-else>
          <template v-if="header.value === 'delete'">
            <v-icon small @click="$emit('delete-item', item.index)"
              >mdi-delete</v-icon
            >
          </template>
          <template v-else-if="header.type === 'boolean'">
            <input type="checkbox" :checked="item[header.value]" />
          </template>
          <template v-else>
            <v-text-field
              v-model="item[header.value]"
              single-line
              counter
              hide-details
              @input="
                handleInput(
                  item[header.value],
                  header.type || item.type,
                  header.value,
                  item.index,
                )
              "
              :type="
                header.type ? header.type : header.disabled ? 'text' : item.type
              "
              :disabled="header.disabled"
              :density="options.density"
            ></v-text-field>
          </template>
        </div>
      </slot>
    </template>
    <template v-slot:top>
      <v-btn
        class="create-tab-btn"
        variant="outlined"
        size="x-small"
        rounded="lg"
        @click="$emit('create-item')"
        style="width: 140px"
        v-if="editionMode && !headers[0].config"
      >
        <v-row no-gutters class="align-center">
          <v-col cols="auto">
            <v-icon style="font-size: 0.85rem" class="mr-1">mdi-plus</v-icon>
          </v-col>
          <v-col cols="auto"> {{ $t('inputOutputData.addItem') }} </v-col>
        </v-row>
      </v-btn>
    </template>
    <template v-slot:bottom>
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        color="var(--primary)"
        @input="handlePageChange"
        density="comfortable"
      >
        <template v-slot:prev>
          <div class="mr-5">
            <v-icon
              :class="{ 'pagination-icon-disabled': currentPage === 1 }"
              class="pagination-icon"
              :disabled="currentPage === 1"
              @click="currentPage--"
            >
              mdi-chevron-left
            </v-icon>
            <span
              :class="{ 'pagination-icon-disabled': currentPage === 1 }"
              class="pagination-icon ml-2"
              @click="goPrevPage()"
              style="font-size: 0.8rem !important; user-select: none"
            >
              {{ prevText }}
            </span>
          </div>
        </template>
        <template v-slot:next>
          <div class="ml-5">
            <span
              :class="{
                'pagination-icon-disabled': currentPage === totalPages,
              }"
              class="pagination-icon mr-2"
              @click="goNextPage()"
              style="font-size: 0.8rem !important; user-select: none"
            >
              {{ nextText }}
            </span>
            <v-icon
              :class="{
                'pagination-icon-disabled': currentPage === totalPages,
              }"
              class="pagination-icon"
              :disabled="currentPage === totalPages"
              @click="currentPage++"
            >
              mdi-chevron-right
            </v-icon>
          </div>
        </template>
      </v-pagination>
    </template>
  </v-data-table>
  <v-data-table-virtual
    fixed-header
    class="hide-scrollbar"
    v-else-if="!showFooter"
    :headers="headers"
    :items="items"
    :options="options"
    :density="'compact'"
  >
  </v-data-table-virtual>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    showHeaders: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    editionMode: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    prevText: {
      type: String,
      default: 'Previous',
    },
    nextText: {
      type: String,
      default: 'Next',
    },
    resetCurrentPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    search: '',
    currentPage: 1,
  }),
  watch: {
    resetCurrentPage(newVal) {
      if (newVal) {
        this.currentPage = 1
        this.$emit('update:resetCurrentPage', false) // Reset the prop to false after resetting the page
      }
    },
  },
  methods: {
    handleInput(value, type, key, index) {
      if (type === 'number') {
        this.items[index][key] = Number(value)
      } else {
        this.items[index][key] = value
      }
    },
    handlePageChange(page) {
      this.currentPage = page
    },
    goNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    goPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
  },
  computed: {
    tableHeaders() {
      if (this.editionMode && !this.headers[0].config) {
        return [
          ...this.headers,
          {
            text: '',
            value: 'delete',
            sortable: false,
          },
        ]
      } else {
        return this.headers.filter((header) => header.value !== 'delete')
      }
    },
    itemsWithIndex() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.items.slice(start, end).map((item, index) => ({
        ...item,
        index: start + index,
      }))
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    footerClass() {
      return this.showFooter ? '' : 'hide-footer'
    },
    headerClass() {
      return this.showHeaders ? '' : 'hide-header'
    },
  },
}
</script>

<style src="./MDataTable.css" scoped></style>
