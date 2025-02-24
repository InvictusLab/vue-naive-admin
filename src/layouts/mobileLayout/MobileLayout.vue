<script setup lang="ts">
import { LayoutContent, LayoutRoot, NavLogo, NavTitle } from '@/layouts/common'
import { MenuFoldOutlined } from '@vicons/antd'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    headerInverted?: boolean
    drawerInverted?: boolean
    visible?: boolean
    logoVisible?: boolean
  }>(),
  {
    headerHeight: 48,
    headerInverted: false,
    drawerInverted: true,
    visible: false,
    logoVisible: true,
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
      :inverted="headerInverted"
      class="invictus-mix-layout-header flex justify-between items-center px-4"
    >
      <div v-if="logoVisible" class="flex items-center">
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
    <n-drawer-content body-content-style="padding: 0;">
      <n-layout class="h-100%">
        <n-layout-header class="h-100%" :inverted="drawerInverted">
          <div class="flex items-center justify-center py-12px">
            <NavLogo :src="logo" :size="26" />
            <NavTitle :title="title" :size="22" />
          </div>
          drawer content
        </n-layout-header>
      </n-layout>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(headerHeight);
}
</style>
