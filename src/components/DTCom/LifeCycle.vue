<template>
  <div ref="LifeCycle">生命周期</div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
const LifeCycle = ref()

console.log('setup', LifeCycle.value)
onBeforeMount(() => {
  console.log('onBeforeMount', LifeCycle.value)
})
onMounted(() => {
  console.log('onMounted', LifeCycle.value)
})
</script>

<style lang="scss" scoped></style>
