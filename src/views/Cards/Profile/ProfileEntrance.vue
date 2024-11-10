<template>
    <div class="entrance-list">
        <a class="entrance-item"
           target="_blank"
           href="https://kylebing.blog.csdn.net/">
            <img class="icon" src="./icon/csdn.svg" alt="CSDN">
            <span class="title">CSDN</span>
        </a>
        <a class="entrance-item"
           target="_blank"
           href="https://space.bilibili.com/12729637">
            <img class="icon" src="./icon/bilibili.svg" alt="bilibili">
            <span class="title">BiliBili</span>

        </a>
        <a class="entrance-item"
           target="_blank"
           href="https://weibo.com/u/5446375965">
            <img class="icon" src="./icon/weibo.svg" alt="weibo">
            <span class="title">微博</span>

        </a>
        <a class="entrance-item"
           target="_blank"
           href="mailto:kylebing@163.com">
            <img class="icon" src="./icon/email.svg" alt="email">
            <span class="title">Email</span>

        </a>
        <a class="entrance-item"
           target="_blank"
           href="https://github.com/KyleBing">
            <img class="icon" src="./icon/github.svg" alt="github">
            <span class="title">Github</span>

        </a>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const studyRoad = ref('')
function studyRoadHtml() {
    return studyRoad.value
        .split('\n')
        .map(item => `<p>${item.trim()}</p>`)
        .join('\n')
}
</script>

<style lang="scss" scoped>
@import "../../../scss/plugin";
.entrance-list{
    width: 100%;
    background-color: white;
    padding: 5px;
    @include border-radius($radius);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    .entrance-item{
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        flex-grow: 1;
        border: 1px solid transparent;
        @include border-radius($radius - 3);
        .icon{
            display: block;
            width: 25px;
            height: 25px;
        }
        .title{
            padding-top: 1px;
            padding-left: 15px;
        }
        &:hover{
            border-color: $border-active;
            background-color: $bg-active;
        }
    }
}

</style>
