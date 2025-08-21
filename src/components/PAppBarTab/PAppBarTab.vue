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
					>
						<div class="p-tab" @click.stop.prevent="onHeaderToggle(index)">
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
						</div>
					</Tab>
				</TabList>
				<TabPanels v-if="activeValue >= 0">
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
import { ref, watch, computed, nextTick } from 'vue'
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

const selectedIndex = computed(() => props.tabs.findIndex(t => t.selected))
const initialIndex = computed<number>(() => (selectedIndex.value !== -1 ? selectedIndex.value : -1))
const activeValue = ref<number>(initialIndex.value)

watch(
	() => props.tabs,
	(newTabs) => {
		const selIdx = newTabs.findIndex(t => t.selected)
		if (selIdx !== -1 && selIdx !== activeValue.value) {
			activeValue.value = selIdx
		} else if (selIdx === -1) {
			activeValue.value = -1
		}
		if (activeValue.value >= newTabs.length) {
			activeValue.value = -1
		}
	},
	{ deep: true }
)

watch(
	() => activeValue.value,
	(idx) => {
		if (idx < 0) return
		const t = props.tabs[idx]
		if (t) emit('select', t)
	}
)

const onCreate = () => emit('create')
const onClose = async (index: number) => {
	if (activeValue.value === index) {
		const t = props.tabs[index]
		if (t) emit('select', t)
		activeValue.value = -1
		await nextTick()
	}
	if (activeValue.value > index) {
		activeValue.value = activeValue.value - 1
	}
	emit('close', index)
}

const onHeaderToggle = (index: number) => {
	const tab = props.tabs[index]
	if (!tab) return
	if (activeValue.value === index && tab.selected) {
		// Desactivar (ocultar contenido)
		activeValue.value = -1
		emit('select', tab)
	} else {
		// Activar
		activeValue.value = index
		emit('select', tab)
	}
}

const displayText = (tab: AppBarTabItem, index: number): string => {
	return tab.text ?? tab.title ?? tab.name ?? `Tab ${index + 1}`
}

const tabKey = (tab: AppBarTabItem, index: number): string | number => {
	return tab.id ?? `${index}-${displayText(tab, index)}`
}
</script>