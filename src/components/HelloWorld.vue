<script setup lang="ts">
import { Ref, ref } from "vue"
defineProps<{ msg: string }>()
interface AS {
  namae: number
}
const obj = ref({
  name: 123,
  age: "string",
})
const obj3 = {
  name: 123,
  age: "string",
}
const count: Ref<number> = ref(0)
class RefImpls<T extends object, K extends keyof T> {
  constructor(public _object: T, _key: K, _defaultValue?: T[K]) {}
  // 读取方法
  get value() {
    console.log(this._object + "get value用法")
    return 123
  }
  get value2() {
    console.log(this._object + "get value用法")
    return 123
  }
  // 设置方法
}
// ref 实现
// const res = new RefImpls(obj, { name: 123, age: "awd" })
// ref.name = 123
const res = new RefImpls(obj3, "age")
// ref.vlaue
// res.value
obj3.age = "12000000"
console.log(res)

// console.log(count)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
