<template>
  <div class="Home">首页</div>
  <a href="#">{{ num }}</a>
  <button @click="add">增加</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
// 数量增加
const add = (): void => {
  num.value++
}
</script>

<style lang="scss" scoped></style>
