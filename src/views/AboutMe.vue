<template>
    <div class="row">
        <div class="col col-lg-16 col-sm-16 col-md-16 col-sm-24 col-xs-24">
            <ProfileEntrance/>
            <div class="col-md-24 col-sm-24 col-xs-24 mb-3"><CardProfile/></div>
            <div class="col-md-24 col-sm-24 col-xs-24"><DiaryContentCard keyword="关于学习"/></div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import DiaryContentCard from "@/views/Cards/DiaryContentCard.vue";
import CardProfile from "@/views/Cards/Profile/CardProfile.vue";
import ProfileEntrance from "@/views/Cards/Profile/ProfileEntrance.vue";
</script>

<style scoped>

</style>
