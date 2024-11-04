<template>
    <div class="kpi-value" :style="{ color: valueColor, fontSize: valueFontSize}">
        {{ value }}<span v-if="formatSymbol" :style="{ fontSize: computedSymbolFontSize }">{{ formatSymbol }}</span>
    </div>
</template>

<script>
    export default {
        name: 'KPIValue',
        props: {
            value: [Number, String],
            valueColor: {
                type: String,
                default: '#000000'
            },
            valueFontSize: {
                type: String,
                default: '42px'
            },
            formatSymbol: {
                type: String,
                default: ''
            }
        },
        computed: {
            computedSymbolFontSize() {
                const baseSize = parseInt(this.valueFontSize); 
                return `${baseSize - 10}px`; 
            }
        }
    }
</script>

<style>
.kpi-value {
  font-weight: medium;
  margin-left: 0.5em;
}
</style>