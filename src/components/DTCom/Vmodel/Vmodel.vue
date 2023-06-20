<template>
  <div class="Vmodel">
    <h1>父组件</h1>
    <input type="text" v-model="content" />
    <button @click="isShow = !isShow">
      {{ isShow ? '隐藏' : '显示' }}遮罩层
    </button>
    <hr />
    <h1>子组件</h1>
    <Child v-model="content" v-model:isShow="isShow"></Child>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'
const content = ref()
const isShow = ref<Boolean>(true)
</script>

<style lang="scss" scoped></style>
