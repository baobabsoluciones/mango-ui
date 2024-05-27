<template>
  <v-container class="fill-height pa-0">
    <div>
      <v-menu v-model="show" :close-on-content-click="false" location="end">
        <template v-slot:activator="{ props }">
          <FilterTag :selected="filterData.selected" :name="capitalizedFirstName" v-bind="props" />
        </template>
        <v-card min-width="300" class="rounded-xl">
          <v-col class="pa-4">
            <h3 class="pb-4">{{ capitalizedFirstName }}</h3>
            <v-col>
              <v-row class="flex-row justify-space-between">
                <v-col>
                  <v-text-field label="Min" v-model="min"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="Max" v-model="max"></v-text-field>
                </v-col>
              </v-row>
              <!-- TODO: Add range slider -->
              <!-- <v-row> -->
              <!--   <v-range-slider label="age" min="600" max="1600"></v-range-slider> -->
              <!-- </v-row> -->
            </v-col>
          </v-col>
        </v-card>
      </v-menu>
    </div>
  </v-container>
</template>

<script lang="ts">
  export default {
    name: 'Range',
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
        min: this.filterData.min ?? Number.NEGATIVE_INFINITY,
        max: this.filterData.max ?? Number.POSITIVE_INFINITY,
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
        this.$emit('range', [this.min, this.max]);
      },
      max() {
        this.$emit('range', [this.min, this.max]);
      },
    }
  }
</script>
