<template>
  <div class="ComponentDT">
    <!-- 标签栏 -->
    <div class="tabs">
      <button @click="changeTab(item, i)" v-for="(item, i) in tab">
        {{ item.name }}
      </button>
    </div>
    <!-- 使用动态组件  Component :is='xxx' -->
    <keep-alive>
      <Component :is="currentCom"></Component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { reactive, shallowRef } from 'vue'
// 动态组件
import Home from './Home.vue'
import Login from './Login.vue'
import Register from './Register.vue'
// 当前动态组件
const currentCom = shallowRef(Register)
// 标签栏
const tab = reactive([
  {
    name: '首页',
    component: shallowRef(Home)
  },
  {
    name: '登录',
    component: shallowRef(Login)
  },
  {
    name: '注册',
    component: shallowRef(Register)
  }
])
console.log(currentCom.value)
// 切换标签
const changeTab = (item: any, i: number) => {
  currentCom.value = item.component
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  button {
    width: 90px;
    height: 50px;
  }
}
</style>
