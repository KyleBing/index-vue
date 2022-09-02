import { createRouter, createWebHashHistory } from 'vue-router'
import Index from "@/views/Index";
import Clock from "@/views/clock/Clock";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/clock',
    name: 'Clock',
    component: Clock
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
