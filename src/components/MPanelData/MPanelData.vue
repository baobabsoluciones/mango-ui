<template>
  <v-card class="rounded-lg pa-10" style="background-color: white !important">
    <v-row style="margin-top: -30px">
      <v-col v-for="option in checkboxOptions" :key="option.value" cols="auto">
        <v-checkbox
          v-model="selectedDateRange"
          :label="option.label"
          :value="option.value"
          class="custom-checkbox"
          :color="option.color"
          @change="$emit('date-range-changed', selectedDateRange)"
        >
        </v-checkbox>
      </v-col>
      <v-col v-if="selectedDateRange === 'custom'">
        <div class="ml-1" style="height: 50px !important">
          <slot name="custom-checkbox"></slot>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels variant="accordion" multiple v-model="openedPanels">
          <v-expansion-panel v-for="(item, index) in data" :key="index">
            <v-expansion-panel-title>{{
              formatDateForHeaders(item.date, language)
            }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <slot
                name="table"
                :item-data="item.data"
                :show-headers="index === 0"
              ></slot>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <template v-if="data.length === 0">
          <div
            class="d-flex align-center justify-center"
            style="height: 100%; color: var(--subtitle)"
          >
            <slot name="no-data">{{ noDataMessage }}</slot>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { formatDateForHeaders } from '@/utils/data_io'

export default {
  name: 'MPanelData',
  components: {},
  props: {
    data: {
      type: Array,
      required: true,
    },
    showFirstHeaders: {
      type: Boolean,
      default: false,
    },
    checkboxOptions: {
      type: Array,
      required: true,
    },
    noDataMessage: {
      type: String,
      default: 'No data for the selected range',
    },
    allPanelsOpen: {
      type: Boolean,
      default: true,
    },
    language: {
      type: String,
      default: 'en',
    },
  },
  data: () => ({
    selectedDateRange: null,
    customDateRange: {
      from: null,
      to: null,
    },
    openedPanels: [],
  }),
  methods: {
    formatDateForHeaders,
  },
  watch: {
    data(newData, oldData) {
      if (newData.length !== oldData.length && this.allPanelsOpen) {
        this.openedPanels = newData.map((_, index) => index)
      }
    },
  },
}
</script>

<style src="./MPanelData.css" scoped></style>
