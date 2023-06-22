<template>
  <div class="Home">
    <RouterLink
      class="route-class"
      v-for="item in routers"
      :key="item"
      :to="item"
    >
      <button>{{ item }} 页面</button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { routes } from '@/router'
const routers: Array<string> = []
routes.forEach((item) => {
  const path = item.path.replace('/', '')
  item.path !== '/' && routers.push(path)
})
</script>

<style lang="scss" scoped>
.Home {
  display: flex;
  justify-content: space-around;
}
</style>
