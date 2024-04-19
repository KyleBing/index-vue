<template>
    <div class="icon-list-group" v-if="iconListString">
        <div class="icon-list-header">
            <div class="title">网易云 7日黑胶</div>
        </div>
        <div class="icon-list">
            <CardIcon v-for="item in iconList" :key="item.name"
                       :iconInfo="item"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {CardIconEntity} from "@/views/Music/CardIcon.ts";

const iconList = ref<Array<CardIconEntity>>([])
const iconListString = ref('')
import MusicIconBg from '../../assets/icons/logo_netease_music.png'
import CardIcon from "@/views/Cards/Others/CardIcon.vue";
onMounted(()=>{
    getMusicShareIconList()
})
function getMusicShareIconList(){
    axios({
        method: 'get',
        url: '../../portal/diary/get-latest-public-diary-with-keyword',
        params: {
            keyword: '网易云VIP会员分享'
        }
    })
        .then(res => {
            if (res.status === 200){
                iconListString.value = res.data.data.content
                if (iconListString.value){
                    let itemStringArray = iconListString.value
                        .split('\n')
                        .filter(item => item) // 去除空白行
                    iconList.value = itemStringArray.map(item => {
                        let params = item.split(',').map(param => param.trim())
                        return {
                            noPadding: true,
                            isNew: params[0] === '1',
                            isBgBlack: false,
                            pageLink: params[1],
                            icon: MusicIconBg,
                            name: params[2],
                        }
                    })
                }
            }
        })
}
</script>

<style scoped  lang="scss">
@import "../../scss/plugin";
.icon-list-group{
    padding: 20px 20px;
}
.icon-list-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title{
        padding-left: 10px;
        font-weight: bold;
        font-size: $fz-big;
        margin-bottom: 15px;
        //background-image: $gradient-bg-blue;
        background-image: $gradient-bg-purple;
        //background-image: $gradient-bg-red;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 1s;
        &:hover{
            transition: all 1s;
            background-image: $gradient-bg-blue;
        }
    }
}
.icon-list{
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}

@media (max-width: 1280px) {
    .icon-list{
        padding: 0;
    }
}

@media (prefers-color-scheme: dark) {
    .icon-list-header{
        .title{
            background-image: $gradient-bg-body;
        }
    }
}
</style>
