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
import { ref, reactive } from 'vue'
const flag = ref(false)

// 排序
const arr = reactive([4, 8, 0, 1, 43, 53, 22, 11, 0])
// 数组高级方法
const arrs = [
  { id: 0, name: 'XMS', age: 18 },
  { id: 1, name: 'awd', age: 18 },
  { id: 2, name: 'awd', age: 18 },
  { id: 3, name: 'aa', age: 18 },
  { id: 4, name: 'sdfa', age: 18 }
]

// map 映射一个新数组
// const newMap = arrs.map((item, i) => {
//   item.id = 123
//   return item
// })
// console.log(newMap)

// find  返回一个查找到符合条件的元素
// const newFind = arrs.find((item, i) => {
//   return item.age === 18 && item?.id === 4
// })
// console.log(newFind)

// findIndex 返回符合条件的下标
const newFind = arrs.findIndex((item, i) => {
  return item.age === 18 && item?.id === 4
})
// console.log(newFind)
// fillter  返回一个过滤后的数组
// const newFillter = arrs.filter((item, i) => {
//   const s: any = []
//   item.id > 0
//   return 123
// })
// console.log(newFillter)

// every 返回是否都满足某种条件 只要有一个不满足就返回 false
// const isEvery = arrs.find((item, i) => {
//   return item.id < 3
// })
// console.log(isEvery)

// some  返回是否有一个满足条件的 只要有一个满足条件 就停止遍历  返回true  如果都不符合条件的话 就返回 fasle
// splice  删除 插入 替换
// const newSplice = arrs.splice(2, 1, 1)
// // 两个参数 删除  1 删除的位置  删除几个
// console.log(newSplice)
// //
// console.log(arrs)

// reverse  反转数组

// slice 截取数组
// reduce  数组求和运算
// const arrsN = arrs.map((item,i)=>{
//   return item.age
// })
// console.log(arrsN);

// const newReduce = arrsN.reduce((prev, current) => {
//   return prev + current
// },10)
// console.log(newReduce)

// includes  判断数组中是否包含某个元素
const a = [0, 1, 2, 3, 4, 5, 6]
console.log(a)

// connet  连接数组
console.log(arrs.concat(a));

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
