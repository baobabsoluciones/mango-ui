<template>
    <v-container class="background">
        <v-row class="mt-4">
      <v-col cols="auto">
        <KPIChartCard
          title="Pallets per operator"
          :value="12"
          chartType="area"
          :series="[8, 10, 12, 9, 11, 13, 12]"
          backgroundColor="#FFFFFF"
          chartColor="#0D47A1"
          titleColor="#000000"
          valueColor="#000000"
          height="150px"
          width="230px"
          chartHeight="80px"
          chartWidth="140px"
          valueFontSize="32px"
          fontSize="16px"
          class="mr-4"
        />
      </v-col>
      <v-col cols="auto">
        <KPIChartCard
          title="Average occupancy"
          :value="78"
          formatSymbol="%"
          chartType="donut"
          backgroundColor="#FFFFFF"
          chartColor="#0D47A1"
          titleColor="#000000"
          valueColor="#000000"
          height="150px"
          width="200px"
          chartHeight="80px"
          chartWidth="150px"
          valueFontSize="32px"
          fontSize="16px"
        />
      </v-col>
    </v-row>
    </v-container>
</template>

<script setup lang="ts">
// ... código existente ...
</script>
<style>
.background {
    background-color: aqua;
}
</style>
