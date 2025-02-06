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
            secondaryColor: {
                type: String,
                default: '#4CAF50',
            },
            series: {
                type: Array
            },
            secondarySeries: {
                type: Array,
                default: () => []
            },
            mainLabel: {
                type: String,
                default: 'Primary'
            },
            secondaryLabel: {
                type: String,
                default: 'Secondary'
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
                const series = [{
                    name: this.mainLabel,
                    data: this.series
                }];
                
                if (this.secondarySeries.length > 0) {
                    series.push({
                        name: this.secondaryLabel,
                        data: this.secondarySeries
                    });
                }
                return series;
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
                        curve: 'smooth',
                        width: 2
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: 'solid',
                        opacity: [0.35, 0.25],
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
                        shared: true,
                        intersect: false,
                        x: { show: false },
                        marker: { show: false },
                        y: {
                            title: {
                                formatter: function formatter(seriesName) {
                                    return seriesName + ": ";
                                },
                            },
                        },
                    },
                    colors: [this.chartColor, this.secondaryColor],
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