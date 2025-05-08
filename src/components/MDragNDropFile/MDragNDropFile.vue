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
          :multiple="multiple"
          hidden
        />
      </v-btn>
      
      <!-- Single file display (for backward compatibility) -->
      <span
        class="selected-file"
        v-if="!multiple && singleFileSelected"
        :class="{ 'error-message': errors }"
      >
        <v-icon>mdi-file-upload</v-icon>{{ singleFileSelected.name }}
      </span>
      
      <!-- Multiple files display -->
      <div v-if="multiple && filesSelected.length > 0" class="selected-files-container">
        <div 
          v-for="(file, index) in filesSelected" 
          :key="index" 
          class="selected-file"
          :class="{ 'error-message': errors }"
        >
          <v-icon size="small">mdi-file-upload</v-icon>
          <span>{{ file.name }}</span>
          <v-icon 
            size="small" 
            class="remove-file" 
            @click="removeFile(index)"
          >
            mdi-close
          </v-icon>
        </div>
      </div>
      
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
/**
 * MDragNDropFile component
 * 
 * A drag and drop file uploader component that supports both single and multiple file uploads.
 * 
 * Features:
 * - Upload single or multiple files via drag & drop or file selection dialog
 * - File type validation based on allowed formats
 * - Visual feedback for file selection, validation errors
 * - Individual file removal (in multiple mode)
 * - Compatible with Vue 3 and Vuetify
 * - Backward compatible with single file mode
 * 
 * Usage (multiple files):
 * <MDragNDropFile
 *   multiple
 *   downloadIcon="mdi-upload"
 *   description="Upload your files"
 *   :uploadedFiles="selectedFiles"
 *   :formatsAllowed="['json', 'xlsx']"
 *   :errors="instanceErrors"
 *   downloadButtonTitle="Select Files"
 *   invalidFileText="Invalid file format"
 *   @files-selected="onFilesSelected"
 * />
 * 
 * Usage (single file - backward compatible):
 * <MDragNDropFile
 *   downloadIcon="mdi-upload"
 *   description="Upload a file"
 *   :uploadedFile="selectedFile"
 *   :formatsAllowed="['json']"
 *   :errors="instanceErrors"
 *   downloadButtonTitle="Select File"
 *   invalidFileText="Invalid file format"
 *   @file-selected="onFileSelected"
 * />
 */
import { defineComponent, ref, computed, watch } from 'vue'

