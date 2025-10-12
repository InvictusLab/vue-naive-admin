<script setup lang="ts">
import AppProvider from '@/components/app-provider/AppProvider.vue'
</script>

<template>
  <main>
    <n-config-provider>
      <AppProvider>
        <router-view />
      </AppProvider>
    </n-config-provider>
  </main>
</template>

<style scoped></style>
