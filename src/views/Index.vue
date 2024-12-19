<template>
    <div class="index">
        <div v-cloak>
            <div class="mb-2">
                <CardApple/>
            </div>
            <div class="mb-2">
                <MusicIconList/>
                <IconList/>
            </div>
        </div>
        <copyright/>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from "vue";
import Copyright from "./Copyright.vue";
import CardApple from "./Cards/Apple/CardApple.vue";
import MusicIconList from "./Music/MusicIconList.vue";
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
