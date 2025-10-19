<script setup lang="ts">
import { LayoutLogo, LayoutTitle, LayoutSider, LayoutContent } from '@/layouts/common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    siderWidth?: number
    siderCollapsedWidth?: number
    showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
    inverted?: boolean
  }>(),
  {
    headerHeight: 48,
    inverted: false,
  },
)

const headerHeightVar = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <n-layout has-sider class="h-screen">
    <LayoutSider
      :inverted="inverted"
      :width="siderWidth"
      :collapsed-width="siderCollapsedWidth"
      :show-trigger="showSiderTrigger"
      content-style="padding: 24px;"
    >
      <div class="flex items-center">
        <LayoutLogo :src="logo"></LayoutLogo>
        <LayoutTitle :title="title" :size="20"></LayoutTitle>
      </div>
    </LayoutSider>
    <n-layout style="--n-color: var(--invivtus-admin-layout-content-bg)">
      <n-layout-header
        class="invictus-admin-mix-layout-header flex justify-between items-center px-4"
      >
        颐和园路
      </n-layout-header>
      <LayoutContent content-style="padding: 24px;">
        <slot></slot>
      </LayoutContent>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.invictus-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
