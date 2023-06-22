<template>
  <div class="watchEffect">
    <input type="text" v-model="data.name" />
    <input type="text" v-model="data.age" />
    <div ref="test">{{ str }}</div>
    <div ref="test">{{ str2 }}</div>

    <button @click="str += 1">xiugai</button>
    <button @click="str += 1">xiugai</button>
    <button @click="str += 1">xiugai</button>
    <button @click="str += 1">xiugai</button>
  </div>
  <div style="border 1px solid red">
    <ComponentDT />
  </div>
</template>

<script setup lang="ts">
import ComponentDT from './ComponentDT.vue'
import {
  ref,
  watchEffect,
  reactive,
  getCurrentInstance,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered
} from 'vue'

const data = reactive({
  name: 'SMS',
  age: 18
})
const str = ref<string>('0')
const str1 = ref<string>('01')
const str2 = ref<string>('02')
const test = ref<HTMLDivElement>()

const ac = ref('watchEffect')

// 生命周期
onBeforeUpdate(() => {
  console.log(test.value?.innerText, 'beforeUpdate')
})
onUpdated(() => {
  console.log(test.value?.innerText, 'updated')
})
// vue3 新增的两个生命周期  调试使用 onRenderTrancked 和 onRenderTriggered
onRenderTracked((e) => {
  console.log(e, 'onReanderTracked')
})
onRenderTriggered((e) => {
  console.log(e, 'onReanderTriggered')
})
watchEffect(() => {
  console.log('变化', data.age)
  // console.log(ac)

  console.log(getCurrentInstance())
})
</script>

<style lang="scss" scoped></style>
