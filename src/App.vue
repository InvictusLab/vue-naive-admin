<script setup lang="ts">
const appStore = useAppStore()
const { layoutTheme } = storeToRefs(appStore)
useAutoDark()
</script>

<template>
  <n-config-provider :theme="layoutTheme">
    <AppProvider>
      <router-view />
    </AppProvider>
  </n-config-provider>
</template>

<style scoped></style>
