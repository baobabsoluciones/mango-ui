<template>
  <v-container class="fill-height pa-0">
    <div>
      <v-menu v-model="show" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
          <FilterTag :name="capitalizedFirstName" v-bind="props" />
        </template>
        <v-card min-width="300" class="rounded-xl custom-card">
          <v-col class="pa-4">
            <h3 class="pb-4">{{ capitalizedFirstName }}</h3>
            <v-col>
              <v-row class="flex-row justify-space-between">
                <v-col>
                  <h3>From</h3>
                  <v-date-picker
                    v-model="min"
                    color="primary"
                    hide-header=true
                  ></v-date-picker>
                </v-col>
                <v-col>
                  <h4>To</h4>
                  <v-date-picker
                    v-model="max"
                    color="primary"
                    hide-header=true
                  ></v-date-picker>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-card>
      </v-menu>
    </div>
  </v-container>
</template>

<script lang="ts">
  export default {
    name: 'DateRange',
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
        min: this.filterData.min ?? new Date().toISOString().split('T')[0],
        max: this.filterData.max ?? new Date().toISOString().split('T')[0],
      }
    },
    computed: {
      // Compute a new property with the first letter capitalized
      capitalizedFirstName(): string {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
      }
    },
    watch: {
      min() {
        console.log(this.min, this.max)
        this.$emit('dateRange', [this.min, this.max]);
      },
      max() {
        console.log(this.min, this.max)
        this.$emit('dateRange', [this.min, this.max]);
      },
    },
  }
</script>
