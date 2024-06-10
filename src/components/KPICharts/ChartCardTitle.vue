<template>
    <div class="chart-card-title" :style="{ color: titleColor }">
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
            }
        },
    }
</script>

<style>
.chart-card-title{
    font-size: 16px;
    font-weight: bold;
    margin: 8px;
}
</style>