<script setup lang="ts">
const counterStore = useCustomCounter()

const { count, double } = storeToRefs(counterStore)
</script>

<template>
  <div>
    count: {{ count }}
    <br />
    double: {{ double }}
    <n-button @click="counterStore.increment">Increment</n-button>
    <n-button @click="counterStore.decrement">Decrement</n-button>
  </div>

  <div>
    <h1>Home</h1>
    <p>Home Page</p>
  </div>
</template>

<style scoped></style>
