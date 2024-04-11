<template>
  <v-text-field
    label="Search"
    class="search-box"
    variant="outlined"
    append-inner-icon="mdi-magnify"
    single-line
    rounded
    :autofocus="autofocus"
    v-model="searchData"
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
    max-width: 600px;
    min-width: 400px;
  }

</style>
