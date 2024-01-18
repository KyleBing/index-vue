import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Index.vue')
    },
    {
        path: '/clock',
        name: 'Clock',
        component: () => import('@/views/clock/Clock.vue')
    },
    {
        path: '/wanted-list',
        name: 'WantedList',
        component: () => import('@/views/wanted-list/WantedList.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
