<template>
    <div class="row">
        <div class="col col-lg-16 col-sm-16 col-md-16 col-sm-24 col-xs-24">
            <div class="col-md-24 col-sm-24 col-xs-24"><CardProfile/></div>
            <div class="col-md-24 col-sm-24 col-xs-24"><CardProject/></div>
            <div class="col-md-24 col-sm-24 col-xs-24"><DiaryContentCard keyword="关于学习"/></div>
            <div class="col-md-24 col-sm-24 col-xs-24"><DiaryContentCard keyword="外网访问套餐推荐"/></div>
        </div>
    </div>
    <Copyright/>
</template>

<script lang="ts" setup>
import CardProject from "@/views/Cards/Projects/CardProject.vue";
import DiaryContentCard from "@/views/Cards/DiaryContentCard.vue";
import Copyright from "@/views/Copyright.vue";
import CardProfile from "@/views/Cards/Profile/CardProfile.vue";
</script>

<style scoped>

</style>
