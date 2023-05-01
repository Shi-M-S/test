import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/watch', name: 'watch', component: () => import('@/components/WatchEffect.vue') },
  { path: '/component', name: 'component', component: () => import('@/components/DTCom/ComponentDT.vue') },
  { path: '/telepolt', name: 'telepolt', component: () => import('@/components/DTCom/Teleport.vue') },
  { path: '/Transition', name: 'Transition', component: () => import('@/components/DTCom/Transition.vue') },

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
}
)
export default router
export { routes } 
