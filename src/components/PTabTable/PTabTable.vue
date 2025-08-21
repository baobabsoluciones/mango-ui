<template>
	<Card>
		<template #content>
			<div class="ptabtable-container" :class="{ horizontal: !isVertical }">
				<div class="tabs-col" :class="{ vertical: isVertical }">
					<slot name="tabs">
						<Tabs v-if="hasTabs" v-model:value="activeIndex" :orientation="isVertical ? 'vertical' : 'horizontal'">
							<TabList>
								<Tab v-for="(tab, index) in tabsData" :key="index" :value="index">
									{{ tab.text }}
								</Tab>
							</TabList>
							<TabPanels>
								<TabPanel v-for="(tab, index) in tabsData" :key="`panel-${index}`" :value="index" />
							</TabPanels>
						</Tabs>
					</slot>
				</div>
				<div class="content-col">
					<slot name="actions"></slot>
					<div class="table-row">
						<slot name="table" :tableData="selectedValue" :tabSelected="selectedValue">{{ selectedValue }}</slot>
					</div>
					<div class="custom-button-row">
						<slot name="customButton"></slot>
					</div>
				</div>
			</div>
		</template>
	</Card>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

interface TabItem { text: string; value: string | number }

const props = withDefaults(defineProps<{
	tabsData: TabItem[]
	selectedTable?: string | number | undefined
	direction?: 'vertical' | 'horizontal'
}>(), { tabsData: () => [], selectedTable: undefined, direction: 'vertical' })

const emit = defineEmits<{ (e: 'update:selectedTab', value: string | number | undefined): void }>()

const selectedValue = ref<string | number | undefined>(props.selectedTable)

const hasTabs = computed(() => props.tabsData.length > 0)
const findIndexByValue = (val: string | number | undefined): number => {
	if (val === undefined) return 0
	const idx = props.tabsData.findIndex(t => t.value === val)
	return idx >= 0 ? idx : 0
}
const valueByIndex = (idx: number): string | number | undefined => props.tabsData[idx]?.value

const activeIndex = computed<number>({
	get: () => findIndexByValue(selectedValue.value),
	set: (idx: number) => {
		selectedValue.value = valueByIndex(idx)
	}
})

watch(() => props.tabsData, () => {
	// Mantener selección válida
	selectedValue.value = valueByIndex(findIndexByValue(selectedValue.value)) ?? valueByIndex(0)
}, { immediate: true, deep: true })

watch(() => props.selectedTable, (nv) => {
	if (nv !== undefined) selectedValue.value = nv
})

watch(selectedValue, (val) => emit('update:selectedTab', val))

const isVertical = computed(() => props.direction === 'vertical')
</script>