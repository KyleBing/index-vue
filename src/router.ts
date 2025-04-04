import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Index from "./views/Index.vue";
import AboutMe from "./views/AboutMe.vue";
import Clock from "./views/Clock/Clock.vue";
import WantedList from "./views/WantedList/WantedList.vue";
import GFW from "./views/GFW/GFW.vue";
import Recent from "@/views/Recent/Recent.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Index,
        meta: {
            title: '首页',
            icon: '',
        }
    },
    {
        path: '/recent',
        name: 'Recent',
        component: Recent,
        meta: {
            title: '最近',
            icon: '',
        }
    },

    // {
    //     path: '/clock',
    //     name: 'Clock',
    //     component:  Clock,
    //     meta: {
    //         title: '时钟'
    //     }
    // },
    {
        path: '/wanted-list',
        name: 'WantedList',
        component: WantedList,
        meta: {
            title: '想要的东西',
            icon: '',
        }
    },
    {
        path: '/gfw',
        name: 'GreatFireWall',
        component: GFW,
        meta: {
            title: '外网套餐',
            icon: '',
        }
    },
    {
        path: '/about-me',
        name: 'AboutMe',
        component: AboutMe,
        meta: {
            title: '关于我',
            icon: '',
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {
    router,
    routes
}
