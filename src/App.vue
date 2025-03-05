<script setup lang="ts">
const appStore = useAppStore()
const { layoutTheme, overridesTheme } = storeToRefs(appStore)
useAutoDark()
</script>

<template>
  <n-config-provider :theme="layoutTheme" :theme-overrides="overridesTheme">
    <n-global-style></n-global-style>
    <AppProvider>
      <router-view />
    </AppProvider>
  </n-config-provider>
</template>

<style scoped></style>
