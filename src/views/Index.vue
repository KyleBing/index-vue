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
            <div class="mb-2">
                <CardClock/>
            </div>
        </div>
        <copyright/>
    </div>
</template>

<script lang="ts" setup>
import Copyright from "@/views/Copyright";
import CardProfile from "@/cards/profile/CardProfile";
import CardApple from "@/cards/apple/CardApple.vue";
import CardClock from "@/cards/clock/CardClock";
import IconList from "@/views/icon-list/IconList";
import CardRecommend from "@/cards/recommend/CardRecommend";
import NeteaseMusicShareIconList from "@/views/icon-list/NeteaseMusicShareIconList.vue";
import ProfileEntrance from "@/cards/profile/ProfileEntrance.vue";
import {onMounted, onUnmounted} from "vue";
import {useProjectStore} from "@/store.ts";

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
