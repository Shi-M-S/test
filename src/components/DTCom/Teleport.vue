<template>
  <Teleport :disabled="isTo" to="body">
    <div class="Teleport">
      <button @click="isTo = !isTo">切换</button>
      <!-- Teleport 传送组件 -->
      <div class="loading">加载中.....</div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isTo = ref(true)
</script>

<style lang="scss" scoped>
.Teleport {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
