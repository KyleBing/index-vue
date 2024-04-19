<template>
    <div class="index">
        <div v-cloak>
            <div class="mb-2">
                <CardProfile/>
                <ProfileEntrance class="mt-2"/>
            </div>
            <div class="mb-2">
                <CardRecommend/>
            </div>
            <div class="mb-2">
                <CardApple/>
            </div>
            <div class="mb-2">
                <NeteaseMusicShareIconList/>
                <IconList/>
            </div>
        </div>
        <copyright/>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from "vue";
import Copyright from "./Copyright.vue";
import CardProfile from "../cards/profile/CardProfile.vue";
import ProfileEntrance from "../cards/profile/ProfileEntrance.vue";
import CardRecommend from "../cards/recommend/CardRecommend.vue";
import CardApple from "../cards/apple/CardApple.vue";
import NeteaseMusicShareIconList from "./Music/MusicIconList.vue";
import IconList from "./IconList/IconList.vue";

import {useProjectStore} from "../store.ts";

onMounted(()=>{
    addScrollEvent()
})

onUnmounted(()=>{
    removeScrollEvent()
})

const pinia = useProjectStore()
function addScrollEvent(){
    onscroll = () => {
        pinia.SET_SCROLL_TOP(document.documentElement.scrollTop)
    }
}
function removeScrollEvent(){
    onscroll = null
}
</script>

<style scoped>

</style>
