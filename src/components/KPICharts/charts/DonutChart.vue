<template>
    <div class= "donut-chart">
        <apexchart :options="chartOptions" :series="series"></apexchart>
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
            }
        },
        data () {
            return {
                series: [this.value],
                chartOptions: {
                    chart: {
                        type: 'radialBar',
                        height: 150,
                        width: 150,
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
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
}
</style>