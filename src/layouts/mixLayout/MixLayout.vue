<script setup lang="ts">
import { NavLogo, NavTitle, LayoutContent, LayoutSider } from '@/layouts/common'

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

const headerHeight = computed(() => `${props.headerHeight}px`)
const contentHeight = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <n-layout class="h-screen">
    <n-layout-header
      inverted
      class="invictus-mix-layout-header flex justify-between items-center px-4"
    >
      <div class="flex items-center">
        <NavLogo :src="logo" />
        <NavTitle :title="title" />
      </div>
      <slot name="headerRight">
        <div>右侧</div>
      </slot>
    </n-layout-header>
    <n-layout has-sider class="invictus-mix-layout-content">
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
.invictus-mix-layout-header {
  height: v-bind(headerHeight);
}

.invictus-mix-layout-content {
  height: v-bind(contentHeight);
}
</style>
