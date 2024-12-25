<script setup lang="ts">
const message = useMessage()
const dialog = useDialog()
const notification = useNotification()
const loadingBar = useLoadingBar()
const onMessage = () => {
  message.success('Hello Vite!')
}

const onDialog = () => {
  dialog.info({
    title: 'Hello Vite!',
    content: 'This is a dialog.',
  })
}

const onNotification = () => {
  notification.info({
    title: 'Hello Vite!',
    content: 'This is a notification.',
  })
}

const onLoadingBar = () => {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 3000)
}
</script>

<template>
  <div>
    <n-space>
      <n-button @click="onMessage">Message</n-button>
      <n-button @click="onDialog">Dialog</n-button>
      <n-button @click="onNotification">Notification</n-button>
      <n-button @click="onLoadingBar">LoadingBar</n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
