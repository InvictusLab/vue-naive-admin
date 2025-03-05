<script setup lang="ts">
import { CloseOutlined, SettingOutlined } from '@vicons/antd'
import CheckboxLayout from '@/layouts/settingDrawer/CheckboxLayout.vue'
import CheckboxTheme from '@/layouts/settingDrawer/CheckboxTheme.vue'
import CheckboxLayoutContainer from '@/layouts/settingDrawer/CheckboxLayoutContainer.vue'
import type { LayoutType } from '@/config/layout-theme'
import type { ThemeType } from '@/config/theme'

const props = withDefaults(
  defineProps<{
    floatTop?: number | string
    drawerWidth?: number | string
    layout?: 'mix' | 'side' | 'top'
    layoutStyle?: 'inverted' | 'light' | 'dark'
    layoutList?: LayoutType[]
    layoutStyleList?: LayoutType[]
    themeList?: ThemeType[]
    theme?: string
  }>(),
  {
    floatTop: 240,
    drawerWidth: 300,
  },
)

const emit = defineEmits([
  'update:layout',
  'update:layoutStyle',
  'update:theme',
])

const show = ref(false)

const handleClick = (value: boolean) => {
  show.value = value
}

const cssVars = computed(() => ({
  '--invictus-admin-float-top': `${props.floatTop}px`,
  '--invictus-admin-drawer-width': `${props.drawerWidth}px`,
}))

const onThemeChange = (value: string) => {
  emit('update:theme', value)
}
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
      <CheckboxLayoutContainer title="布局风格配置" v-if="layoutStyleList">
        <n-space size="large">
          <template v-for="item in layoutStyleList" :key="item.key">
            <CheckboxLayout
              :layout="item.key"
              :title="item.title"
              :inverted="item.inverted"
              :dark="item.dark"
              :checked="item.id === layoutStyle"
              @click="() => $emit('update:layoutStyle', item.id)"
            />
          </template>
        </n-space>
      </CheckboxLayoutContainer>
      <CheckboxLayoutContainer title="主题色配置" v-if="themeList">
        <n-space>
          <CheckboxTheme
            v-for="item in themeList"
            :key="item.key"
            :color="item.color"
            :checked="item.key === theme"
            @click="onThemeChange(item.key)"
          ></CheckboxTheme>
        </n-space>
      </CheckboxLayoutContainer>
      <n-divider></n-divider>
      <CheckboxLayoutContainer title="导航模式" v-if="layoutList">
        <n-space size="large">
          <template v-for="item in layoutList" :key="item.key">
            <CheckboxLayout
              :layout="item.key"
              :title="item.title"
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
