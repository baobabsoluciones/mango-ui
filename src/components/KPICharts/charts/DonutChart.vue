<template>
    <div class="donut-chart" :style="{ width: width, height: height }">
        <apexchart 
            ref="chart"
            type="radialBar"
            :options="chartOptions" 
            :series="computedSeries" 
            :width="width" 
            :height="height"
        ></apexchart>
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
            secondaryColor: {
                type: String,
                default: '#4CAF50',
            },
            value: {
                type: Number,
                default: 0
            },
            secondaryValue: {
                type: Number,
                default: null
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
            computedSeries() {
                return this.secondaryValue !== null 
                    ? [this.value || 0, this.secondaryValue] 
                    : [this.value || 0]
            },
            computedColors() {
                return this.secondaryValue !== null 
                    ? [this.chartColor, this.secondaryColor]
                    : [this.chartColor]
            }
        },
        data () {
            return {
                chartOptions: {
                    chart: {
                        type: 'radialBar',
                        offsetY: 0
                    },
                    stroke: {
                        lineCap: 'round',
                        curve: 'smooth'
                    },
                    plotOptions: {
                        radialBar: {
                            startAngle: -360,
                            endAngle: 0,
                            inverseOrder: true,
                            hollow: {
                                margin: 5,
                                size: "50%"
                            },
                            track: {
                                show: true,
                                background: '#F3F4F6',
                                strokeWidth: '40%',
                                opacity: 1,
                                margin: 3,
                                dropShadow: {
                                    enabled: false
                                }
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                },
                                value: {
                                    show: false
                                },
                            },
                            strokeWidth: '40%'
                        },
                    },
                    fill: {
                        opacity: 1
                    },
                    colors: this.computedColors,
                },
            }
        },
        watch: {
            value: {
                handler() {
                    this.updateChartColors();
                }
            },
            secondaryValue: {
                handler() {
                    this.updateChartColors();
                }
            },
            chartColor: {
                handler() {
                    this.updateChartColors();
                }
            },
            secondaryColor: {
                handler() {
                    this.updateChartColors();
                }
            },
            computedColors: {
                handler(newColors) {
                    this.updateChartColors();
                }
            }
        },
        methods: {
            updateChartColors() {
                this.chartOptions = {
                    ...this.chartOptions,
                    colors: this.computedColors
                };
            }
        }
    }
</script>

<style>
.donut-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>