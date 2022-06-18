<template>
    <div class="section profile">
        <div class="section-header">
            <div class="title">个人资料</div>
        </div>
        <div class="section-content">
            <!--PROFILE-->
            <div class="profile-content">
                <div class="head-container">
                    <div class="head flipInX animated">
                        <img :src="AVATAR_ARRAY[randomPicId-1]" alt="HeadPic">
                    </div>
                </div>
                <div class="intro">
                    <table class="intro-container">
                        <tbody>
                        <tr v-for="(item, index) in PROFILE" :key="index"><td class="intro-title">{{item.title}}</td><td class="intro-content" v-html="item.content"></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PROFILE from "./profileData";
import AVATAR_ARRAY from "./avatarData";

export default {
    name: "CardProfile",
    data(){
        return{
            picCount: 14, // 头像数量
            randomPicId: 1, //
            PROFILE: PROFILE,
            AVATAR_ARRAY: AVATAR_ARRAY
        }
    },
    mounted() {
        this.randomPicId = Math.floor(Math.random() * this.picCount) + 1
    }
}
</script>

<style scoped>

</style>
