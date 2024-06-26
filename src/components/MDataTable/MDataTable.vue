<template>
  <v-data-table
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
  </v-data-table>
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
  },
  data: () => ({
    search: '',
  }),
  methods: {
    handleInput(value, type, key, index) {
      if (type === 'number') {
        this.items[index][key] = Number(value)
      } else {
        this.items[index][key] = value
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
      return this.items.map((item, index) => ({
        ...item,
        index,
      }))
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

