<template>
    <div class="nav-list">
        <a :class="[
            'nav-item',
            {active: item.path === route.path}
        ]"
           v-for="item in routes" :key="item.path"
           @click="router.push(item.path)"
        >
            <img class="icon" :src="iconGithub" :alt="item.meta.title">
            <span class="title">{{ item.meta.title }}</span>
        </a>
    </div>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()

import iconGithub from '../Profile/icon/github.svg?url'

import {routes} from "@/router.ts";

</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.nav-list{
    position: fixed;
    top: 250px;
    margin-left: -240px;
    width: 200px;
    padding: 5px;
    @include border-radius($radius);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    .nav-item{
        cursor: pointer;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        padding: 8px 15px;
        flex-grow: 1;
        border: 1px solid transparent;
        @include border-radius($radius - 3);
        .icon{
            display: block;
            width: 25px;
            height: 25px;
        }
        .title{
            color: $text-content;
            padding-top: 1px;
            padding-left: 15px;
        }
        &:hover{
            border-color: white;
            background-color: transparentize(white, 0.9)
        }
        &.active{
            background-color: white;
            .title{
                font-weight: bold;
                color: $text-title;
            }
        }
    }
}

@media (max-width: $width-sm){
    .nav-list{
        margin-bottom: 10px;
        z-index: 0;
        position: relative;
        top: 0;
        width: 100%;
        margin-left: 0;
        .nav-item{
            @include border-radius(10px);
            justify-content: center;
        }
    }
}
</style>
