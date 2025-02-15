<script setup lang="ts">
const appStore = useAppStore()
const { layout } = storeToRefs(appStore)

import MixLayout from '@/layouts/mixLayout/MixLayout.vue'
</script>

<template>
  <MixLayout
    v-if="layout.layout === 'mix'"
    :logo="layout.logo"
    :title="layout.title"
    :show-sider-trigger="layout.showSiderTrigger"
    :sider-width="layout.siderWidth"
    :sider-collapsed-width="layout.siderCollapsedWidth"
  >
    <template #headerRight>
      <div>测试右侧插槽</div>
    </template>
    <router-view />
  </MixLayout>
</template>

<style scoped></style>
