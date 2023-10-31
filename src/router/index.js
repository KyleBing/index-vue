import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Index')
    },
    {
        path: '/wap',
        name: 'Wap',
        component: () => import('@/wap/Wap')
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
