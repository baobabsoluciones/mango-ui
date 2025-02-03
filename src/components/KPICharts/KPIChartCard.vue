<template>
    <div class="kpi-chart-card"
    :style="{backgroundColor: backgroundColor, height: height, width: width}">
        <ChartCardTitle :title="title" :titleColor="titleColor" :fontSize="fontSize"/>
        <div class="content">
            <div class="values-container">
                <div v-if="mainValue" class="value-item">
                    <KPIValue 
                        :value="mainValue.value" 
                        :valueColor="mainValue.color || valueColor" 
                        :valueFontSize="valueFontSize"
                        :formatSymbol="formatSymbol"
                    />
                    <span class="value-label" :style="{ color: mainValue.color || valueColor }">{{ mainValue.label }}</span>
                </div>
                <div v-if="secondaryValue" class="value-item">
                    <KPIValue 
                        :value="secondaryValue.value" 
                        :valueColor="secondaryValue.color || valueColor" 
                        :valueFontSize="valueFontSize"
                        :formatSymbol="formatSymbol"
                    />
                    <span class="value-label" :style="{ color: secondaryValue.color || valueColor }">{{ secondaryValue.label }}</span>
                </div>
            </div>
            <template v-if="chartType === 'donut'">
                <DonutChart 
                    :chartColor="mainValue?.color || chartColor"
                    :secondaryColor="secondaryValue?.color || secondaryColor"
                    :value="mainValue?.value"
                    :secondaryValue="secondaryValue?.value"
                    :width="chartWidth" 
                    :height="chartHeight"
                />
            </template>
            <template v-if="chartType === 'area'">
                <AreaChart 
                    :chartColor="mainValue?.color || chartColor"
                    :secondaryColor="secondaryValue?.color || secondaryColor"
                    :series="series"
                    :secondarySeries="secondarySeries"
                    :mainLabel="mainValue?.label"
                    :secondaryLabel="secondaryValue?.label"
                    :width="chartWidth" 
                    :height="chartHeight"
                />
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
    components: {
        ChartCardTitle,
        KPIValue,
        DonutChart,
        AreaChart
    },
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
            default: ''
        },
        series: {
            type: Array,
            default: () => []
        },
        secondarySeries: {
            type: Array,
            default: () => []
        },
        chartType: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            default: '#FFFFFF'
        },
        chartColor: {
            type: String,
            default: '#214270'
        },
        secondaryColor: {
            type: String,
            default: '#4CAF50'
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
        },
        mainValue: {
            type: Object,
            default: null
        },
        secondaryValue: {
            type: Object,
            default: null
        }
    }
}
</script>

<style>
.kpi-chart-card {
  border-radius: 8px;
  padding: 16px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.values-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.value-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

.value-label {
    font-size: 14px;
    font-weight: 500;
}
</style>