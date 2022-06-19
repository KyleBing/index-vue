<template>
    <Card title="个人资料" class="profile">
        <!--PROFILE-->
        <div class="profile-content">
            <div class="head-container">
                <div class="head flipInX animated" @click="changeAvatar">
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
    </Card>
</template>

<script>
import PROFILE from "./profileData";
import AVATAR_ARRAY from "./avatarData";
import Card from "@/components/Card";

export default {
    name: "CardProfile",
    components: {Card},
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
    },
    methods: {
        changeAvatar(){
            this.randomPicId = Math.floor(Math.random() * this.picCount) + 1
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/plugin";

.profile{
    @include border-radius($radius)
}

.profile-content{
    min-height: 150px;
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
