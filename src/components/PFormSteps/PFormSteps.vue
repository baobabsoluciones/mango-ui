<template>
	<Stepper v-model:value="activeStepOneBased" linear>
		<template v-for="(step, index) in steps" :key="index">
			<StepItem :value="index + 1">
				<Step>
					<div class="step-header">
						<span class="step-icon">
							<i :class="headerIcon(index)" :style="{ color: headerIconColor(index) }" />
						</span>
						<div class="step-header-texts">
							<div class="step-title">{{ step.title }}</div>
							<div class="step-subtitle">{{ step.subtitle }}</div>
						</div>
					</div>
				</Step>
				<StepPanel v-slot="{ activateCallback }">
					<slot :name="`step-${index}-title`">
						<div v-if="steps[index]?.titleContent" class="content-title">
							<span>{{ steps[index].titleContent }}</span>
						</div>
						<div
							class="content-subtitle"
							v-if="steps[index]?.subtitleContent"
							v-html="steps[index].subtitleContent"
						></div>
					</slot>
					<div class="content-slot">
						<slot :name="`step-${index}-content`"></slot>
					</div>
					<div class="nav-row">
						<div>
							<slot :name="`step-${index}-previous-button`">
								<Button
									v-if="index > 0"
									class="previous-button"
									:label="previousButtonText"
									icon="mdi mdi-arrow-left"
									iconPos="left"
									:disabled="disablePreviousButton"
									@click="activateCallback(index)"
								/>
							</slot>
						</div>
						<div>
							<slot :name="`step-${index}-continue-button`">
								<Button
									v-if="index < steps.length - 1"
									class="continue-button"
									:label="continueButtonText"
									icon="mdi mdi-arrow-right"
									iconPos="right"
									:disabled="disableNextButton"
									@click="activateCallback(index + 2)"
								/>
							</slot>
						</div>
					</div>
				</StepPanel>
			</StepItem>
		</template>
	</Stepper>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Button from 'primevue/button'
import Stepper from 'primevue/stepper'
import StepItem from 'primevue/stepitem'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'

interface StepItem {
	title?: string
	subtitle?: string
	titleContent?: string
	subtitleContent?: string
}

const props = defineProps<{
	steps: StepItem[]
	previousButtonText?: string
	continueButtonText?: string
	disablePreviousButton?: boolean
	disableNextButton?: boolean
	currentStep?: number
	stepsColumnWidth?: string
}>()

const emit = defineEmits<{
	(e: 'update:currentStep', value: number): void
}>()

const localCurrentStep = ref<number>(props.currentStep ?? 0)

watch(
	() => props.currentStep,
	(newVal) => {
		if (typeof newVal === 'number') {
			localCurrentStep.value = newVal
		}
	}
)

watch(
	() => localCurrentStep.value,
	(val) => emit('update:currentStep', val)
)

watch(
	() => props.steps,
	(newSteps) => {
		if (!Array.isArray(newSteps)) return
		if (newSteps.length === 0) {
			localCurrentStep.value = 0
			return
		}
		if (localCurrentStep.value > newSteps.length - 1) {
			localCurrentStep.value = newSteps.length - 1
		}
	},
	{ deep: true }
)

const steps = computed(() => props.steps ?? [])
const previousButtonText = computed(() => props.previousButtonText ?? 'Previous')
const continueButtonText = computed(() => props.continueButtonText ?? 'Continue')
const disablePreviousButton = computed(() => props.disablePreviousButton ?? false)
const disableNextButton = computed(() => props.disableNextButton ?? false)

// Sincroniza currentStep (0-based) con Stepper (1-based)
const activeStepOneBased = computed<number>({
	get() {
		return (localCurrentStep.value ?? 0) + 1
	},
	set(newVal: number) {
		const maxVal = steps.value.length > 0 ? steps.value.length : 1
		const normalized = Math.max(1, Math.min(newVal, maxVal))
		localCurrentStep.value = normalized - 1
	}
})

// Iconos de cabecera
const headerIcon = (index: number) => (localCurrentStep.value > index ? 'mdi mdi-check-circle' : 'mdi mdi-record-circle')
const headerIconColor = (index: number) => (localCurrentStep.value >= index ? 'var(--primary-variant)' : 'var(--disabled)')
</script>

<style scoped>
:deep(.p-steps-item) {
	cursor: default !important;
	pointer-events: none;
}

:deep(.p-steps-title) {
	cursor: default !important;
	pointer-events: none;
}

.step-header {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}

.step-header-texts {
	display: flex;
	flex-direction: column;
}

.step-title {
	font-weight: 600;
	color: var(--title);
}

.step-subtitle {
	font-size: 0.85rem;
	color: var(--subtitle);
	margin-top: -2px;
}

.content-title {
	font-size: 1rem;
	padding: 0.25rem 0.75rem;
}

.content-subtitle {
	margin: 0.25rem 0.75rem 0;
	word-wrap: break-word;
	font-size: 0.85rem;
	color: var(--subtitle);
	margin-top: -8px;
}

.content-slot {
	margin: 0.25rem 0.75rem 0.5rem;
}

.nav-row {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-top: 0.75rem;
}

.previous-button :deep(.p-button-icon-left) {
	margin-right: 0.5rem;
}

.continue-button :deep(.p-button-icon-right) {
	margin-left: 0.5rem;
}
</style>


