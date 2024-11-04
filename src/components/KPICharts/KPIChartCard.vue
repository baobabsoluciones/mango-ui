<template>
    <div class="kpi-chart-card"
    :style="{backgroundColor: backgroundColor, height: height, width: width}">
        <ChartCardTitle :title="title" :titleColor="titleColor" :fontSize="fontSize"/>
        <div class="content">
            <KPIValue :value="computedValue" :valueColor="valueColor" :valueFontSize= "valueFontSize" :formatSymbol="formatSymbol"/>
            <template v-if="chartType === 'donut'">
                <DonutChart :chartColor="chartColor" :value="value" :width="chartWidth" :height="chartHeight"/>
            </template>
            <template v-if="chartType === 'area'">
                <AreaChart :chartColor="chartColor" :series="series" :value="value" :width="chartWidth" :height="chartHeight"/>
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
        height: {
            type: String,
            default: '150px'
        },
        width: {
            type: String,
            default: 'auto'
        },
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
        valueFontSize: {
            type: String,
            default: '42px'
        },
        titleColor: {
            type: String,
            default: '#000000'
        },
        fontSize: {
            type: String,
            default: '16px'
        },
        chartWidth: {
            type: String,
            default: '150px'
        },
        chartHeight: {
            type: String,
            default: '150px'
        },
        formatSymbol: {
            type: String,
            default: ''
        }
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
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

</style>