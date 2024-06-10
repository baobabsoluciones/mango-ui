<template>
    <div class= "area-chart">
        <apexchart :options="chartOptions" :series="chartSeries"></apexchart>
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
            }
        },
        computed: {
            chartSeries() {
                return [{data: this.series}]
            }
        },
        data () {
            return {
                chartOptions: {
                    chart: {
                        type: 'area',
                        height: 150,
                        width: 150,
                        toolbar: {
                            show: false
                        },
                        zoom: {
                            enabled: false
                        },
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
                        enabled: false
                    },
                    colors: [this.chartColor],
                },
            }
        },  
    }
</script>

<style>
.area-chart {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
}
</style>