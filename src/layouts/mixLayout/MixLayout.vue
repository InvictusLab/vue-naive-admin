<script setup lang="ts">
import navLogo from '@/layouts/common/NavLogo.vue'
import navTitle from '@/layouts/common/NavTitle.vue'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
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
        <navLogo :src="logo" />
        <navTitle :title="title" />
      </div>
      <slot name="headerRight">
        <div>右侧</div>
      </slot>
    </n-layout-header>
    <n-layout has-sider class="invictus-mix-layout-content">
      <n-layout-sider content-style="padding: 24px;"> 海淀桥 </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <slot></slot>
      </n-layout-content>
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
