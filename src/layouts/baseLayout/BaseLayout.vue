<script setup lang="ts"></script>

<template>
  <div>
    <h1>Base Layout</h1>

    <router-link to="/">Home</router-link>
    <router-link to="/workspace">WorkSpace</router-link>

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
