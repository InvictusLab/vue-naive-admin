<script lang="ts" setup>
import { colors } from '@/config/theme'
const appStore = useAppStore()
const onSwitchTheme = (value: string) => {
  appStore.updateTheme(value)
}
</script>

<template>
  <div>
    <n-space>
      <n-button
        v-for="(color, key) in colors"
        :key="key"
        type="primary"
        @click="onSwitchTheme(key)"
      >
        {{ key }}
      </n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
