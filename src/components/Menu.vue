<template>
  <a-menu
    :style="{ width: '200px', height: '100%' }"
    :collapsed="collapsed"
    show-collapse-button
    @collapse="setCollapse"
  >
    <a-sub-menu key="0">
      <template #icon><icon-apps></icon-apps></template>
      <template #title>Navigation 1</template>
      <a-menu-item key="0_0">Menu 1</a-menu-item>
      <a-menu-item key="0_1">Menu 2</a-menu-item>
      <a-menu-item key="0_2">Menu 3</a-menu-item>
      <a-menu-item key="0_3">Menu 4</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="1">
      <template #icon><icon-apps></icon-apps></template>
      <template #title>Navigation 2</template>
      <a-menu-item key="1_0">Menu 1</a-menu-item>
      <a-menu-item key="1_1">Menu 2</a-menu-item>
      <a-menu-item key="1_2">Menu 3</a-menu-item>
      <a-menu-item key="1_3">Menu 4</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts" setup>
import { IconApps } from '@arco-design/web-vue/es/icon'
import { computed } from 'vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const collapsed = computed(() => appStore.menuCollapse)

const setCollapse = (val: boolean) => {
  appStore.updateSettings({ menuCollapse: val })
}
</script>
