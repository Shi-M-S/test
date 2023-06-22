<template>
  <div class="WaterFallData" ref="s">
    <div
      :style="{
        height: item.height + 'px',
        background: item.background,
        top: item.top + 'px',
        left: item.left + 'px'
      }"
      class="i"
      v-for="item in waterList"
      :key="item"
    >
      <img
        style="width: 100%; height: 100%"
        src="https://img1.baidu.com/it/u=413643897,2296924942&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1683219600&t=a94c05512acc61f575f36ed79e05eed8"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { react } from '@babel/types'
import { ref, onMounted, reactive } from 'vue'
// 接收父组件传递过来的数据
const s = ref<HTMLDivElement>()
const props = withDefaults(defineProps<{ list: any[] }>(), {
  list: () => []
})
// 加工后的瀑布流数据
const waterList = reactive<any[]>([])
const list = reactive(props.list)
// 生命周期
onMounted(() => {
  console.dir(s.value)
})

// 初始化 瀑布数据
const init = (): void => {
  // 存放每一列的高度
  let heightArr: any[] = []
  const width = 180
  const column = Math.floor(document.body.clientWidth / width)
  // 计算每个盒子的 摆放位置 top left
  for (let i = 0; i < props.list.length; i++) {
    //  第一列数据
    if (i < column) {
      list[i].top = 10
      list[i].left = i * width
      heightArr[i] = {
        height: list[i].height,
        index: i
      }
      waterList.push(list[i])
    } else {
      // 第二列数据及更多
      // 找到最低的 那一列
      let minHeight = heightArr[0]
      heightArr.forEach((i) => {
        if (minHeight.height > i.height) {
          minHeight = i
        }
      })
      console.log(minHeight.index)

      list[i].top = minHeight.height + 20
      list[i].left = minHeight.index * width

      heightArr[minHeight.index] = {
        height: list[i].height + minHeight.height + 20,
        index: minHeight.index
      }
      waterList.push(list[i])
    }
    console.log(heightArr)
  }
}
console.log(waterList)

init()
</script>

<style lang="scss" scoped>
.WaterFallData {
  position: relative;
}
.i {
  position: absolute;
  width: 160px;
}
</style>