export default defineComponent({
  name: 'MDragNDropFile',
  props: {
    // New props for multiple files
    uploadedFiles: {
      type: Array,
      default: () => [],
    },
    // Legacy prop for single file (backward compatibility)
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
    // Determines if multiple file upload is enabled
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const fileInput = ref(null)
    const filesSelected = ref(props.uploadedFiles || [])
    const singleFileSelected = ref(props.uploadedFile)
    const invalidFile = ref(false)
    const draggingOver = ref(false)

    const formatsString = computed(() =>
      props.formatsAllowed.join(', ').toUpperCase(),
    )
    const mimeTypes = {
      json: 'application/json',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      csv: 'text/csv',
      pdf: 'application/pdf',
      txt: 'text/plain',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      doc: 'application/msword',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      ppt: 'application/vnd.ms-powerpoint',
      xml: 'application/xml',
      zip: 'application/zip',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      gif: 'image/gif',
      svg: 'image/svg+xml',
      mp4: 'video/mp4',
      mp3: 'audio/mpeg',
      // Add more mappings as needed
    }

    const onUploadClick = () => {
      fileInput.value.click()
    }

    const validateFiles = (files) => {
      const validFiles = []
      let hasInvalidFile = false

      Array.from(files).forEach(file => {
        const fileType = file.type
        const fileName = file.name.toLowerCase()
        
        // Check if file type matches any of the allowed MIME types
        let isAllowed = props.formatsAllowed.some(
          (format) => mimeTypes[format] === fileType
        )
        
        // Special case for files which might have various MIME types
        if (!isAllowed) {
          const fileExtension = fileName.split('.').pop()
          
          // CSV special case
          if (props.formatsAllowed.includes('csv') && 
             (fileType === 'text/csv' || 
              fileType === 'application/csv' || 
              fileType === 'application/vnd.ms-excel' || 
              fileExtension === 'csv')) {
            isAllowed = true
          }
          
          // Excel special case
          else if ((props.formatsAllowed.includes('xlsx') || props.formatsAllowed.includes('xls')) && 
                  (fileType === 'application/vnd.ms-excel' || 
                   fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                   fileExtension === 'xlsx' || 
                   fileExtension === 'xls')) {
            isAllowed = true
          }
          
          // PDF special case
          else if (props.formatsAllowed.includes('pdf') && 
                  (fileType === 'application/pdf' || 
                   fileExtension === 'pdf')) {
            isAllowed = true
          }
          
          // Image special case
          else if ((props.formatsAllowed.includes('jpg') || 
                  props.formatsAllowed.includes('jpeg') || 
                  props.formatsAllowed.includes('png') || 
                  props.formatsAllowed.includes('gif') || 
                  props.formatsAllowed.includes('svg')) && 
                  (fileType.startsWith('image/') || 
                   ['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(fileExtension))) {
            isAllowed = true
          }
          
          // Text files special case
          else if (props.formatsAllowed.includes('txt') && 
                  (fileType === 'text/plain' || 
                   fileExtension === 'txt')) {
            isAllowed = true
          }
        }

        if (isAllowed) {
          validFiles.push(file)
        } else {
          hasInvalidFile = true
        }
      })

      return { validFiles, hasInvalidFile }
    }

    const onFileChange = (event) => {
      if (props.multiple) {
        // Multiple files mode
        const { validFiles, hasInvalidFile } = validateFiles(event.target.files)
        
        if (validFiles.length > 0) {
          filesSelected.value = [...filesSelected.value, ...validFiles]
          emit('files-selected', filesSelected.value)
        }
        
        invalidFile.value = hasInvalidFile
      } else {
        // Single file mode (backward compatibility)
        singleFileSelected.value = null
        const file = event.target.files[0]
        if (!file) return

        const fileType = file.type
        const fileName = file.name.toLowerCase()
        
        // Check if file type matches any of the allowed MIME types
        let isAllowed = props.formatsAllowed.some(
          (format) => mimeTypes[format] === fileType
        )
        
        // Special case for files which might have various MIME types
        if (!isAllowed) {
          const fileExtension = fileName.split('.').pop()
          
          // CSV special case
          if (props.formatsAllowed.includes('csv') && 
             (fileType === 'text/csv' || 
              fileType === 'application/csv' || 
              fileType === 'application/vnd.ms-excel' || 
              fileExtension === 'csv')) {
            isAllowed = true
          }
          
          // Excel special case
          else if ((props.formatsAllowed.includes('xlsx') || props.formatsAllowed.includes('xls')) && 
                  (fileType === 'application/vnd.ms-excel' || 
                   fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                   fileExtension === 'xlsx' || 
                   fileExtension === 'xls')) {
            isAllowed = true
          }
          
          // PDF special case
          else if (props.formatsAllowed.includes('pdf') && 
                  (fileType === 'application/pdf' || 
                   fileExtension === 'pdf')) {
            isAllowed = true
          }
          
          // Image special case
          else if ((props.formatsAllowed.includes('jpg') || 
                  props.formatsAllowed.includes('jpeg') || 
                  props.formatsAllowed.includes('png') || 
                  props.formatsAllowed.includes('gif') || 
                  props.formatsAllowed.includes('svg')) && 
                  (fileType.startsWith('image/') || 
                   ['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(fileExtension))) {
            isAllowed = true
          }
          
          // Text files special case
          else if (props.formatsAllowed.includes('txt') && 
                  (fileType === 'text/plain' || 
                   fileExtension === 'txt')) {
            isAllowed = true
          }
        }

        if (isAllowed) {
          singleFileSelected.value = file
          invalidFile.value = false
          emit('file-selected', file)
        } else {
          invalidFile.value = true
        }
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
      draggingOver.value = false
      
      if (props.multiple) {
        // Multiple files mode
        const { validFiles, hasInvalidFile } = validateFiles(event.dataTransfer.files)
        
        if (validFiles.length > 0) {
          filesSelected.value = [...filesSelected.value, ...validFiles]
          emit('files-selected', filesSelected.value)
        }
        
        invalidFile.value = hasInvalidFile
      } else {
        // Single file mode (backward compatibility)
        singleFileSelected.value = null
        const file = event.dataTransfer.files[0]
        if (!file) return

        const fileType = file.type
        const fileName = file.name.toLowerCase()
        
        // Check if file type matches any of the allowed MIME types
        let isAllowed = props.formatsAllowed.some(
          (format) => mimeTypes[format] === fileType
        )
        
        // Special case for files which might have various MIME types
        if (!isAllowed) {
          const fileExtension = fileName.split('.').pop()
          
          // CSV special case
          if (props.formatsAllowed.includes('csv') && 
             (fileType === 'text/csv' || 
              fileType === 'application/csv' || 
              fileType === 'application/vnd.ms-excel' || 
              fileExtension === 'csv')) {
            isAllowed = true
          }
          
          // Excel special case
          else if ((props.formatsAllowed.includes('xlsx') || props.formatsAllowed.includes('xls')) && 
                  (fileType === 'application/vnd.ms-excel' || 
                   fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                   fileExtension === 'xlsx' || 
                   fileExtension === 'xls')) {
            isAllowed = true
          }
          
          // PDF special case
          else if (props.formatsAllowed.includes('pdf') && 
                  (fileType === 'application/pdf' || 
                   fileExtension === 'pdf')) {
            isAllowed = true
          }
          
          // Image special case
          else if ((props.formatsAllowed.includes('jpg') || 
                  props.formatsAllowed.includes('jpeg') || 
                  props.formatsAllowed.includes('png') || 
                  props.formatsAllowed.includes('gif') || 
                  props.formatsAllowed.includes('svg')) && 
                  (fileType.startsWith('image/') || 
                   ['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(fileExtension))) {
            isAllowed = true
          }
          
          // Text files special case
          else if (props.formatsAllowed.includes('txt') && 
                  (fileType === 'text/plain' || 
                   fileExtension === 'txt')) {
            isAllowed = true
          }
        }

        if (isAllowed) {
          singleFileSelected.value = file
          invalidFile.value = false
          emit('file-selected', file)
        } else {
          invalidFile.value = true
        }
      }
    }

    const removeFile = (index) => {
      if (props.multiple) {
        const updatedFiles = [...filesSelected.value]
        updatedFiles.splice(index, 1)
        filesSelected.value = updatedFiles
        emit('files-selected', filesSelected.value)
      }
    }

    // Watch for changes in props
    watch(
      () => props.uploadedFiles,
      (newFiles) => {
        if (props.multiple) {
          filesSelected.value = newFiles || []
        }
      }
    )

    watch(
      () => props.uploadedFile,
      (newFile) => {
        if (!props.multiple) {
          singleFileSelected.value = newFile
        }
      }
    )

    return {
      fileInput,
      formatsString,
      filesSelected,
      singleFileSelected,
      invalidFile,
      draggingOver,
      onUploadClick,
      onFileChange,
      onDrop,
      onDragOver,
      onDragLeave,
      removeFile,
    }
  },
})
</script>

<style src="./MDragNDropFile.css" scoped></style>

