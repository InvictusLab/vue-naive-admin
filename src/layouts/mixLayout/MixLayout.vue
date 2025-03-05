<script setup lang="ts">
import {
  LayoutContent,
  LayoutHeader,
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
    collapsed?: boolean
  }>(),
  {
    headerHeight: 48,
    collapsed: false,
  },
)

defineEmits(['update:collapsed'])

const headerHeight = computed(() => `${props.headerHeight}px`)
const contentHeight = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <n-layout class="h-screen">
    <LayoutHeader
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
    </LayoutHeader>
    <n-layout has-sider class="invictus-mix-layout-content">
      <LayoutSider
        :width="siderWidth"
        :collapsed="collapsed"
        :collapsed-width="siderCollapsedWidth"
        :show-trigger="showSiderTrigger"
        @update:collapsed="$event => $emit('update:collapsed', $event)"
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
