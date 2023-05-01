<template>
  <div class="watchEffect">
    <input type="text" v-model="data.name" />
    <input type="text" v-model="data.age" />
  </div>
</template>

<script setup lang="ts">
import { watchEffect, reactive, getCurrentInstance, onBeforeMount } from "vue";

const data = reactive({
  name: "SMS",
  age: 18,
});
// 生命周期
onBeforeMount(() => {
  // data.sex = 123
  console.log(data.age);

  console.log("组件挂在前 onBeforeMount");
});
onBeforeMount(() => {
  console.log("组件挂在前 onBeforeMount");
});
onBeforeMount(() => {
  console.log("组件挂在前 onBeforeMount");
});
watchEffect(() => {
  console.log("变化", data.age);
  console.log(getCurrentInstance());
});
</script>

<style lang="scss" scoped></style>
