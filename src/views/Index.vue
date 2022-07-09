<template>
    <div class="index">
        <div class="container" v-cloak>

            <div class="row">
                <div class="col col-xs-24 col-sm-24 col-md-8 col-lg-8"><card-apple/></div>
                <div class="col col-xs-24 col-sm-24 col-md-16 col-lg-16"><card-profile/></div>
            </div>

            <div class="row">
                <div class="col col-xs-24 col-sm-12 col-md-8 col-lg-6"><card-clock/></div>
                <div class="col col-xs-24 col-sm-12 col-md-8 col-lg-6"><card-diary/></div>
<!--                <div class="col col-xs-24 col-sm-12 col-md-8 col-lg-6"><card-backend/></div>-->
<!--                <div class="col col-xs-24 col-sm-12 col-md-8 col-lg-6"><card-image-viewer/></div>-->
                <div class="col col-xs-24 col-sm-12 col-md-8 col-lg-6"><card-map/></div>
            </div>

            <icon-list/>

            <div class="row">
                <div class="col col-lg-24">
                    <card-project/>
                </div>
            </div>

            <card-film :film="film" page-link="film"/>

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
import filmData from "@/views/cards/films/filmData";
import CardClock from "@/views/cards/clock/CardClock";
import CardImageViewer from "@/views/cards/others/CardImageViewer";
import {mapMutations} from "vuex";
import CardBackend from "@/views/cards/others/CardBackend";
import CardCalculator from "@/views/cards/tools/CardCalculator";
import CardMap from "@/views/cards/others/CardMap";
import CardIcon from "@/views/cards/others/CardIcon";
import IconList from "@/views/icon-list/IconList";
export default {
    name: 'Index',
    components: {
        IconList,
        CardIcon,
        CardMap,
        CardCalculator,
        CardBackend,
        CardImageViewer,
        CardClock, CardDiary, CardProject, CardApple, CardProfile, CardFilm, Copyright},
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
        this.addScrollEvent()
    },
    unmounted() {
        this.removeScrollEvent()
    },
    methods: {
        ...mapMutations(['SET_SCROLL_TOP']),
        addScrollEvent(){
            onscroll = () => {
                this.SET_SCROLL_TOP(document.documentElement.scrollTop)
            }
        },
        removeScrollEvent(){
            onscroll = null
        }
    }
}
</script>

<style scoped>

</style>
