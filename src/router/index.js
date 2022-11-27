import {createRouter, createWebHashHistory} from 'vue-router'
import Index from "@/views/Index";
import Clock from "@/views/clock/Clock";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Index')
    },
    {
        path: '/clock',
        name: 'Clock',
        component: () => import('@/views/clock/Clock')
    },
    {
        path: '/wanted-list',
        name: 'WantedList',
        component: () => import('@/views/wanted-list/WantedList')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
