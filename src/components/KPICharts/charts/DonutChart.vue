<template>
    <div class= "donut-chart" :style="{ width: width, height: height }">
        <apexchart :options="chartOptions" :series="series" :width="width" :height="height"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

    export default {
        name: 'DonutChart',
        components: {
            apexchart: VueApexCharts,
        },
        props: {
            chartColor: {
                type: String,
                default: '#214270',
            },
            value: {
                type: Number
            },
            width: {
                type: String,
                default: '150px'
            },
            height: {
                type: String,
                default: '150px'
            }
        },
        data () {
            return {
                series: [this.value],
                chartOptions: {
                    chart: {
                        type: 'radialBar',
                        height: this.height,
                        width: this.width,
                    },
                    stroke: {
                        lineCap: 'round'
                    },
                    plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "55%"
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false
                            },
                        },
                        track: {
                            background: '#f2f2f2',
                            strokeWidth: '100%',
                        },
                    },
                },
                colors: [this.chartColor],
                },
            }
        },  
    }
</script>

<style>
.donut-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
}
</style>