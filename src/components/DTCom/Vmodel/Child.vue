<template>
  <div class="Child">
    <u> 父组件input中的内容 v-model传递过来的 </u>
    <h1>{{ modelValue }}</h1>
    <h3>父组件传递过来的isShow来控制遮罩层是否显示</h3>
    <div
      v-show="isShow"
      style="width: 100px; height: 100px; background-color: #000"
    ></div>
    <input type="text" @input="handelValue" />
    <button @click="changeStatus">{{ isShow ? '隐藏' : '显示' }}遮罩层</button>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
// defineProps 父子通信   defineEmit 子父传递数据
const props = defineProps<{
  modelValue: any
  isShow: Boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: any)
  (event: 'update:isShow', isShow: Boolean)
}>()
// 子修改父
const handelValue = (e: Event) => {
  const target: HTMLInputElement = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
// 子修改父  isShow 显示、隐藏遮罩层
const changeStatus = () => {
  emit('update:isShow', !props.isShow)
}
</script>

<style lang="scss" scoped></style>
