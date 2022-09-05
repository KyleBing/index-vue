<template>
    <div class="index">
        <div class="container" v-cloak>
            <div class="row">
                <div class="col col-lg-8 col-sm-8 col-xs-24">
                    <div class="col-xs-24"><card-apple/></div>
                    <div class="col-xs-24"><icon-list/></div>
<!--                    <div class="col-xs-24"><card-diary/></div>-->
<!--                    <div class="col-xs-24"><card-map/></div>-->
                    <div class="col-xs-24"><card-clock/></div>
                </div>
                <div class="col col-lg-16 col-sm-16 col-xs-24">
                    <div class="col-xs-24"><card-profile/></div>
                    <div class="col-xs-24"><card-self/></div>
                    <div class="col-xs-24"><card-project/></div>
                </div>
            </div>
        </div>
        <copyright/>
    </div>
</template>

<script>
import Copyright from "@/views/Copyright";
import CardProfile from "@/views/cards/profile/CardProfile";
import CardApple from "@/views/cards/apple/CardApple";
import CardProject from "@/views/cards/projects/CardProject";
import CardDiary from "@/views/cards/diary/CardDiary";
import CardClock from "@/views/cards/clock/CardClock";
import CardImageViewer from "@/views/cards/others/CardImageViewer";
import {mapMutations} from "vuex";
import CardBackend from "@/views/cards/others/CardBackend";
import CardCalculator from "@/views/cards/tools/CardCalculator";
import CardMap from "@/views/cards/map/CardMap";
import CardIcon from "@/views/cards/others/CardIcon";
import IconList from "@/views/icon-list/IconList";
import CardSelf from "@/views/cards/profile/CardSelf";
export default {
    name: 'Index',
    components: {
        CardSelf,
        IconList,
        CardIcon,
        CardMap,
        CardCalculator,
        CardBackend,
        CardImageViewer,
        CardClock, CardDiary, CardProject, CardApple, CardProfile, Copyright},
    data(){},
    mounted() {
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
