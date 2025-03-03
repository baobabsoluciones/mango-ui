<template>
  <div>
    <!-- Example 1: Long headers with spaces -->
    <div class="table-container">
      <h3>Table with Long Headers (With Spaces)</h3>
      <MDataTable
        :headers="longHeadersWithSpaces"
        :items="sampleItems"
        :options="{ density: 'compact' }"
      />
    </div>

    <!-- Example 2: Long headers without spaces -->
    <div class="table-container mt-8">
      <h3>Table with Long Headers (Without Spaces)</h3>
      <MDataTable
        :headers="longHeadersNoSpaces"
        :items="sampleItems"
        :options="{ density: 'compact' }"
      />
    </div>

    <!-- Example 3: Mixed headers -->
    <div class="table-container mt-8">
      <h3>Table with Mixed Headers</h3>
      <MDataTable
        :headers="mixedHeaders"
        :items="sampleItems"
        :options="{ density: 'compact' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const longHeadersWithSpaces = [
  {
    title: 'Very Long Column Header That Needs To Be Wrapped',
    value: 'col1',
    width: '200px'
  },
  {
    title: 'Another Extremely Long Header With Multiple Words',
    value: 'col2',
    width: '180px'
  },
  {
    title: 'Short Header',
    value: 'col3',
    width: '120px'
  },
  {
    title: 'Maximum Temperature During Operation Phase',
    value: 'col4',
    width: '150px'
  }
]

const longHeadersNoSpaces = [
    {
        "title": "gestion_stocks_factorias_stocks_factorias_stocks_factorias_stocks_factorias_stocks_factorias_stocks_factorias_stocks_factorias_stocks_factorias_stocks_factorias_stocks_factorias",
        "value": "gestion_stocks_factorias",
        "visible": true
    },
    {
        "title": "resumen_factorias",
        "value": "resumen_factorias",
        "visible": true
    },
    {
        "title": "resumen_zonas",
        "value": "resumen_zonas",
        "visible": true
    },
    {
        "title": "gestion_stocks_zonas",
        "value": "gestion_stocks_zonas",
        "visible": true
    },
    {
        "title": "gestion_stocks_productos",
        "value": "gestion_stocks_productos",
        "visible": true
    },
    {
        "title": "gestion_entradas",
        "value": "gestion_entradas",
        "visible": true
    },
    {
        "title": "gestion_prod_posicionada",
        "value": "gestion_prod_posicionada",
        "visible": true
    },
    {
        "title": "gestion_prod_posic_agrupada",
        "value": "gestion_prod_posic_agrupada",
        "visible": true
    },
    {
        "title": "gestion_compras",
        "value": "gestion_compras",
        "visible": true
    },
    {
        "title": "gestion_ventas",
        "value": "gestion_ventas",
        "visible": true
    },
    {
        "title": "gestion_importaciones",
        "value": "gestion_importaciones",
        "visible": true
    },
    {
        "title": "gestion_intercambios_refineria",
        "value": "gestion_intercambios_refineria",
        "visible": true
    },
    {
        "title": "gestion_inter_ref_agrupados",
        "value": "gestion_inter_ref_agrupados",
        "visible": true
    },
    {
        "title": "gestion_intercambios_factoria",
        "value": "gestion_intercambios_factoria",
        "visible": true
    },
    {
        "title": "gestion_inter_fact_agrupado",
        "value": "gestion_inter_fact_agrupado",
        "visible": true
    },
    {
        "title": "gestion_cambios_consignaciones",
        "value": "gestion_cambios_consignaciones",
        "visible": true
    },
    {
        "title": "kpis",
        "value": "kpis",
        "visible": true
    },
    {
        "title": "stocks",
        "value": "stocks",
        "visible": true
    },
    {
        "title": "prod_posicionada",
        "value": "prod_posicionada",
        "visible": true
    },
    {
        "title": "coste_total_prod_posicionada",
        "value": "coste_total_prod_posicionada",
        "visible": true
    },
    {
        "title": "compras",
        "value": "compras",
        "visible": true
    },
    {
        "title": "numero_lotes_compra",
        "value": "numero_lotes_compra",
        "visible": true
    },
    {
        "title": "coste_total_compras",
        "value": "coste_total_compras",
        "visible": true
    },
    {
        "title": "ventas",
        "value": "ventas",
        "visible": true
    },
    {
        "title": "numero_lotes_venta",
        "value": "numero_lotes_venta",
        "visible": true
    },
    {
        "title": "ingreso_total_ventas",
        "value": "ingreso_total_ventas",
        "visible": true
    },
    {
        "title": "importaciones",
        "value": "importaciones",
        "visible": true
    },
    {
        "title": "numero_lotes_importacion",
        "value": "numero_lotes_importacion",
        "visible": true
    },
    {
        "title": "coste_total_importaciones",
        "value": "coste_total_importaciones",
        "visible": true
    },
    {
        "title": "intercambios_refineria",
        "value": "intercambios_refineria",
        "visible": true
    },
    {
        "title": "coste_inter_refineria",
        "value": "coste_inter_refineria",
        "visible": true
    },
    {
        "title": "intercambios_factoria",
        "value": "intercambios_factoria",
        "visible": true
    },
    {
        "title": "coste_inter_factoria",
        "value": "coste_inter_factoria",
        "visible": true
    },
    {
        "title": "vol_stock_minimo_zona",
        "value": "vol_stock_minimo_zona",
        "visible": true
    },
    {
        "title": "vol_stock_maximo_zona",
        "value": "vol_stock_maximo_zona",
        "visible": true
    },
    {
        "title": "vol_stock_minimo_factoria",
        "value": "vol_stock_minimo_factoria",
        "visible": true
    },
    {
        "title": "vol_stock_maximo_factoria",
        "value": "vol_stock_maximo_factoria",
        "visible": true
    },
    {
        "title": "coste_total_penalizaciones",
        "value": "coste_total_penalizaciones",
        "visible": true
    },
    {
        "title": "kilometros_metros_cubicos",
        "value": "kilometros_metros_cubicos",
        "visible": true
    },
    {
        "title": "gestion_compras_agrupadas",
        "value": "gestion_compras_agrupadas",
        "visible": true
    },
    {
        "title": "gestion_ventas_agrupadas",
        "value": "gestion_ventas_agrupadas",
        "visible": true
    },
    {
        "title": "gestion_importaciones_agrupadas",
        "value": "gestion_importaciones_agrupadas",
        "visible": true
    },
    {
        "title": "diferencia_volumen_factorias",
        "value": "diferencia_volumen_factorias",
        "visible": true
    },
    {
        "title": "penal_dif_vol_factorias",
        "value": "penal_dif_vol_factorias",
        "visible": true
    },
    {
        "title": "nivel_stock_critico",
        "value": "nivel_stock_critico",
        "visible": true
    }
]

