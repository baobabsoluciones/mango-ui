<template>
  <v-app>
    <v-main>
      <v-row class="d-flex justify-space-between mt-3"> </v-row>
      hola
      <v-container class="fill-height"> </v-container>
    </v-main>
    <MAppBarTab
      :key="tabsKey"
      :tabs="tabsData"
      :createTitle="'CREAR NUEVA PESTAÑA'"
      @close="removeTab"
      @create="createTab"
      @select="selectTab"
    >
      <template #actions>
        <div class="d-flex align-center" style="min-width: 200px !important">
          <div class="mr-2">
            Powered by
            <a href="https://baobabsoluciones.es/" target="_blank"
              >baobab soluciones</a
            >
          </div>
        </div>
      </template>
    </MAppBarTab>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MAppBarTab from './components/MAppBarTab/MAppBarTab.vue'

let tabsData = [
  {
    value: 'ce6be2fdf621149ca1d6254f4166136c9ef7d1b9',
    text: 'Empty excel',
    icon: 'mdi-checkbox-marked',
    loading: false,
    selected: false,
  },
  {
    value: '07223be9814daf091fff730125988f6f2c68d9ef',
    text: 'prueba.con.puntos',
    icon: 'mdi-checkbox-marked',
    loading: false,
    selected: false,
  },
]
let tabsKey = ref(0)

const removeTab = (index) => {}

const createTab = () => {}

const selectTab = (executionTab) => {
  executionTab.selected = !executionTab.selected
  tabsKey.value++
}
</script>
