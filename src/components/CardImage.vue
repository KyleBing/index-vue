<template>
    <div :class="['section', {'no-padding': noPadding}, {'link': pageLink}]" @click="toRoute">
        <div class="section-header">
            <div v-if="isShowTitle" class="title">{{ title }}</div>
<!--            <router-link v-if="pageLink" :to="pageLink" class="share-link">进入页面</router-link>-->
        </div>
        <div class="section-content">

            <div class="cover"
                 :class="['cover']"
                 :style="`top: ${isAnimated ? offsetTop : 0}px`">
                <img :src="cover" alt="cover">
            </div>
            <div class="logo">
                <img v-if="logo" :src="logo" alt="logo">
                <div class="title">{{ logoTitle }}</div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "CardImage",
    props: {
        title: {
            type: String
        },
        // 背景图
        cover: {
            type: String
        },
        // logo
        logo: {
            type: String
        },
        logoTitle: {
            type: String
        },
        pageLink: {
            type: String
        },
        isAnimated: { // 是否启用图片动画
            type: Boolean,
            default: false
        },
        noPadding: {
            type: Boolean,
            default: false
        },
        isShowTitle: {
            type: Boolean,
            default : true
        }
    },
    computed:{
        ...mapState(['scrollTop']),
        offsetTop(){
            return -(this.scrollTop / innerHeight) * 100 + 50
        }
    },
    methods: {
        toRoute(){
            if (this.pageLink){
                if (/^\.\..*$/.test(this.pageLink)){
                    location = this.pageLink
                } else {
                    this.$router.push(this.pageLink)
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/plugin";


.section{
    position: relative;
    background-color: transparentize(white, 0.2);
    @include border-radius($radius);
    padding: $gap;
    overflow: hidden;
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
        top: $gap / 2 ;
        left: 0;
        right: 0;
        color: $text-desc;
        .title{
            letter-spacing: 0.5px;
            position: absolute;
            left: $gap / 2;
            //font-weight: bold;
            font-size: $fz-sm;
        }
        .share-link{
            position: absolute;
            right: $gap / 2;
            &:hover{
                color: $magenta;
            }
        }
    }
    .section-content{
        height: 180px;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border: 1px solid transparent;
        .cover{
            @include transition(all 1s ease-in-out);
            position: absolute;
            display: block;
            width: 100%;
            img{
                width: 100%;
            }
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column nowrap;
            z-index: 10;
            margin-right: 80px;
            img{
                display: block;
                width: 50px;
            }
            .title{
                color: white;
                font-size: $fz-film;
                font-weight: bold;
                text-align: center;
            }
        }
    }

    &:hover{
        .section-header{
            @include transition(color 0.5s);
            color: $text-title;
        }
        &.gray{
            .section-header{
                color: $text-dark-title
            }
        }
    }
    &.black{
        background: black;
        .section-header{
            color: $text-dark-content
        }
    }
    &.blue{
        background: $gradient-blue;
        .section-header{
            color: $text-dark-content
        }
    }
    &.red{
        background: $gradient-red;
        .section-header{
            color: $text-dark-content
        }
    }
    &.green{
        background: $gradient-green;
        .section-header{
            color: $text-dark-content
        }
    }
    &.purple{
        background: $gradient-purple;
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

.is-developing{
    img{
        display: block;
        height: 80px;
    }
}


</style>
