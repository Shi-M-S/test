<template>
  <div class="Transform">
    <button @click="flag = !flag">切换</button>
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
  <!-- 两边固定 中间自适应 -->
  <!-- 定位方式 -->
  <div class="fater">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const flag = ref(false)
</script>

<style lang="scss" scoped>
/* 进入的三种状态 */
.fade-enter-from {
  width: 0px;
  height: 0px;
  background: red;
}
.fade-enter-active {
  transition: all 2.5s ease;
}
.fade-enter-to {
  width: 200px;
  height: 200px;
  background: yellow;
}

/* 布局 */
.fater {
  position: relative;
  /* padding:0 200px; */
  height: 80vh;
  border: 1px solid #000;
  .left {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    background: red;
  }
  .center {
    margin: 0 200px;

    background-color: pink;
    height: 100%;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    height: 100%;
    background: red;
  }
}
</style>
