<script setup lang="ts">
const appStore = useAppStore()
const { layout } = storeToRefs(appStore)

import MixLayout from '@/layouts/mixLayout/MixLayout.vue'
</script>

<template>
  <MixLayout v-if="layout.layout === 'mix'">
    <router-view />
  </MixLayout>
</template>

<style scoped></style>
