<template>
    <div class="icon-list-group" v-for="(group, index) in iconList" :key="index">
        <div class="icon-list-header">
            <div class="title">{{ group.title }}</div>
        </div>
        <div class="icon-list">
            <CardIcon v-for="item in group.icons" :key="item.name"
                       :iconInfo="item"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import {iconList} from "@/views/IconList/iconListData.ts";
import CardIcon from "@/views/IconList/CardIcon.vue";
</script>

<style lang="scss">
@import "../../scss/plugin";


.icon-list-group{
    padding: 20px 20px;
}
.icon-list-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title{
        padding-left: 10px;
        font-weight: bold;
        font-size: $fz-big;
        margin-bottom: 15px;
        //background-image: $gradient-bg-blue;
        background-image: $gradient-bg-purple;
        //background-image: $gradient-bg-red;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 1s;
        &:hover{
            transition: all 1s;
            background-image: $gradient-bg-blue;
        }
    }
}
.icon-list{
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}

@media (max-width: $width-sm){
    .icon-list-group{
        padding: 10px;
    }
    .icon-list{
        justify-content: space-between;
    }
}

@media (max-width: 1280px) {
    .icon-list{
        padding: 0;
    }
}

@media (prefers-color-scheme: dark) {
    .icon-list-header{
        .title{
            background-image: $gradient-bg-body;
        }
    }
}
</style>
