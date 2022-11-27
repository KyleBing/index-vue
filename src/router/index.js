import {createRouter, createWebHashHistory} from 'vue-router'
import Index from "@/views/Index";
import Clock from "@/views/clock/Clock";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => {
            return require('@/views/Index')
        }
    },
    {
        path: '/clock',
        name: 'Clock',
        component: () => {
            return require('@/views/clock/Clock')
        }
    },
    {
        path: '/wanted-list',
        name: 'WantedList',
        component: () => {
            return require('@/views/wanted-list/WantedList')
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
