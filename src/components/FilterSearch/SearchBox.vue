<template>
  <v-text-field
    :label="label"
    :class="['search-box', size]"
    variant="outlined"
    density="compact"
    append-inner-icon="mdi-magnify"
    single-line
    rounded
    :autofocus="autofocus"
    v-model="searchData"
    hide-details="auto"
  >
  </v-text-field>
</template>

<script lang="ts">
  export default {
    name: 'SearchBox',
    props: {
      //
      autofocus: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: 'Search',
      },
      size: {
        type: String,
        default: 'md',
      },
    },
    data() {
      return {
        searchData:'',
      }
    },
    setup() {
      //
    },
    methods: {

    },
    watch: {
      searchData() {
        this.$emit('search', this.searchData);
      }
    }
  }
</script>

<style scoped>
 .search-box {
  font-size: 0.85em;
 }

</style>
