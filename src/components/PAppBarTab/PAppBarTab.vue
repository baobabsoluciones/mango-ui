<template>
	<Toolbar>
		<template #start>
			<Tabs v-model:value="activeValue">
				<TabList>
					<Tab
						v-for="(tab, index) in tabs"
						:key="tabKey(tab, index)"
						:disabled="false"
						:value="index"
						:pt="{ headerAction: { onClick: () => onHeaderClick(index) } }"
					>
						<i v-if="tab.loading" class="mdi mdi-loading mdi-spin" />
						<i v-else :class="`mdi ${tab.icon}`" />
						<span>{{ displayText(tab, index) }}</span>
						<Button
							icon="mdi mdi-close"
							text
							rounded
							size="small"
							aria-label="Close Tab"
							@click.stop="onClose(index)"
						/>
					</Tab>
				</TabList>
				<TabPanels v-if="typeof activeValue === 'number'">
					<TabPanel v-for="(tab, index) in tabs" :key="`panel-${tabKey(tab, index)}`" :value="index" />
				</TabPanels>
			</Tabs>
			<Button
				icon="mdi mdi-plus"
				:label="createTitle"
				text
				rounded
				@click.stop="onCreate"
			/>
		</template>
		<template #end>
			<slot name="actions"></slot>
		</template>
	</Toolbar>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'

interface AppBarTabItem {
	text?: string
	icon?: string
	loading?: boolean
	selected?: boolean
	title?: string
	name?: string
	id?: string | number
	value?: any
}

const props = defineProps<{
	tabs: AppBarTabItem[]
	createTitle?: string
}>()

const emit = defineEmits<{
	(e: 'create'): void
	(e: 'close', index: number): void
	(e: 'select', tab: AppBarTabItem): void
}>()

const initialIndex = computed<number | null>(() => {
	const idx = props.tabs.findIndex(t => t.selected)
	return idx >= 0 ? idx : null
})
const activeValue = ref<number | null>(initialIndex.value)

watch(
	() => props.tabs,
	(newTabs) => {
		const selectedIdx = newTabs.findIndex(t => t.selected)
		if (selectedIdx !== -1 && selectedIdx !== activeValue.value) {
			activeValue.value = selectedIdx
		}
		if (typeof activeValue.value === 'number' && activeValue.value >= newTabs.length) {
			activeValue.value = null
		}
	},
	{ deep: true }
)

watch(
	() => activeValue.value,
	(idx) => {
		if (typeof idx !== 'number') return
		const t = props.tabs[idx]
		if (t) emit('select', t)
	}
)

const onCreate = () => emit('create')
const onClose = (index: number) => {
	if (activeValue.value === index) {
		const t = props.tabs[index]
		if (t) emit('select', t)
		activeValue.value = null
	} else if (typeof activeValue.value === 'number' && index < activeValue.value) {
		activeValue.value = activeValue.value - 1
	}
	emit('close', index)
}

const onHeaderClick = (index: number) => {
	const t = props.tabs[index]
	if (t) emit('select', t)
}

const displayText = (tab: AppBarTabItem, index: number): string => {
	return tab.text ?? tab.title ?? tab.name ?? `Tab ${index + 1}`
}

const tabKey = (tab: AppBarTabItem, index: number): string | number => {
	return tab.id ?? `${index}-${displayText(tab, index)}`
}
</script>


