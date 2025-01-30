<template>
  <div class="app">
    <div class="charts-container">
      <!-- Multiple Values Examples -->
      <h3 class="section-title">Multiple Values Examples</h3>
      <div class="charts-row">
        <!-- Donut Chart Example with Multiple Values -->
        <KPIChartCard
          title="Occupation Rate of Filling Racks"
          :mainValue="{ value: 90, label: 'Shift', color: '#3B82F6' }"
          :secondaryValue="{ value: 88, label: 'Avg.', color: '#10B981' }"
          chartType="donut"
          chartWidth="120px"
          chartHeight="120px"
          backgroundColor="#FFFFFF"
          width="400px"
          height="200px"
          valueFontSize="32px"
          formatSymbol="%"
        />

        <!-- Area Chart Example with Multiple Values -->
        <KPIChartCard
          title="Expected Cryogenic Filled in the Shift"
          :mainValue="{ value: 23, label: 'Shift', color: '#3B82F6' }"
          :secondaryValue="{ value: 25, label: 'Avg.', color: '#10B981' }"
          chartType="area"
          :series="[18, 20, 22, 21, 23]"
          :secondarySeries="[20, 22, 24, 23, 25]"
          chartWidth="200px"
          chartHeight="120px"
          backgroundColor="#FFFFFF"
          width="400px"
          height="200px"
          valueFontSize="32px"
          formatSymbol="m³"
        />
      </div>

      <!-- Single Value Examples -->
      <h3 class="section-title">Single Value Examples</h3>
      <div class="charts-row">
        <!-- Donut Chart Example with Single Value -->
        <KPIChartCard
          title="Current Efficiency"
          :mainValue="{ value: 85, label: 'Efficiency', color: '#3B82F6' }"
          chartType="donut"
          chartWidth="120px"
          chartHeight="120px"
          backgroundColor="#FFFFFF"
          width="400px"
          height="200px"
          valueFontSize="32px"
          formatSymbol="%"
        />

        <!-- Area Chart Example with Single Value -->
        <KPIChartCard
          title="Temperature Trend"
          :mainValue="{ value: 24, label: 'Celsius', color: '#3B82F6' }"
          chartType="area"
          :series="[20, 22, 23, 24, 24]"
          chartWidth="200px"
          chartHeight="120px"
          backgroundColor="#FFFFFF"
          width="400px"
          height="200px"
          valueFontSize="32px"
          formatSymbol="°C"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KPIChartCard from './components/KPICharts/KPIChartCard.vue'
</script>

<style>
.app {
  padding: 20px;
  background-color: #f3f4f6;
  min-height: 100vh;
}

.charts-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-title {
  color: #374151;
  font-size: 18px;
  margin: 0;
  padding: 0 0 16px 0;
}

.charts-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.kpi-chart-card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
