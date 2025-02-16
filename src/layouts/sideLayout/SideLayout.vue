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
    inverted?: boolean
  }>(),
  {
    headerHeight: 48,
    inverted: false,
  },
)

const headerHeight = computed(() => `${props.headerHeight}px`)
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
        <NavLogo :src="logo" />
        <NavTitle :title="title" :size="20" />
      </div>
    </LayoutSider>
    <n-layout style="--n-color: var(--invictus-admin-layout-content-bg)">
      <n-layout-header
        class="invictus-mix-layout-header flex justify-between items-center px-4"
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
.invictus-mix-layout-header {
  height: v-bind(headerHeight);
}
</style>
