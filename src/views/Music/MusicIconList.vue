<template>
    <div class="icon-list-group" v-if="iconListString">
        <div class="icon-list-header">
            <div class="title">网易云 黑胶体验分享</div>
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
