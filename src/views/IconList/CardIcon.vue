<template>
    <a
        target="_blank"
        class="card-icon"
        :href="iconInfo.pageLink">
        <div
            :class="['icon', {'no-padding': iconInfo.noPadding}, {black: iconInfo.isBgBlack}]"
            :style="iconBgStyle"
        >
            <img :src="iconInfo.icon" alt="icon">
        </div>
        <div class="indicator-new" v-if="iconInfo.isNew">
            <img alt="black-berry-new-message-icon" :src="SVG_ICONS.blackberry_new">
        </div>
        <div class="name">{{ iconInfo.name }}</div>
    </a>
</template>

<script lang="ts" setup>
import SVG_ICONS from "@/assets/SVG_ICONS.ts";
import {computed} from "vue";
import {useRouter} from "vue-router";
import {CardIconEntity} from "@/views/Music/CardIcon.ts";

interface Props {
    iconInfo: CardIconEntity
}
const props = defineProps<Props>()

const router = useRouter()

function toRoute(){
    if (props.iconInfo.pageLink){
        if (/^(\.\.|http).*$/.test(props.iconInfo.pageLink)){
            window.open(props.iconInfo.pageLink, '_blank')
        } else {
            router.push(props.iconInfo.pageLink)
        }
    }
}

const iconBgStyle = computed(()=> {
    if (props.iconInfo.noPadding){
        return `background-color: transparent`
    } else {
        return ''
    }
})
</script>

<style lang="scss">
@import "../../scss/plugin";

$indicator-width: 20px;
.card-icon{
    @extend .btn-like;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100px;
    position: relative;

    &:hover{
        .icon{
            filter: drop-shadow(12px 25px 1px transparentize(black, 0.9)) drop-shadow(-2px 20px 1px transparentize(black, 0.9));
            @include transition(all 0.2s);
            background-color: white;
            //@include box-shadow(12px 25px 5px transparentize(black, 0.9), -2px 20px 5px transparentize(black, 0.9));
            @include transform(translateY(-3px))
        }
        .name{
            //color: white;
        }
    }
    &:active{
        .icon{
            @include transition(all 0.1s);
            @include box-shadow(2px 3px 3px transparentize(black, 0.8), -2px 10px 5px transparentize(black, 0.9));
            @include transform(translateY(0))
        }
    }


    .indicator-new{
        position: absolute;
        width: $indicator-width;
        height: $indicator-width;
        top: 0;
        right: 0;
        @include border-radius(100px);
        @include box-shadow(-1px 2px 3px transparentize(black, 0.8))
    }
    .icon{
        flex-shrink: 0;
        @include transition(all 0.5s);
        @include box-shadow(0 0 0 transparentize(black, 1));
        background-color: white;
        @include border-radius(13px);
        overflow: hidden;
        height: 60px;
        width: 60px;
        //@include box-shadow(12px 15px 3px transparentize(black, 0.95));

        &.no-padding{
            padding: 0;
        }
        &.black{
            background-color: $text-title;
        }
        padding: 6px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .name{
        color: $text-title;
        margin-top: 10px;
        text-align: center;
        font-size: $fz-sm;
    }

}

@media (prefers-color-scheme: dark) {
    .card-icon{
        .icon{
            //@include box-shadow(5px 5px 3px transparentize(black, 0.7));
        }
        &:hover {
            .icon {
                background-color: white;
                @include box-shadow(12px 30px 5px transparentize(black, 0.5), -2px 20px 5px transparentize(black, 0.5));
            }
            .name{
                color: white;
            }
        }
    }
}


</style>
