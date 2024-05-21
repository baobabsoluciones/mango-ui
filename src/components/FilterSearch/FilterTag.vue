<template>
  <div class="filter-tag">
    <span>{{ name }}</span>
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
    font-size: 0.85em;
    border-radius: 25px 25px;
    padding: 6px 12px;
    min-width: 48px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    display: inline-block;
    cursor: pointer;
    border: 1.5px solid #d3d3d3;
  }
</style>
