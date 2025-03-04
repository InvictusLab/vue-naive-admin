<script setup lang="ts">
import { useQueryBreakpoints } from '@/composables/query-breakpoints'

import MixLayout from '@/layouts/mixLayout/MixLayout.vue'
import SideLayout from '@/layouts/sideLayout/SideLayout.vue'
import TopLayout from '@/layouts/topLayout/TopLayout.vue'
import MobileLayout from '@/layouts/mobileLayout/MobileLayout.vue'
import SettingDrawer from '@/layouts/settingDrawer/SettingDrawer.vue'

const appStore = useAppStore()
const { layout, visible, layoutList, layoutStyleList } = storeToRefs(appStore)
const { isMobile, isDesktop, isPad } = useQueryBreakpoints()

watchEffect(() => {
  if (isDesktop.value) appStore.toggleCollapsed(false)
  else if (isPad.value) appStore.toggleCollapsed(true)
  if (isMobile.value) appStore.toggleCollapsed(false)
})
</script>

<template>
  <MobileLayout
    v-if="isMobile"
    :logo="layout.logo"
    :title="layout.title"
    v-model:visible="visible"
  >
    <template #headerRight>
      <div>测试右侧插槽</div>
    </template>
  </MobileLayout>
  <template v-else>
    <MixLayout
      v-if="layout.layout === 'mix'"
      v-model:collapsed="layout.collapsed"
      :logo="layout.logo"
      :title="layout.title"
      :show-sider-trigger="layout.showSiderTrigger"
      :sider-width="layout.siderWidth"
      :sider-collapsed-width="layout.siderCollapsedWidth"
    >
      <template #headerRight>
        <div>测试右侧插槽</div>
      </template>
      <router-view />
    </MixLayout>
    <SideLayout
      v-if="layout.layout === 'side'"
      v-model:collapsed="layout.collapsed"
      :logo="layout.logo"
      :title="layout.title"
      :inverted="layout.layoutStyle === 'inverted'"
      :show-sider-trigger="layout.showSiderTrigger"
      :sider-width="layout.siderWidth"
      :sider-collapsed-width="layout.siderCollapsedWidth"
    >
      <template #headerRight>
        <div>测试右侧插槽</div>
      </template>
      <router-view />
    </SideLayout>
    <TopLayout
      v-if="layout.layout === 'top'"
      :logo="layout.logo"
      :title="layout.title"
      :inverted="layout.layoutStyle === 'inverted'"
    >
      <template #headerRight>
        <div>测试右侧插槽</div>
      </template>
      <router-view />
    </TopLayout>
  </template>
  <SettingDrawer
    :layoutList="layoutList"
    :layoutStyleList="layoutStyleList"
    v-model:layoutStyle="layout.layoutStyle"
    v-model:layout="layout.layout"
  />
</template>

<style scoped></style>
