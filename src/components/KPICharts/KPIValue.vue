<template>
    <div class="kpi-value" :style="{ color: valueColor, fontSize: valueFontSize}">
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
            valueFontSize: {
                type: String,
                default: '42px'
            }
        },
    }
</script>

<style>
.kpi-value {
  font-weight: medium;
  margin-left: 0.5em;
}
</style>