<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

interface Header {
	text?: string
	title?: string
	value: string
	type?: string
	disabled?: boolean
	config?: boolean
}

interface Item {
	[key: string]: any
	index?: number
}

// Props
const props = defineProps<{
	headers: Header[]
	items: Item[]
	options?: Record<string, any>
	showHeaders?: boolean
	showFooter?: boolean
	editionMode?: boolean
	itemsPerPage?: number
	prevText?: string
	nextText?: string
	resetCurrentPage?: boolean
	noDataMessage?: string
	addSpaceBetweenPagination?: boolean
}>()

// Emits
defineEmits(['create-item', 'delete-item'])

// Pagination
const currentPage = ref(1)
const currentPageZeroBased = computed({
	get: () => currentPage.value - 1,
	set: (val: number) => (currentPage.value = val + 1)
})

// Watch resetCurrentPage
watch(() => props.resetCurrentPage, (val) => {
	if (val) currentPage.value = 1
})

// Computed headers (añade columna delete si editionMode)
const tableHeaders = computed(() => {
	if (props.editionMode && !props.headers[0]?.config) {
		return [...props.headers, { text: '', value: 'delete', sortable: false } as any]
	}
	return props.headers.filter((h) => h.value !== 'delete')
})

// Items con índice
const itemsWithIndex = computed(() => {
	const start = (currentPage.value - 1) * (props.itemsPerPage ?? 10)
	const end = start + (props.itemsPerPage ?? 10)
	return props.items.slice(start, end).map((item, idx) => ({ ...item, index: start + idx }))
})

// Manejo input
const handleInput = (value: any, type: string | undefined, key: string, index: number) => {
	props.items[index][key] = type === 'number' ? Number(value) : value
}

// Manejo cambio página
const handlePageChange = (event: any) => {
	currentPage.value = event.page + 1
}

// Clases para header/footer
const footerClass = computed(() => (props.showFooter ? '' : 'hide-footer'))
const headerClass = computed(() => (props.showHeaders ? '' : 'hide-header'))

// Paginación personalizada
const paginatorTemplate = computed(() => {
	return `
		PrevPageLink PageLinks NextPageLink
	`
})

// Altura para espacio extra entre tabla y paginación
const rowHeight = computed(() => {
	const densityHeights: Record<string, number> = {
		default: 52,
		comfortable: 44,
		compact: 36
	}
	const density = props.options?.density || 'default'
	return densityHeights[density] || densityHeights.default
})
const customSpaceBetweenPaginationHeight = computed(() => {
	const height = rowHeight.value * ((props.itemsPerPage ?? 10) - itemsWithIndex.value.length)
	return `${height}px`
})
</script>

<template>
	<DataTable
		v-if="showFooter"
		:value="itemsWithIndex"
		:tableStyle="{ minWidth: '50rem' }"
		:class="[footerClass, headerClass]"
		:paginator="false"
	>
		<!-- Slot Header (botón de añadir item) -->
		<template v-slot:header>
			<Button
				v-if="editionMode && !headers[0]?.config"
				class="create-tab-btn"
				icon="mdi mdi-plus"
				label="Add Item"
				style="width: 140px"
				text
				rounded
				@click="$emit('create-item')"
			/>
		</template>

		<!-- Columnas dinámicas -->
		<Column
			v-for="header in tableHeaders"
			:key="header.value"
			:field="header.value"
			:header="header.text || header.title"
		>
			<template #body="slotProps">
				<slot :name="header.value" :item="slotProps.data">
					<div v-if="!editionMode">
						<template v-if="header.type === 'boolean'">
							<input type="checkbox" :checked="slotProps.data[header.value]" disabled />
						</template>
						<template v-else>
							{{ slotProps.data[header.value] }}
						</template>
					</div>
					<div v-else>
						<template v-if="header.value === 'delete'">
							<Button
								icon="mdi mdi-delete"
								class="p-button-text p-button-sm"
								@click="$emit('delete-item', slotProps.data.index)"
							/>
						</template>
						<template v-else-if="header.type === 'boolean'">
							<input type="checkbox" v-model="slotProps.data[header.value]" />
						</template>
						<template v-else>
							<InputText
								v-model="slotProps.data[header.value]"
								:type="header.type || 'text'"
								:disabled="header.disabled"
								@input="(e: any) => handleInput((e?.target?.value ?? ''), header.type, header.value, slotProps.data.index)"
							/>
						</template>
					</div>
				</slot>
			</template>
		</Column>

		<!-- Slot Empty -->
		<template v-slot:empty>
			<div class="text-center py-4">{{ noDataMessage }}</div>
		</template>

		<!-- Slot Footer (paginación personalizada) -->
		<template v-slot:footer>
			<div>
				<div
					v-if="addSpaceBetweenPagination"
					:style="{ height: customSpaceBetweenPaginationHeight }"
				></div>

				<Paginator
					v-model:page="currentPageZeroBased"
					:rows="itemsPerPage"
					:totalRecords="items.length"
					:template="paginatorTemplate"
					:disabled="items.length === 0"
					@change="handlePageChange"
				/>
			</div>
		</template>
	</DataTable>

	<!-- Tabla virtual (sin footer) -->
	<DataTable
		v-else-if="!showFooter"
		:value="items"
		:class="[headerClass]"
		:tableStyle="{ minWidth: '50rem' }"
	>
		<Column
			v-for="header in headers"
			:key="header.value"
			:field="header.value"
			:header="header.text || header.title"
		>
			<template #body="slotProps">
				<slot :name="header.value" :item="slotProps.data">
					<div v-if="!editionMode">
						<template v-if="header.type === 'boolean'">
							<input type="checkbox" :checked="slotProps.data[header.value]" disabled />
						</template>
						<template v-else>
							{{ slotProps.data[header.value] }}
						</template>
					</div>
					<div v-else>
						<template v-if="header.value === 'delete'">
							<Button
								icon="mdi mdi-delete"
								class="p-button-text p-button-sm"
								@click="$emit('delete-item', slotProps.data.index)"
							/>
						</template>
						<template v-else-if="header.type === 'boolean'">
							<input type="checkbox" v-model="slotProps.data[header.value]" />
						</template>
						<template v-else>
							<InputText
								v-model="slotProps.data[header.value]"
								:type="header.type || 'text'"
								:disabled="header.disabled"
								@input="(e: any) => handleInput((e?.target?.value ?? ''), header.type, header.value, slotProps.data.index)"
							/>
						</template>
					</div>
				</slot>
			</template>
		</Column>
	</DataTable>
</template>

<style scoped>
.hide-footer .p-datatable-footer {
	display: none;
}
.hide-header .p-datatable-header {
	display: none;
}
</style>


