<script setup lang="ts">
import MixLayoutIndex from '@/layouts/mix-layout/MixLayoutIndex.vue'
import SideLayoutIndex from '@/layouts/side-layout/SideLayoutIndex.vue'

const appStore = useAppStore()
const { layout } = toRefs(appStore)
</script>

<template>
  <MixLayoutIndex
    v-if="layout.layout === 'mix'"
    :logo="layout.logo"
    :title="layout.title"
    :showSiderTrigger="layout.showSiderTrigger"
    :siderWidth="layout.siderWidth"
    :siderCollapsedWidth="layout.siderCollapsedWidth"
  >
    <template #headerRight>
      <div>Right Slot</div>
    </template>
    <router-view></router-view>
  </MixLayoutIndex>
  <SideLayoutIndex
    v-if="layout.layout === 'side'"
    :logo="layout.logo"
    :title="layout.title"
    :showSiderTrigger="layout.showSiderTrigger"
    :siderWidth="layout.siderWidth"
    :siderCollapsedWidth="layout.siderCollapsedWidth"
  >
    <!--    <template #headerRight>-->
    <!--      <div>Right Slot</div>-->
    <!--    </template>-->
    <router-view></router-view>
  </SideLayoutIndex>
</template>

<style scoped></style>
