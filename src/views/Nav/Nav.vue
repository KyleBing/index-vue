<template>
    <div class="entrance-list">
        <a class="entrance-item"
           target="_blank"
           href="https://kylebing.blog.csdn.net/">
            <img class="icon" src="../Profile/icon/csdn.svg" alt="CSDN">
            <span class="title">CSDN</span>
        </a>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";


</script>

<style lang="scss" scoped>
@import "../../scss/plugin";
.entrance-list{
    width: 100%;
    background-color: white;
    padding: 5px;
    @include border-radius($radius);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
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
