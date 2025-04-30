<template>
  <div class="example-container">
    <h2>Multiple File Upload Example</h2>
    
    <MDragNDropFile
      downloadIcon="mdi-upload"
      description="Upload your files"
      :uploadedFiles="selectedFiles"
      :formatsAllowed="['json', 'xlsx']"
      :errors="uploadErrors"
      downloadButtonTitle="Select Files"
      invalidFileText="Invalid file format. Only JSON and XLSX files are allowed."
      @files-selected="onFilesSelected"
    />

    <div class="mt-6">
      <h3>Selected Files Summary</h3>
      <v-divider class="mb-3"></v-divider>
      
      <div v-if="selectedFiles.length === 0">
        No files selected yet
      </div>
      
      <v-table v-else>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(file, index) in selectedFiles" :key="index">
            <td>{{ file.name }}</td>
            <td>{{ formatFileSize(file.size) }}</td>
            <td>{{ file.type }}</td>
          </tr>
        </tbody>
      </v-table>

      <div class="actions mt-4">
        <v-btn
          color="primary"
          :disabled="selectedFiles.length === 0"
          @click="uploadFiles"
        >
          Upload All Files
        </v-btn>
        
        <v-btn
          variant="outlined"
          class="ml-4"
          :disabled="selectedFiles.length === 0"
          @click="clearFiles"
        >
          Clear All
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import MDragNDropFile from '../../src/components/MDragNDropFile/MDragNDropFile.vue'

export default {
  name: 'MultipleFileUploadExample',
  components: {
    MDragNDropFile
  },
  setup() {
    const selectedFiles = ref([])
    const uploadErrors = ref(null)
    
    const onFilesSelected = (files) => {
      selectedFiles.value = files
      uploadErrors.value = null
    }
    
    const formatFileSize = (bytes) => {
      if (bytes === 0) return '0 Bytes'
      
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }
    
    const uploadFiles = () => {
      // Simulate an API call to upload files
      console.log('Uploading files:', selectedFiles.value)
      
      // In a real application, you would use FormData to upload files:
      // const formData = new FormData()
      // selectedFiles.value.forEach(file => {
      //   formData.append('files', file)
      // })
      // 
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // })
      
      // Simulate successful upload
      setTimeout(() => {
        alert(`Successfully uploaded ${selectedFiles.value.length} files`)
      }, 1000)
    }
    
    const clearFiles = () => {
      selectedFiles.value = []
    }
    
    return {
      selectedFiles,
      uploadErrors,
      onFilesSelected,
      formatFileSize,
      uploadFiles,
      clearFiles
    }
  }
}
</script>

<style scoped>
.example-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.actions {
  display: flex;
  justify-content: flex-start;
}
</style> 