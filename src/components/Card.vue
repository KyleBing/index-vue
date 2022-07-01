<template>
    <div :class="['section', {'no-padding': noPadding}, {'link': pageLink}]" @click="toRoute">
        <div class="section-header">
            <div class="title">{{ title }}</div>
<!--            <router-link v-if="pageLink" :to="pageLink" class="share-link">进入页面</router-link>-->
        </div>
        <div class="section-content">
            <slot></slot>
            <div v-if="isDeveloping" class="is-developing"><img src="./icon/developing.svg" alt="developing"> </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        title: {
            type: String
        },
        pageLink: {
            type: String
        },
        noPadding: {
            type: Boolean,
            default: false
        },
        isDeveloping: { // 提示信息：正在开发中
            type: Boolean,
            default : false
        }
    },
    methods: {
        toRoute(){
            if (this.pageLink){
                this.$router.push(this.pageLink)
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/plugin";

.section{
    position: relative;
    margin-bottom: $gap;
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
            font-size: $fz-m;
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
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 150px;
        border: 1px solid transparent;
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
        margin-bottom: $gap-mobile;
        padding: 20px;

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
