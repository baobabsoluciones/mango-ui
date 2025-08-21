
<template>
	<aside
		v-if="menu"
		class="p-app-drawer"
		@mouseenter="onEnter"
		@mouseleave="onLeave"
		:class="{ expanded }"
	>
		<div class="drawer-content">
			<!-- Logo -->
			<div class="logo">
				<slot name="logo">
					<div v-if="logo" class="logo-item">
						<Avatar v-if="logo.src" :image="logo.src" shape="circle" />
						<span v-if="expanded && logo.title" class="logo-title">{{ logo.title }}</span>
					</div>
				</slot>
			</div>

			<!-- User -->
			<div class="user">
				<slot name="user">
					<div v-if="user" class="user-item">
						<Avatar v-if="user.src" :image="user.src" shape="circle" />
						<div v-if="expanded" class="user-texts">
							<div class="user-name">{{ user.name }}</div>
							<div class="user-email">{{ user.email }}</div>
						</div>
					</div>
				</slot>
			</div>

			<Divider class="mt-4 mb-4" />

			<!-- Menu -->
			<nav class="pages-content">
				<slot name="menu">
					<PanelMenu :model="panelModel" />
				</slot>
			</nav>

			<!-- Actions -->
			<div class="actions">
				<slot name="actions">
					<PanelMenu :model="actionsModel" />
				</slot>
			</div>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
import PanelMenu from 'primevue/panelmenu'

interface LogoInfo {
	src?: string
	title?: string
}

interface UserInfo {
	src?: string
	name?: string
	email?: string
}

interface SubPageItem {
	to?: any
	title: string
	icon?: string
}

interface MenuItem {
	to?: any
	title: string
	icon?: string
	subPages?: SubPageItem[]
}

interface ActionItem {
	to?: any
	title: string
	icon?: string
}

const props = withDefaults(defineProps<{
	visible?: boolean
	width?: number
	logo?: LogoInfo
	items?: MenuItem[]
	actions?: ActionItem[]
	user?: UserInfo
	rail?: boolean
}>(), {
	visible: true,
	items: () => [],
	actions: () => [],
	rail: true
})

const menu = ref<boolean>(!!props.visible)
watch(() => props.visible, (val) => {
	if (typeof val === 'boolean') menu.value = val
})

const expanded = ref<boolean>(!props.rail)
watch(() => props.rail, (isRail) => {
	expanded.value = !isRail
})

const expandedWidth = computed(() => (props.width ? `${props.width}px` : '280px'))

type PanelMenuItem = {
	label?: string
	icon?: string
	to?: any
	url?: string
	items?: PanelMenuItem[]
}

const toPanelItems = (items?: MenuItem[]): PanelMenuItem[] => {
	if (!items) return []
	return items.map((it) => ({
		label: it.title,
		icon: it.icon,
		to: it.to,
		items: it.subPages?.map((sp) => ({ label: sp.title, icon: sp.icon, to: sp.to }))
	}))
}

const panelModel = computed<PanelMenuItem[]>(() => toPanelItems(props.items))
const actionsModel = computed<PanelMenuItem[]>(() => toPanelItems(props.actions as unknown as MenuItem[]))

const emit = defineEmits<{
	(e: 'update:rail', value: boolean): void
}>()

const onEnter = () => {
	expanded.value = true
	emit('update:rail', false)
}

const onLeave = () => {
	expanded.value = false
	emit('update:rail', true)
}

</script>