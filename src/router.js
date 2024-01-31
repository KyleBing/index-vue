import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Index.vue')
    },
    {
        path: '/about-me',
        name: 'AboutMe',
        component: () => import('@/views/AboutMe.vue')
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
