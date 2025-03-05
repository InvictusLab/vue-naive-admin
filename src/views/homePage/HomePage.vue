<script setup lang="ts">
import type { LayoutTheme } from '@/config/layout-theme'

const appStore = useAppStore()
const onSwitch = (theme: LayoutTheme['layoutStyle']) => {
  if (theme === 'dark') {
    document.documentElement.className = 'dark'
  } else {
    document.documentElement.removeAttribute('class')
  }
  appStore.updateLayoutStyle(theme)
}
</script>

<template>
  <div>
    <n-space>
      <n-button @click="onSwitch('light')">浅色模式</n-button>
      <n-button @click="onSwitch('dark')">深色模式</n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
