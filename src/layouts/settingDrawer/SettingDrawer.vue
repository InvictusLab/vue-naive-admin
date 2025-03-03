<script setup lang="ts">
import { SettingOutlined, CloseOutlined } from '@vicons/antd'
import CheckboxLayout from '@/layouts/settingDrawer/CheckboxLayout.vue'
import CheckboxLayoutContainer from '@/layouts/settingDrawer/CheckboxLayoutContainer.vue'

const props = withDefaults(
  defineProps<{
    floatTop?: number | string
    drawerWidth?: number | string
    layout?: 'mix' | 'side' | 'top'
  }>(),
  {
    floatTop: 240,
    drawerWidth: 300,
  },
)

defineEmits(['update:layout'])

const show = ref(false)

interface Layout {
  key: 'side' | 'top' | 'mix'
  value: string
}

const layouts = ref<Layout[]>([
  {
    key: 'side',
    value: '侧边布局',
  },
  {
    key: 'top',
    value: '顶部布局',
  },
  {
    key: 'mix',
    value: '混合布局',
  },
])

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
    <n-drawer-content>
      <CheckboxLayoutContainer title="导航模式">
        <n-space size="large">
          <template v-for="item in layouts" :key="item.key">
            <CheckboxLayout
              :layout="item.key"
              :title="item.value"
              :checked="item.key === layout"
              @click="() => $emit('update:layout', item.key)"
            />
          </template>
        </n-space>
      </CheckboxLayoutContainer>
    </n-drawer-content>
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
