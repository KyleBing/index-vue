<template>
    <div :class="[
            'section',
            {'no-padding': noPadding},
            {'link': pageLink},
            {'show-bg': isShowBg},
        ]"
         @click="toRoute">
        <div class="section-header">
            <div v-if="isShowTitle" class="title">{{ title }}</div>
<!--            <router-link v-if="pageLink" :to="pageLink" class="share-link">进入页面</router-link>-->
        </div>
        <div class="section-content" :style="isShowTitle? `padding-top: 20px`: ''">
            <slot></slot>
            <div v-if="isDeveloping" class="is-developing">
                <img :src="SVG_ICONS.developing" alt="developing">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {useRouter} from "vue-router";
import SVG_ICONS from "@/assets/SVG_ICONS.ts";

const router = useRouter()
interface Props {
    title?: string,
    pageLink?: string,
    noPadding?: boolean,
    isDeveloping?:  boolean, // 提示信息：正在开发中
    isShowTitle?: boolean,
    isShowBg?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    noPadding: false,
    isDeveloping: false,
    isShowTitle: true,
    isShowBg: false
})

function toRoute(){
    if (props.pageLink){
        router.push(props.pageLink)
    }
}
</script>

<style scoped lang="scss">
@use "sass:math";

@import "../scss/plugin";

.section{
    position: relative;
    @include border-radius($radius);
    padding: $gap;
    overflow: hidden;
    //@include box-shadow(-8px -10px 0 transparentize(black, 0.8));

    &.show-bg{
        border: 1px solid $item-border-color;
        background-color: white;
    }
    &.no-padding{
        padding: 0;
    }
    &.link{
        @extend .btn-like
    }
    .section-header{
        z-index: 10;
        @include transition(color 0.5s);
        position: absolute;
        top: math.div($gap , 2) ;
        left: 0;
        right: 0;
        color: $text-title;
        .title{
            letter-spacing: 0.5px;
            position: absolute;
            left: math.div($gap , 2);
            font-weight: bold;
            font-size: $fz-sm;
        }
        .share-link{
            position: absolute;
            right: math.div($gap , 2);
            &:hover{
                color: $magenta;
            }
        }
    }
    .section-content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 140px;
        border: 1px solid transparent;
    }

    &.black{
        background: black;
        .section-header{
            color: $text-dark-content
        }
    }
    &.blue{
        background: $gradient-bg-blue;
        .section-header{
            color: $text-dark-content
        }
    }
    &.red{
        background: $gradient-bg-red;
        .section-header{
            color: $text-dark-content
        }
    }
    &.green{
        background: $gradient-bg-green;
        .section-header{
            color: $text-dark-content
        }
    }
    &.purple{
        background: $gradient-bg-purple;
        .section-header{
            color: $text-dark-content
        }
    }
    &.gray{
        background: linear-gradient(to top left, #888, #aaa);
        .section-header{
            color: $text-dark-content
        }
    }
    &.gradient{
        background: linear-gradient(to bottom, #e6ebe6, #f6f7f9);
    }

    &.no-padding{
        padding: 0;
    }
}


@media (max-width: 1280px) {
    .section {
        padding: $gap-mobile;
        .section-content {
            min-height: 100px;
        }

    }
}

@media (prefers-color-scheme: dark) {
    .section{
        border-color: $dark-border;
        &:hover {
            .section-header {
                @include transition(color 0.5s);
                color: $text-dark-title
            }
        }
    }
}

.is-developing{
    img{
        display: block;
        height: 80px;
    }
}


</style>
