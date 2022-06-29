import { createRouter, createWebHashHistory } from 'vue-router'
import Film from "@/views/film/Film";
import Index from "@/views/Index";
import Clock from "@/views/clock/Clock";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/film',
    name: 'Film',
    component: Film
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
