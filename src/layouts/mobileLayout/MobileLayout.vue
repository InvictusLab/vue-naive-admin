<script setup lang="ts">
import { LayoutContent, LayoutRoot, NavLogo } from '@/layouts/common'
import { MenuFoldOutlined } from '@vicons/antd'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    inverted?: boolean
    visible?: boolean
  }>(),
  {
    headerHeight: 48,
    inverted: false,
    visible: false,
  },
)

const emit = defineEmits(['update:visible'])

const headerHeight = computed(() => `${props.headerHeight}px`)

const onShow = () => {
  emit('update:visible', true)
}
</script>

<template>
  <LayoutRoot class="h-screen">
    <n-layout-header
      :inverted="inverted"
      class="invictus-mix-layout-header flex justify-between items-center px-4"
    >
      <div class="flex items-center">
        <NavLogo :src="logo" />
        <n-icon @click="onShow" size="26" class="ml-12px">
          <MenuFoldOutlined @click="() => $emit('update:visible', !visible)" />
        </n-icon>
      </div>
      <slot name="headerRight">
        <div>右侧</div>
      </slot>
    </n-layout-header>
    <LayoutContent content-style="padding: 24px;">
      <slot></slot>
    </LayoutContent>
  </LayoutRoot>
  <n-drawer
    :show="visible"
    :width="240"
    placement="left"
    @update:show="value => $emit('update:visible', value)"
  >
    <n-drawer-content>
      <div>drawer content</div>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(headerHeight);
}
</style>
