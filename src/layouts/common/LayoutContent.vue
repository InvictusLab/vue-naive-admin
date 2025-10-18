<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <n-layout-content v-bind="attrs" style="--n-color: var(--invivtus-admin-layout-content-bg)">
    <slot></slot>
  </n-layout-content>
</template>

<style scoped></style>
