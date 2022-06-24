<template>
    <div class="index">
        <div class="container" v-cloak>

            <card-film :film="film" page-link="film"/>

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
import CardFilm from "@/views/cards/films/CardFilm";
import CardProfile from "@/views/cards/profile/CardProfile";
import CardApple from "@/views/cards/apple/CardApple";
import CardProject from "@/views/cards/projects/CardProject";
import CardDiary from "@/views/cards/diary/CardDiary";
import CardBackend from "@/views/cards/diary/CardBackend";
import filmData from "@/views/cards/films/filmData";
export default {
    name: 'Index',
    components: {CardBackend, CardDiary, CardProject, CardApple, CardProfile, CardFilm, Copyright},
    data(){
        return {
            // FILM
            film: null,
        }
    },
    mounted() {
        let minuteTail = new Date().getMinutes()%10
        let showingFilmId
        if (minuteTail >= filmData.length){ // leak
            showingFilmId = Math.floor(Math.random() * filmData.length)
        } else {
            showingFilmId = minuteTail
        }
        this.film = filmData[showingFilmId]
    }
}
</script>

<style scoped>

</style>
