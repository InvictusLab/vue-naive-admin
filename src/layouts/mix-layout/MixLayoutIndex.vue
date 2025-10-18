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
  }>(),
  {
    headerHeight: 48,
  },
)

const headerHeightVar = computed(() => `${props.headerHeight}px`)
const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <n-layout class="h-screen">
    <n-layout-header
      inverted
      class="invictus-admin-mix-layout-header flex justify-between items-center px-4"
    >
      <div class="flex items-center">
        <LayoutLogo :src="logo"></LayoutLogo>
        <LayoutTitle :title="title"></LayoutTitle>
      </div>
      <slot name="headerRight">
        <div>Right</div>
      </slot>
    </n-layout-header>
    <n-layout has-sider class="invictus-admin-mix-layout-content">
      <LayoutSider
        :width="siderWidth"
        :collapsed-width="siderCollapsedWidth"
        :show-trigger="showSiderTrigger"
        content-style="padding: 24px;"
      >
        海淀桥
      </LayoutSider>
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

.invictus-admin-mix-layout-content {
  height: v-bind(contentHeightVar);
}
</style>
