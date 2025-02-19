<script setup lang="ts">
import { NavLogo, NavTitle, LayoutContent, LayoutRoot } from '@/layouts/common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    inverted?: boolean
  }>(),
  {
    headerHeight: 48,
    inverted: false,
  },
)

defineEmits(['update:collapsed'])

const headerHeight = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <LayoutRoot class="h-screen">
    <n-layout-header
      :inverted="inverted"
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
    <LayoutContent content-style="padding: 24px;">
      <slot></slot>
    </LayoutContent>
  </LayoutRoot>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(headerHeight);
}
</style>
