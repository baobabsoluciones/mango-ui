<template>
    <div class="kpi-value" :style="{ color: valueColor}">
        {{ value }}
    </div>
</template>

<script>
    export default {
        name: 'KPIValue',
        props: {
            value: [Number, String],
            valueColor: {
                type: String,
                default: '#000000'
            },
        },
    }
</script>

<style>
.kpi-value {
  font-size: 42px;
  font-weight: medium;
  margin-left: 0.5em;
}
</style>