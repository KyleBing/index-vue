<template>
    <div class="index">
        <div class="container" v-cloak>

            <card-film/>

            <div class="row">
                <div class="col"><card-apple/></div>
                <div class="col"><card-profile/></div>
            </div>

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

export default {
    components: {CardProject, CardApple, CardProfile, CardFilm, Copyright},
}
</script>

<style lang="scss">
@import "assets/scss/index";
</style>
