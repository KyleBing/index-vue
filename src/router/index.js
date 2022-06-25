import { createRouter, createWebHashHistory } from 'vue-router'
import Film from "@/views/film/Film";
import Index from "@/views/Index";

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
