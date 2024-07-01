<template>
  <v-container class="fill-height pa-0">
    <div>
      <v-menu v-model="show" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
          <FilterTag :selected="filterData.selected" :name="capitalizedFirstName" v-bind="props" />
        </template>
        <v-card min-width="300" class="rounded-xl">
          <v-col class="pa-4 overflow-x">
            <h3 class="pb-4">{{ capitalizedFirstName }}</h3>
            <v-row v-for="(filter, key) in options" :key="key">
              <div class="checkbox-container">
                  <Checkbox
                    :name="filter.label"
                    :value="filter.value"
                    :active="filter.checked"
                    @addChecked="handleAddChecked"
                    @removeChecked="handleRemoveChecked"
                  ></Checkbox>
              </div>
            </v-row>
          </v-col>
        </v-card>
      </v-menu>
    </div>
  </v-container>
</template>

<script lang="ts">
import Checkbox from './filters/Checkbox.vue';

  export default {
    name: 'MultiCheckbox',
    props: {
      name: {
        type: String,
        default: '',
      },
      filterData: {
        type: Object,
        default: () => ({}),
      },
    },
    setup() {
      //
    },
    data() {
      return {
        show: false,
        options: this.filterData.options ?? [],
        itemSelected: false,
        checked: false,
        checkboxesSelected: [],
      }
    },
    computed: {
      // Compute a new property with the first letter capitalized
      capitalizedFirstName(): string {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
      }
    },
    methods: {
      handleAddChecked(name) {
        this.checkboxesSelected.push(name)
        this.$emit('checked', this.checkboxesSelected)      
      },
      handleRemoveChecked(name) {
        this.checkboxesSelected = this.checkboxesSelected.filter(item => item!= name)
        this.$emit('checked', this.checkboxesSelected)
      }
    },
}
</script>

<style scoped>
  .checkbox-container {
    max-height: 48px;
    overflow: hidden;
  }
</style>
