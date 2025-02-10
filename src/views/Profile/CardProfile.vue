<template>
    <Card
        title="个人资料"
        :is-show-bg="true"
        :is-show-title="false"
        class="profile"
    >
        <!--PROFILE-->
        <div class="profile-content">
            <div class="head-container">
                <div class="head flipInX animated" @click="changeAvatar">
                    <img :src="AvatarArray[currentAvatarIndex]" alt="HeadPic">
                </div>
            </div>
            <div class="intro">
                <table class="intro-container">
                    <tbody>
                    <tr v-for="(item, index) in ProfileData" :key="index">
                        <td class="intro-title">{{item.title}}</td>
                        <td class="intro-content" v-html="item.content"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Card>
</template>

<script lang="ts" setup>
import {ProfileData, AvatarArray} from "./profileData.ts";
import {onMounted, ref} from "vue";
import Card from "@/components/Card.vue";

const currentAvatarIndex = ref(1)

onMounted(()=>{
    currentAvatarIndex.value = Math.floor(Math.random() * AvatarArray.length)
})

function  changeAvatar(){
    let nextIndex = currentAvatarIndex.value + 1
    if (nextIndex >= AvatarArray.length){
        currentAvatarIndex.value = 0
    } else {
        currentAvatarIndex.value = nextIndex
    }
}
</script>

<style lang="scss">
@import "../../scss/plugin";

.profile{
    border-radius: 15px !important;
}

.profile-content{
    min-height: 180px;
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

@media (max-width: $width-md) {
    .profile-content{
        padding: 25px;
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
