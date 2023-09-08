<template>
    <Card title="" class="profile">
        <!--PROFILE-->
        <div class="profile-content">
            <div class="head-container">
                <div class="head flipInX animated" @click="changeAvatar">
                    <img :src="AVATAR_ARRAY[currentAvatarIndex]" alt="HeadPic">
                </div>
                <div class="social-links">
                    <a class="social-link"
                       target="_blank"
                       href="https://kylebing.blog.csdn.net/">
                        <img src="./icon/csdn.svg" alt="CSDN">
                    </a>
                    <a class="social-link"
                       target="_blank"
                       href="https://space.bilibili.com/12729637">
                        <img src="./icon/bilibili.svg" alt="bilibili">
                    </a>
                    <a class="social-link"
                       target="_blank"
                       href="https://weibo.com/u/5446375965">
                        <img src="./icon/weibo.svg" alt="weibo">
                    </a>
                    <a class="social-link"
                       target="_blank"
                       href="mailto:kylebing@163.com">
                        <img src="./icon/email.svg" alt="email">
                    </a>
                    <a class="social-link"
                       target="_blank"
                       href="https://github.com/KyleBing">
                        <img src="./icon/github.svg" alt="github">
                    </a>

                </div>
            </div>
            <div class="intro">
                <table class="intro-container">
                    <tbody>
                    <tr v-for="(item, index) in PROFILE" :key="index">
                        <td class="intro-title">{{item.title}}</td>
                        <td class="intro-content" v-html="item.content"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Card>
</template>

<script>
import PROFILE from "./profileData";
import avatarData from "./avatarData";
import Card from "@/components/Card.vue";

export default {
    name: "CardProfile",
    components: {Card},
    data(){
        return{
            currentAvatarIndex: 1, // 初始 avatar Index
            PROFILE,
            AVATAR_ARRAY: avatarData.avatarArray
        }
    },
    mounted() {
        // 给初始 index 一个随机值
        this.currentAvatarIndex = Math.floor(Math.random() * this.AVATAR_ARRAY.length)
    },
    methods: {
        changeAvatar(){
            let nextIndex = this.currentAvatarIndex + 1
            if (nextIndex >= this.AVATAR_ARRAY.length){
                this.currentAvatarIndex = 0
            } else {
                this.currentAvatarIndex = nextIndex
            }
        }
    }
}
</script>

<style lang="scss">
@import "../../scss/plugin";

.profile{
    @include border-radius($radius)
}

.profile-content{
    min-height: 180px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.head-container{
    width: 200px;
    margin: 0 2rem;
    text-align: right;
    .head{
        cursor: pointer;
        margin: 0 auto;
        height: 10rem;
        width: 10rem;
        border: 0.15rem solid $orange;
        @include border-radius(15rem);
        overflow: hidden;
        &:hover{
            border-color: $blue;
        }
        img {
            width: 100%;
        }
    }
    .social-links{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .social-link{
            display: block;
            @extend .btn-like;
            &:last-child{
                margin-right: 0;
            }
            padding: 5px;
            img {
                display: flex;
                width: 20px;
                height: 20px;
            }
            &:hover{
                background-color: transparentize(black, 0.95);
                @include border-radius(3px);
            }
        }
    }
}

.intro{
    tr{
        vertical-align: top;
    }
    width: 600px;
    align-items: center;


    .intro-container{
        width: 100%;
        p {
            font-size: $fz-big;
            margin-bottom: .2rem;
            font-weight: normal;
        }
        .intro-title{
            padding-bottom: 5px;
            font-size: $fz-m;
            white-space: nowrap;
            padding-right: 20px;
            color: $intro-title-color;
        }
        .intro-content{
            padding-bottom: 5px;
            line-height: 1.5;
            color: $intro-text-color;
            font-size: $fz-m;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            a{
                color: $intro-text-color;
                text-decoration: underline;
                &:hover{
                    color: $orange;
                }
            }
        }
        tr:last-child{
            .intro-title{
                padding-bottom: 0;
            }
            .intro-content{
                padding-bottom: 0;

            }
        }
    }
}




.profile-showed{
    .head-container{
        width: 25%;
        .head{
            float: right;
            margin-right: 2rem;
            border-color: $profile-head-border;
            &:hover{
                border-color: $profile-head-border;
            }
        }
    }
    .intro{
        display: flex;
    }
    .gradient{
        &:after{
            background: -webkit-linear-gradient(left, $gradient-cool);
        }
    }
}

@media (max-width: 1280px) {

    .profile-content{
        width: 100%;
        flex-flow: column nowrap;
    }

    .head-container{
        margin-bottom: 20px;
    }

    .intro{
        width: 100%;
        .intro-container{
            .intro-title{
                font-size: $fz-sm;
            }
            .intro-content{
                font-size: $fz-sm;
                white-space: normal;
            }
            td{
                margin-bottom: 5px;
                word-break: break-all;
            }
        }
    }
}


</style>
