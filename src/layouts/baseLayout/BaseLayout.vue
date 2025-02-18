<script setup lang="ts">
const appStore = useAppStore()
const { layout } = storeToRefs(appStore)

import MixLayout from '@/layouts/mixLayout/MixLayout.vue'
import SideLayout from '@/layouts/sideLayout/SideLayout.vue'
</script>

<template>
  <MixLayout
    v-if="layout.layout === 'mix'"
    v-model:collapsed="layout.collapsed"
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
  <SideLayout
    v-if="layout.layout === 'side'"
    v-model:collapsed="layout.collapsed"
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
  </SideLayout>
</template>

<style scoped></style>
