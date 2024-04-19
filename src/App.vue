<template>
    <div class="container">
        <router-view/>
        <div class="float-btn float-left" @click="backward()">
            <img src="./assets/arrow_left.svg" alt="LEFT">
        </div>
        <div class="float-btn float-right" @click="forward">
            <img src="./assets/arrow_right.svg" alt="RIGHT">
        </div>
    </div>
</template>


<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {useProjectStore} from "./store.ts";
import {useRouter} from "vue-router";
import {routes} from "@/router.ts";

const pinia = useProjectStore()
onMounted(()=>{
    pinia.SET_INSETS({
        height: innerHeight,
        width: innerWidth,
    })
    onresize = () => {
        pinia.SET_INSETS({
            height: innerHeight,
            width: innerWidth,
        })
    }
})

const router = useRouter()

const currentRouteIndex = ref(0)
function forward(){
    if (currentRouteIndex.value > routes.length){

    } else {
        currentRouteIndex.value = currentRouteIndex.value + 1
        router.push({
            name: routes[currentRouteIndex.value].name
        })
    }
}
function backward(){
    if (currentRouteIndex.value > 0){
        currentRouteIndex.value = currentRouteIndex.value - 1
        router.push({
            name: routes[currentRouteIndex.value].name
        })
    } else {

    }
}
</script>

<style lang="scss">
@import "scss/index";
.float-btn{
    background-color: transparentize(white, 1);
    @include backdrop-filter(blur(10px) saturate(180%));
    position: absolute;
    overflow: hidden;
    top: 100px;
    width: 100px;
    height: 100px;
    z-index: 100;
    padding: 20px;
    cursor: pointer;
    border: 1px solid transparent;
    @include border-radius(100px);
    @include transition(all, 0.3s);
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
    &:hover{
        border-color: white;
        @include transition(all, 0.3s);
        background-color: transparentize(white, 0.9);
    }
}
.float-left{
    padding-right: 30px;
    left: -100px;
}
.float-right{
    padding-left: 30px;
    right: -100px;
}
</style>
