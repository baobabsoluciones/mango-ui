<template>
    <div class="chart-card-title" :style="{ color: titleColor, fontSize: fontSize}">
        {{ title }}
    </div>
</template>

<script>
    export default {
        name: 'ChartCardTitle',
        props: {
            title: {type: String},
            titleColor: {
                type: String,
                default: '#000000'
            },
            fontSize: {
                type: String,
                default: '16px'
            }
        },
    }
</script>

<style>
.chart-card-title{
    font-weight: bold;
    margin: 8px;
}
</style>