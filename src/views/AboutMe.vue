<template>
    <div class="index">
        <div class="container" v-cloak>
            <div class="row">
                <div class="col col-lg-16 col-sm-16 col-md-16 col-sm-24 col-xs-24">
                    <div class="col-md-24 col-sm-24 col-xs-24"><card-profile/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><card-project/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><DiaryContentCard keyword="关于学习"/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><DiaryContentCard keyword="外网访问套餐推荐"/></div>
                </div>
            </div>
        </div>
        <copyright/>
    </div>
</template>

<script lang="ts" setup>
import Copyright from "@/views/Copyright";
import CardProfile from "@/cards/profile/CardProfile";
import CardProject from "@/cards/projects/CardProject";
import DiaryContentCard from "@/cards/diaryContentCard/DiaryContentCard";
</script>

<style scoped>

</style>
