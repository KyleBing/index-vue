<template>
    <div class="index">
        <div class="container" v-cloak>
            <div class="row">
                <div class="col col-lg-8 col-sm-8 col-md-8 col-sm-24 col-xs-24">
                    <div class="col-md-24 col-sm-24 col-xs-24"><card-apple/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24">
                        <icon-list/>
                        <NeteaseMusicShareIconList/>
                    </div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><card-clock/></div>
                </div>
                <div class="col col-lg-16 col-sm-16 col-md-16 col-sm-24 col-xs-24">
                    <div class="col-md-24 col-sm-24 col-xs-24"><card-profile/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><card-recommend/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><card-project/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><DiaryContentCard keyword="关于学习"/></div>
                    <div class="col-md-24 col-sm-24 col-xs-24"><DiaryContentCard keyword="外网访问套餐推荐"/></div>
                </div>
            </div>
        </div>
        <copyright/>
    </div>
</template>

<script>
import Copyright from "@/views/Copyright";
import CardProfile from "@/cards/profile/CardProfile";
import CardApple from "@/cards/apple/CardApple";
import CardProject from "@/cards/projects/CardProject";
import CardClock from "@/cards/clock/CardClock";
import {mapMutations} from "vuex";
import CardIcon from "@/cards/others/CardIcon";
import IconList from "@/views/icon-list/IconList";
import CardSelf from "@/cards/profile/CardSelf";
import CardRecommend from "@/cards/recommend/CardRecommend";
import DiaryContentCard from "@/cards/diaryContentCard/DiaryContentCard";
import NeteaseMusicShareIconList from "@/views/icon-list/NeteaseMusicShareIconList.vue";
export default {
    name: 'Index',
    components: {
        NeteaseMusicShareIconList,
        DiaryContentCard,
        CardRecommend,
        CardSelf,
        IconList,
        CardIcon,
        CardClock, CardProject, CardApple, CardProfile, Copyright},
    data(){
        return {

        }
    },
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
