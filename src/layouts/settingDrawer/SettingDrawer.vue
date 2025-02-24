<script setup lang="ts">
import { SettingOutlined, CloseOutlined } from '@vicons/antd'

const props = withDefaults(
  defineProps<{
    floatTop?: number | string
    drawerWidth?: number | string
  }>(),
  {
    floatTop: 240,
    drawerWidth: 300,
  },
)

const show = ref(false)

const handleClick = (value: boolean) => {
  show.value = value
}

const cssVars = computed(() => ({
  '--invictus-admin-float-top': `${props.floatTop}px`,
  '--invictus-admin-drawer-width': `${props.drawerWidth}px`,
}))
</script>

<template>
  <teleport to="body">
    <div
      :style="cssVars"
      class="fixed top-[var(--invictus-admin-float-top)] right-0"
    >
      <n-button
        type="primary"
        size="large"
        class="b-rd-tr-0! b-rd-br-0!"
        @click="handleClick(true)"
      >
        <template #icon>
          <n-icon size="24">
            <SettingOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </teleport>
  <n-drawer v-model:show="show" :width="drawerWidth">
    <n-drawer-content> drawer content </n-drawer-content>
    <div
      :style="cssVars"
      class="absolute top-[var(--invictus-admin-float-top)] right-[var(--invictus-admin-drawer-width)]"
    >
      <n-button
        type="primary"
        size="large"
        class="b-rd-tr-0! b-rd-br-0!"
        @click="handleClick(false)"
      >
        <template #icon>
          <n-icon size="24">
            <CloseOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </n-drawer>
</template>

<style scoped></style>
