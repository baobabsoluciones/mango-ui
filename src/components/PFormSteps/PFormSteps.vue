<template>
	<div class="form-steps">
		<div class="form-steps-row">
			<div
				class="steps-column"
				:style="{ width: stepsColumnWidth, minWidth: stepsColumnWidth, maxWidth: stepsColumnWidth }"
			>
				<div class="steps-card">
					<div class="steps-container">
						<div v-for="(step, index) in steps" :key="index" class="step-item">
							<div
								class="icon-container"
								:class="{
									'last-icon': index === steps.length - 1,
									'completed-step': localCurrentStep > index,
									'current-step': localCurrentStep === index,
									'future-step': localCurrentStep < index,
								}"
							>
								<i v-if="localCurrentStep > index" class="mdi mdi-check-circle" :style="{ color: 'var(--primary-variant)' }"></i>
								<i v-else-if="localCurrentStep === index" class="mdi mdi-record-circle" :style="{ color: 'var(--primary-variant)' }"></i>
								<i v-else class="mdi mdi-record-circle" :style="{ color: 'var(--disabled)' }"></i>
								<div v-if="index < steps.length - 1" class="vertical-line"></div>
							</div>
							<div>
								<div class="step-title">{{ step.title }}</div>
								<div class="step-subtitle">{{ step.subtitle }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="content-column"
				:style="{ width: `calc(100% - ${stepsColumnWidth})`, minWidth: `calc(100% - ${stepsColumnWidth})`, maxWidth: `calc(100% - ${stepsColumnWidth})` }"
			>
				<div class="content-card">
					<div class="content-wrapper">
						<slot :name="`step-${localCurrentStep}-title`">
							<div v-if="steps[localCurrentStep]?.titleContent" class="content-title">
								<span>{{ steps[localCurrentStep].titleContent }}</span>
							</div>
							<div
								class="content-subtitle"
								v-if="steps[localCurrentStep]?.subtitleContent"
								v-html="steps[localCurrentStep].subtitleContent"
							></div>
						</slot>
						<div class="content-slot">
							<slot :name="`step-${localCurrentStep}-content`"></slot>
						</div>
					</div>
				</div>
				<div class="nav-row">
					<div>
						<slot :name="`step-${localCurrentStep}-previous-button`">
							<Button
								v-if="localCurrentStep > 0"
								class="previous-button"
								:label="previousButtonText"
								icon="mdi mdi-arrow-left"
								iconPos="left"
								:disabled="disablePreviousButton"
								@click="localCurrentStep--"
							/>
						</slot>
					</div>
					<div>
						<slot :name="`step-${localCurrentStep}-continue-button`">
							<Button
								v-if="localCurrentStep < steps.length - 1"
								class="continue-button"
								:label="continueButtonText"
								icon="mdi mdi-arrow-right"
								iconPos="right"
								:disabled="disableNextButton"
								@click="localCurrentStep++"
							/>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Button from 'primevue/button'

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
const stepsColumnWidth = computed(() => props.stepsColumnWidth ?? '300px')
const previousButtonText = computed(() => props.previousButtonText ?? 'Previous')
const continueButtonText = computed(() => props.continueButtonText ?? 'Continue')
const disablePreviousButton = computed(() => props.disablePreviousButton ?? false)
const disableNextButton = computed(() => props.disableNextButton ?? false)
</script>

<style scoped>
.form-steps {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.form-steps-row {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}

.steps-column {
	flex: 0 0 auto;
}

.steps-card {
	border-radius: 20px;
	box-shadow: 0 2px 6px rgba(0,0,0,0.08);
	background: #fff;
	padding: 0.75rem 0.5rem;
}

.steps-container {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.step-item {
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
}

.icon-container {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 24px;
}

.icon-container i {
	font-size: 22px;
}

.vertical-line {
	position: absolute;
	top: 26px;
	left: 50%;
	transform: translateX(-50%);
	width: 2px;
	height: calc(100% - 26px);
	background-color: var(--disabled);
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

.content-column {
	flex: 1 1 auto;
}

.content-card {
	border-radius: 20px;
	box-shadow: 0 2px 6px rgba(0,0,0,0.08);
	background: #fff;
}

.content-wrapper {
	padding: 0.75rem 1rem;
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


