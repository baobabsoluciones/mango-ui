<template>
    <div class="kpi-chart-card"
    :style="{backgroundColor: backgroundColor, ...$attrs}">
        <ChartCardTitle :title="title" :titleColor="titleColor"/>
        <div class="content">
            <KPIValue :value="computedValue" :valueColor="valueColor"/>
            <template v-if="chartType === 'donut'">
                <DonutChart :chartColor="chartColor" :value="value"/>
            </template>
            <template v-if="chartType === 'area'">
                <AreaChart :chartColor="chartColor" :series="series" :value="value"/>
            </template>
        </div>
    </div>
</template>

<script>
import ChartCardTitle from './ChartCardTitle.vue'
import KPIValue from './KPIValue.vue'
import DonutChart from './charts/DonutChart.vue';
import AreaChart from './charts/AreaChart.vue'


export default {
    name: 'KPIChartCard',
    props: {
        title: {
            type: String,
            default: () => ({}),
        },
        value: {
            type: Number,
            default: () => ({}),
        },
        series: {
            type: Array,
            default: () => []
        },
        chartType: {
            type: String,
        },
        backgroundColor: {
            type: String,
            default: '#b8b6b7'
        },
        chartColor: {
            type: String,
            default: '#214270'
        },
        valueColor: {
            type: String,
            default: '#000000'
        },
        titleColor: {
            type: String,
            default: '#000000'
        },
    },
    computed: {
        computedValue() {
            if (this.chartType === 'area' && this.series.length) {
                return this.series[this.series.length -1];
            }
            return this.value;
        }
    }
}


</script>

<style>
.kpi-chart-card {
  border-radius: 8px;
  padding: 8px;
  height: 150px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: -2em;
}

</style>