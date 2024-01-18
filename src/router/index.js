import {createRouter, createWebHashHistory} from 'vue-router'

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
    {
        path: '*',
        name: '404',
        component: () => import('@/views/Index')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
