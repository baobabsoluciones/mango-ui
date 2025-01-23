<template>
    <div class= "area-chart" :style="{ width: width, height: height }">
        <apexchart :options="chartOptions" :series="chartSeries" :width="width" :height="height"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

    export default {
        name: 'AreaChart',
        components: {
            apexchart: VueApexCharts,
        },
        props: {
            chartColor: {
                type: String,
                default: '#214270',
            },
            series: {
                type: Array
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
        computed: {
            chartSeries() {
                return [{data: this.series}]
            },
            chartOptions() {
                return {
                    chart: {
                        type: 'area',
                        toolbar: {
                            show: false
                        },
                        zoom: {
                            enabled: false
                        },
                        sparkline: { enabled: true },
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: 'solid',
                        opacity: 0.8,
                    },
                    xaxis: {
                        labels: {
                            show: false
                        },
                        axisBorders: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        }
                    },
                    yaxis: {
                        labels: {
                            show: false
                        },
                        axisBorders: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        }
                    },
                    grid: {
                        show: false 
                    },
                    tooltip: {
                        x: { show: false },
                        marker: { show: false },
                        y: {
                            title: {
                            formatter: function formatter() {
                                return "";
                            },
                            },
                            formatter: function (value) {
                            return value;
                            },
                        },
                    },
                    colors: [this.chartColor],
                }
            }
        },
        data() {
            return {}
        },
    }
</script>

<style>
.area-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
}
</style>