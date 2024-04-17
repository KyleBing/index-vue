import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Index from "./views/Index.vue";
import AboutMe from "./views/AboutMe.vue";
import Clock from "./views/clock/Clock.vue";
import WantedList from "./views/wanted-list/WantedList.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/about-me',
        name: 'AboutMe',
        component: AboutMe
    },
    {
        path: '/clock',
        name: 'Clock',
        component:  Clock
    },
    {
        path: '/wanted-list',
        name: 'WantedList',
        component: WantedList
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {
    router
}
