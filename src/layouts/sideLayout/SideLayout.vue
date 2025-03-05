<script setup lang="ts">
import {
  LayoutContent,
  LayoutHeader,
  LayoutRoot,
  LayoutSider,
  NavLogo,
  NavTitle,
} from '@/layouts/common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    siderWidth?: number
    siderCollapsedWidth?: number
    showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
    inverted?: boolean
    collapsed?: boolean
  }>(),
  {
    headerHeight: 48,
    inverted: false,
    collapsed: false,
  },
)

defineEmits(['update:collapsed'])

const headerHeight = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <LayoutRoot has-sider class="h-screen">
    <LayoutSider
      :inverted="inverted"
      :collapsed="collapsed"
      :width="siderWidth"
      :collapsed-width="siderCollapsedWidth"
      :show-trigger="showSiderTrigger"
      @update:collapsed="$event => $emit('update:collapsed', $event)"
    >
      <div class="flex items-center justify-center mt-24px">
        <NavLogo :src="logo" :size="30" />
        <NavTitle v-if="!collapsed" :title="title" :size="22" />
      </div>
    </LayoutSider>
    <n-layout style="--n-color: var(--invictus-admin-layout-content-bg)">
      <LayoutHeader
        class="invictus-mix-layout-header flex justify-between items-center px-4"
      >
        <slot name="headerLeft">
          <div></div>
        </slot>
        <slot name="headerRight">
          <div></div>
        </slot>
      </LayoutHeader>
      <LayoutContent content-style="padding: 24px;">
        <slot></slot>
      </LayoutContent>
    </n-layout>
  </LayoutRoot>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(headerHeight);
}
</style>
