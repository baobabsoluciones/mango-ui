<template>
  <div
    class="dnd-container"
    :class="{ 'dragging-over': draggingOver }"
    @dragover.prevent="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
  >
    <div class="dnd-content">
      <v-icon class="dnd-icon" color="grey">{{ downloadIcon }}</v-icon>
      <h4
        class="dnd-description"
        :style="{ color: 'var(--title)' }"
        style="margin-top: -10px"
      >
        {{ description }}
      </h4>
      <p
        class="dnd-formats"
        :style="{ color: 'var(--subtitle)' }"
        style="margin-top: -15px"
      >
        {{ formatsString }}
      </p>
      <v-btn
        variant="outlined"
        color="primary"
        class="mt-5"
        @click="onUploadClick"
      >
        <v-icon left>mdi-paperclip</v-icon>
        {{ downloadButtonTitle }}
        <input
          type="file"
          ref="fileInput"
          @change="onFileChange"
          accept="formatsAllowed.join(',')"
          hidden
        />
      </v-btn>
      <span
        class="selected-file"
        v-if="fileSelected"
        :class="{ 'error-message': errors }"
      >
        <v-icon>mdi-file-upload</v-icon>{{ fileSelected.name }}</span
      >
      <div class="error-container">
        <slot name="error-message">
          <span
            class="error-message"
            v-if="invalidFile || errors"
            v-html="invalidFile ? invalidFileText : errors"
          >
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue'

export default defineComponent({
  name: 'MDragNDropFile',
  props: {
    uploadedFile: {
      type: File,
      default: null,
    },
    downloadIcon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    formatsAllowed: {
      type: Array,
      required: true,
    },
    downloadButtonTitle: {
      type: String,
      required: true,
    },
    invalidFileText: {
      type: String,
      default: 'Invalid file. Please try again',
    },
    errors: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const fileInput = ref(null)
    const fileSelected = ref(props.uploadedFile)
    const invalidFile = ref(false)
    const draggingOver = ref(false)

    const formatsString = computed(() =>
      props.formatsAllowed.join(', ').toUpperCase(),
    )
    const mimeTypes = {
      json: 'application/json',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      // Add more mappings as needed
    }

    const onUploadClick = () => {
      fileInput.value.click()
    }

    const onFileChange = (event) => {
      fileSelected.value = null
      const file = event.target.files[0]
      const fileType = file.type
      const isAllowed = props.formatsAllowed.some(
        (format) => mimeTypes[format] === fileType,
      )

      if (isAllowed) {
        fileSelected.value = file
        invalidFile.value = false
        emit('file-selected', file)
      } else {
        invalidFile.value = true
      }
    }

    const onDragOver = () => {
      draggingOver.value = true
    }

    const onDragLeave = () => {
      draggingOver.value = false
    }

    const onDrop = (event) => {
      event.preventDefault()
      fileSelected.value = null
      draggingOver.value = false
      const file = event.dataTransfer.files[0]
      const fileType = file.type
      const isAllowed = props.formatsAllowed.some(
        (format) => mimeTypes[format] === fileType,
      )

      if (isAllowed) {
        fileSelected.value = file
        invalidFile.value = false
        emit('file-selected', file)
      } else {
        invalidFile.value = true
      }
    }

    watch(
      () => props.uploadedFile,
      (newFile) => {
        fileSelected.value = newFile
      },
    )

    return {
      fileInput,
      formatsString,
      fileSelected,
      invalidFile,
      draggingOver,
      onUploadClick,
      onFileChange,
      onDrop,
      onDragOver,
      onDragLeave,
    }
  },
})
</script>

<style src="./MDragNDropFile.css" scoped></style>

