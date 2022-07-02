<template>
    <div class="index">
        <div class="container" v-cloak>

            <kyle-row>
                <kyle-col :span="8"><card-apple/></kyle-col>
                <kyle-col :span="16"><card-profile/></kyle-col>
            </kyle-row>

            <kyle-row>
                <kyle-col :span="6"><card-clock/></kyle-col>
                <kyle-col :span="6"><card-diary/></kyle-col>
                <kyle-col :span="6"><card-backend/></kyle-col>
                <kyle-col :span="6"><card-image-viewer/></kyle-col>
            </kyle-row>

            <kyle-row>
<!--                <kyle-col :span="12">-->

<!--                </kyle-col>-->
                <kyle-col :span="12">
                    <card-project/>
                </kyle-col>
            </kyle-row>

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
import KyleRow from "@/components/KyleRow";
import KyleCol from "@/components/KyleCol";
import {mapMutations} from "vuex";
import CardBackend from "@/views/cards/others/CardBackend";
import CardCalculator from "@/views/cards/tools/CardCalculator";
export default {
    name: 'Index',
    components: {
        CardCalculator,
        CardBackend,
        KyleCol,
        KyleRow,
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
