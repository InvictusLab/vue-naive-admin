<script setup lang="ts">
import { CheckOutlined } from '@vicons/antd'
import type { VNodeChild } from 'vue'

const props = withDefaults(
  defineProps<{
    layout?: 'mix' | 'side' | 'top'
    inverted?: boolean
    checked?: boolean
    dark?: boolean
    title?: string | (() => VNodeChild)
  }>(),
  {
    layout: 'top',
    inverted: false,
    checked: false,
  },
)

defineEmits(['click'])

const headerClass = computed(() => {
  if (props.layout === 'mix' || props.layout === 'top' || props.dark) {
    return ['bg-[var(--inverted-color)]']
  }
  if (props.layout === 'side') {
    return ['bg-[var(--base-color)]']
  }
  return []
})

const siderClass = computed(() => {
  if (props.layout === 'mix') {
    return ['bg-[var(--base-color)]', 'h-75%', 'bottom-0']
  }
  if (props.layout === 'side') {
    return [
      'h-100%',
      `bg-[var(--${props.inverted || props.dark ? 'inverted' : 'base'}-color)]`,
    ]
  }
  return []
})
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-el
        tag="div"
        @click="$emit('click', $event)"
        class="cursor-pointer inline-block relative w-44px h-36px b-rd-4px overflow-hidden bg-[var(--invictus-admin-layout-content-bg)] shadow-[var(--invictus-admin-layout-box-shadow)]"
      >
        <div :class="headerClass" class="absolute top-0 h-25% w-100%"></div>
        <div :class="siderClass" class="absolute w-30%"></div>
        <div v-if="checked" class="absolute bottom--3px right-3px">
          <n-icon size="16">
            <CheckOutlined />
          </n-icon>
        </div>
      </n-el>
    </template>
    {{ typeof title === 'function' ? title() : title }}
  </n-tooltip>
</template>

<style scoped></style>