const mixedHeaders = [
  {
    title: 'ID',
    value: 'id',
    width: '80px'
  },
  {
    title: 'Very Long Production Phase Name WithoutSpaces',
    value: 'phase',
    width: '200px'
  },
  {
    title: 'Current Status Of The Operation',
    value: 'status',
    width: '180px'
  },
  {
    title: 'Last Updated By User Name And Timestamp',
    value: 'lastUpdated',
    width: '150px'
  }
]

const sampleItems = [
  {
    col1: 'This is a very long piece of text that demonstrates how the table handles long content in the first column without breaking the layout',
    col2: 'Another extremely long text entry that could represent a detailed description or documentation that spans multiple words',
    col3: 'Short data',
    col4: '85°C',
    // Headers without spaces data
    gestion_stocks_factorias: 'Stock_Factory_123456789_DetailedInventoryReport_2024_Q1_Complete_Analysis',
    resumen_factorias: 'Factory_Summary_Report_Extended_Version_Including_All_Departments_And_Sectors_2024',
    resumen_zonas: 'Comprehensive_Zone_Analysis_Report_Including_Multiple_Geographical_Locations_And_Regions',
    gestion_stocks_zonas: '200_Units_In_Multiple_Warehouses_Across_Different_Geographical_Zones_And_Regions',
    gestion_stocks_productos: '300_Different_Product_Categories_With_Complete_Inventory_Status_And_Details',
    gestion_entradas: '400_New_Entries_Registered_In_The_System_With_Complete_Documentation_And_Tracking',
    gestion_prod_posicionada: '500_Products_Strategically_Positioned_Across_Different_Warehouse_Locations',
    gestion_prod_posic_agrupada: '600_Products_Grouped_By_Category_Location_And_Strategic_Importance_Level',
    gestion_compras: '700_Purchase_Orders_Processed_With_Complete_Supplier_And_Product_Information',
    gestion_ventas: '800_Sales_Transactions_Recorded_With_Customer_And_Product_Details_Complete',
    gestion_importaciones: '900_Import_Records_With_International_Shipping_And_Customs_Documentation',
    gestion_intercambios_refineria: '1000_Refinery_Exchange_Operations_Logged_With_Complete_Process_Details',
    gestion_inter_ref_agrupados: '1100_Grouped_Refinery_Exchanges_With_Detailed_Analysis_And_Metrics',
    gestion_intercambios_factoria: '1200_Factory_Exchange_Operations_With_Full_Production_Impact_Analysis',
    gestion_inter_fact_agrupado: '1300_Grouped_Factory_Exchanges_With_Efficiency_And_Cost_Analysis',
    gestion_cambios_consignaciones: '1400_Consignment_Changes_Tracked_With_Complete_Status_And_History',
    kpis: '95%_Performance_Rating_Based_On_Multiple_Metrics_And_Industry_Standards',
    stocks: '1500_Units_Currently_In_Stock_Across_All_Warehouse_Locations_Combined',
    prod_posicionada: '1600_Products_Strategically_Placed_For_Optimal_Distribution_Efficiency',
    coste_total_prod_posicionada: '1700_Million_Total_Cost_For_All_Positioned_Products_In_Network',
    compras: '1800_Purchase_Orders_In_Progress_With_Complete_Supplier_Details',
    numero_lotes_compra: '1900_Different_Batch_Numbers_Registered_In_Purchasing_System',
    coste_total_compras: '2000_Million_Total_Purchase_Cost_Including_All_Related_Expenses',
    ventas: '2100_Sales_Transactions_Completed_With_Full_Customer_Information',
    numero_lotes_venta: '2200_Sales_Batches_Processed_Through_Distribution_Network',
    ingreso_total_ventas: '2300_Million_Revenue_Generated_From_All_Sales_Channels_Combined',
    importaciones: '2400_Import_Shipments_Processed_Through_International_Logistics',
    numero_lotes_importacion: '2500_Import_Batches_Tracked_Through_Customs_And_Delivery',
    coste_total_importaciones: '2600_Million_Total_Import_Costs_Including_Duties_And_Taxes',
    intercambios_refineria: '2700_Refinery_Exchange_Operations_Completed_This_Quarter',
    coste_inter_refineria: '2800_Million_Cost_Of_All_Refinery_Exchange_Operations',
    intercambios_factoria: '2900_Factory_Exchange_Operations_Processed_Year_To_Date',
    coste_inter_factoria: '3000_Million_Cost_For_All_Factory_Exchange_Activities',
    vol_stock_minimo_zona: '3100_Units_Minimum_Stock_Level_Required_Per_Zone',
    vol_stock_maximo_zona: '3200_Units_Maximum_Stock_Capacity_Per_Zone_Location',
    vol_stock_minimo_factoria: '3300_Units_Minimum_Required_Stock_Level_Per_Factory',
    vol_stock_maximo_factoria: '3400_Units_Maximum_Stock_Capacity_Per_Factory_Location',
    coste_total_penalizaciones: '3500_Million_Total_Cost_Of_All_Penalty_Charges_Incurred',
    kilometros_metros_cubicos: '3600_KM3_Total_Volume_Transported_Across_All_Routes',
    gestion_compras_agrupadas: '3700_Grouped_Purchase_Orders_With_Complete_Analysis',
    gestion_ventas_agrupadas: '3800_Grouped_Sales_Records_With_Trend_Analysis',
    gestion_importaciones_agrupadas: '3900_Grouped_Import_Records_With_Cost_Analysis',
    diferencia_volumen_factorias: '4000_Units_Volume_Difference_Between_Factories',
    penal_dif_vol_factorias: '4100_Million_Penalties_For_Volume_Differences',
    nivel_stock_critico: '4200_Units_Critical_Stock_Level_Threshold_Alert',
    // Mixed headers data
    id: 'ID_001_LONG_FORMAT_2024_Q1',
    phase: 'ProductionPhase1_Extended_Process_With_Multiple_Stages_And_Quality_Controls',
    status: 'In_Progress_With_Multiple_Dependency_Checks_And_Quality_Assurance_Steps',
    lastUpdated: '2024-03-20 10:30:45 GMT+1 Updated_By_System_Administrator_After_Full_Verification'
  },
  {
    col1: 'A different very long text entry showing how the table maintains its structure with varying content lengths in different rows',
    col2: 'This cell contains an extensive amount of text to demonstrate the horizontal scrolling capabilities of the table',
    col3: 'Medium length data entry',
    col4: '92°C',
    // Headers without spaces data - with different formatting
    gestion_stocks_factorias: '150-STOCK-FACTORY-DETAILED-REPORT-2024-Q1',
    resumen_factorias: 'FACTORY.SUMMARY.REPORT.2024.COMPLETE.ANALYSIS',
    resumen_zonas: 'Zone_Analysis_2024_Q1_Detailed_Report',
    gestion_stocks_zonas: '250_UNITS_DISTRIBUTED_ACROSS_ZONES',
    gestion_stocks_productos: '350/Products/In/Stock/Complete/Inventory',
    gestion_entradas: '450|Entries|Registered|With|Details',
    gestion_prod_posicionada: '550:Products:Positioned:Strategic:Locations',
    gestion_prod_posic_agrupada: '650[Grouped][Products][By][Category]',
    gestion_compras: '750{Purchase}{Orders}{Processed}',
    gestion_ventas: '850<Sales><Records><Complete>',
    gestion_importaciones: '950#Import#Records#Detailed',
    gestion_intercambios_refineria: '1050@Refinery@Exchange@Operations',
    gestion_inter_ref_agrupados: '1150$Grouped$Refinery$Exchanges',
    gestion_intercambios_factoria: '1250&Factory&Exchange&Records',
    gestion_inter_fact_agrupado: '1350^Grouped^Factory^Exchanges',
    gestion_cambios_consignaciones: '1450*Consignment*Changes*Tracked',
    kpis: '98%_Efficiency_Rating_Detailed',
    stocks: '1550=Units=In=Stock=Total',
    prod_posicionada: '1650~Positioned~Products~Complete',
    coste_total_prod_posicionada: '1750MM_Total_Position_Cost',
    compras: '1850++Purchase++Orders++Active',
    numero_lotes_compra: '1950--Batch--Numbers--Registered',
    coste_total_compras: '2050MM_Purchase_Cost_Total',
    ventas: '2150!!Sales!!Records!!Complete',
    numero_lotes_venta: '2250??Sales??Batches??Processed',
    ingreso_total_ventas: '2350MM_Sales_Revenue_Total',
    importaciones: '2450%%Import%%Records%%Active',
    numero_lotes_importacion: '2550##Import##Batches##Tracked',
    coste_total_importaciones: '2650MM_Import_Cost_Total',
    intercambios_refineria: '2750@@Refinery@@Exchanges@@Active',
    coste_inter_refineria: '2850MM_Refinery_Exchange_Cost',
    intercambios_factoria: '2950$$Factory$$Exchanges$$Active',
    coste_inter_factoria: '3050MM_Factory_Exchange_Cost',
    vol_stock_minimo_zona: '3150^^Min^^Stock^^Zone',
    vol_stock_maximo_zona: '3250^^Max^^Stock^^Zone',
    vol_stock_minimo_factoria: '3350~~Min~~Stock~~Factory',
    vol_stock_maximo_factoria: '3450~~Max~~Stock~~Factory',
    coste_total_penalizaciones: '3550MM_Penalty_Cost_Total',
    kilometros_metros_cubicos: '3650KM3_Volume_Transported',
    gestion_compras_agrupadas: '3750::Grouped::Purchase::Records',
    gestion_ventas_agrupadas: '3850;;Grouped;;Sales;;Records',
    gestion_importaciones_agrupadas: '3950,,Grouped,,Import,,Records',
    diferencia_volumen_factorias: '4050>>Volume>>Difference>>Total',
    penal_dif_vol_factorias: '4150MM_Volume_Penalty_Cost',
    nivel_stock_critico: '4250!!Critical!!Stock!!Level',
    // Mixed headers data
    id: 'ID_002_EXTENDED_2024_Q1',
    phase: 'ProductionPhase2_Complex_Manufacturing_Process_With_Multiple_Quality_Gates',
    status: 'Completed_With_Full_Quality_Assurance_And_Documentation_Package',
    lastUpdated: '2024-03-20 11:45:30 GMT+1 Updated_By_Quality_Control_Manager_After_Final_Review'
  }
]

</script>

<style>
.mt-8 {
  margin-top: 2rem;
}

.table-container {
  max-width: 800px;
  margin: 0 auto;
  overflow-x: auto;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
}

.table-container h3 {
  margin-bottom: 1rem;
  position: sticky;
  left: 0;
  background: white;
  z-index: 1;
}

/* Table styles */
::v-deep .v-data-table {
  width: max-content !important;
  min-width: 100%;
}

::v-deep .v-data-table__wrapper {
  overflow-x: auto;
  width: 100%;
}

/* Show scrollbar for better UX */
::v-deep .v-data-table__wrapper::-webkit-scrollbar {
  height: 8px;
}

::v-deep .v-data-table__wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::v-deep .v-data-table__wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::v-deep .v-data-table__wrapper::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Ensure table takes full width when content fits */
::v-deep .v-data-table > .v-data-table__wrapper > table {
  width: max-content;
  min-width: 100%;
}
</style>
