<template>
    <div class="nav-list">
        <a :class="[
            'nav-item',
            {active: item.path === route.path}
        ]"
           v-for="item in routes" :key="item.path"
           @click="router.push(item.path)"
        >
<!--            <img class="icon" :src="iconGithub" :alt="item.meta.title">-->
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
    margin-left: -200px;
    width: 150px;
    padding: 5px;
    @include border-radius($radius);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column nowrap;
    .nav-item{
        margin-bottom: 3px;
        width: 100%;
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
            text-align: right;
            color: $text-content;
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
        width: 100%;
        flex-flow: row wrap;
        margin-bottom: 10px;
        z-index: 0;
        position: relative;
        top: 0;
        margin-left: 0;
        .nav-item{
            margin-bottom: 0;
            width: auto;
            @include border-radius(10px);
            justify-content: center;
        }
    }
}

@media (prefers-color-scheme: dark) {
    .nav-list{
        .nav-item{
            color: $dark-text-desc;
            &.active{
                background-color: darken(white, 80%);
                .title{
                    color: darken(white, 10%);
                }
            }
            &:hover{
                background-color: darken(white, 85%);
                border-color: transparent;
            }
        }
    }
}


</style>
