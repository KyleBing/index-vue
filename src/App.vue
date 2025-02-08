<template>
    <div class="container">


        <NavList/>

        <div class="page">
<!--            <div class="page-header">-->
<!--                <h1>{{route.meta.title}}</h1>-->
<!--            </div>-->
            <router-view/>
        </div>


<!--        &lt;!&ndash; BUTTON BACKWARD &ndash;&gt;
        <div class="float-btn float-left" @click="backward()">
            <img src="./assets/arrow_left.svg" alt="LEFT">
        </div>
        &lt;!&ndash; BUTTON FORWARD &ndash;&gt;
        <div class="float-btn float-right" @click="forward">
            <img src="./assets/arrow_right.svg" alt="RIGHT">
        </div>-->

    </div>
</template>


<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {useProjectStore} from "./store.ts";
import {useRoute, useRouter} from "vue-router";
import {routes} from "@/router.ts";
import NavList from "@/views/NavList/NavList.vue";


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
const route = useRoute()

const currentRouteIndex = ref(0)

function forward(){
    if (currentRouteIndex.value >= routes.length - 1){
        currentRouteIndex.value = 0
    } else {
        currentRouteIndex.value = currentRouteIndex.value + 1
    }
    router.push({
        name: routes[currentRouteIndex.value].name
    })
}

function backward(){
    if (currentRouteIndex.value > 0){
        currentRouteIndex.value = currentRouteIndex.value - 1
    } else {
        currentRouteIndex.value = routes.length - 1
    }
    router.push({
        name: routes[currentRouteIndex.value].name
    })
}
</script>

<style lang="scss">
@import "scss/index";
.float-btn{
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
    outline: 1px solid transparentize(white, 0.9);
    @extend .unselectable;
    @extend .btn-like;
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
    &:hover{
        transform: translateY(-1px);
        @include box-shadow(2px 2px 5px transparentize(black, 0.9), 3px 3px 3px inset transparentize(white, 0.8)) ;
        outline: 10px solid transparentize(white, 0.6);
        border: 2px solid white;
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

.page-header{
    margin-bottom: 20px;
    h1{
        color: $green;
        font-size: $fz-big;
        text-align: center;
        //color: $text-title;
    }
}

.page{
    @include border-radius(10px);
    padding: $gap;
    border: 1px solid $color-border;
    background-color: $bg-body;
    @include box-shadow(8px 8px 5px transparentize(black, 0.95)) ;
    //background-color: transparentize(white, 0.5);
}

</style>
