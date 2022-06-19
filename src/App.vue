<template>
    <div class="index">
        <div class="container" v-cloak>

            <card-film/>

            <div class="row">
                <div class="col"><card-apple/></div>
                <div class="col"><card-profile/></div>
            </div>

<!--            <div class="row">
                <div class="col"><card-diary/></div>
                <div class="col"><card-backend/></div>
            </div>-->

            <card-project/>

        </div>
        <copyright/>
    </div>
</template>


<script>

import Copyright from "@/views/Copyright";
import CardFilm from "@/views/films/CardFilm";
import CardProfile from "@/views/profile/CardProfile";
import CardApple from "@/views/apple/CardApple";
import CardProject from "@/views/projects/CardProject";
import CardDiary from "@/views/diary/CardDiary";
import CardBackend from "@/views/diary/CardBackend";

export default {
    components: {CardBackend, CardDiary, CardProject, CardApple, CardProfile, CardFilm, Copyright},
}
</script>

<style lang="scss">
@import "assets/scss/index";
</style>
