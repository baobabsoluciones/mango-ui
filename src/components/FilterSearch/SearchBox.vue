<template>
  <v-text-field
    label="Search"
    class="search-box"
    variant="outlined"
    append-inner-icon="mdi-magnify"
    single-line
    rounded
    :autofocus="autofocus"
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
    setup() {
      //
    }
  }
</script>

<style scoped>
  .search-box {
    max-width: 600px;
    min-width: 400px;
  }

</style>
