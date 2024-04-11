<template>
  <div class="filter-tag">
    {{ name }}
  </div>
</template>

<script lang="ts">
  export default {
    name: 'FilterTag',
    props: {
      name: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .filter-tag {
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 1.1em;
    border-radius: 25px 25px;
    padding: 12px 24px;
    min-width: 64px;
    text-align: center;
    margin: 5px;
    margin-top: 0px;
    display: inline-block;
    cursor: pointer;
    border: 2px solid #d3d3d3;
  }
</style>
