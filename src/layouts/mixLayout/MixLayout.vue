<script setup lang="ts">
const props = withDefaults(defineProps<{ headerHeight?: number }>(), {
  headerHeight: 48,
})

const headerHeight = computed(() => `${props.headerHeight}px`)
const contentHeight = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <n-layout class="h-screen">
    <n-layout-header
      inverted
      class="invictus-mix-layout-header flex items-center px-4"
      >颐和园路</n-layout-header
    >
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
