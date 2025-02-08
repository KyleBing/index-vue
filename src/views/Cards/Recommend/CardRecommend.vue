<template>
    <Card class="projects mb-0" title="最新">
        <div v-if="contentHtml">
            <div class="recommend markdown" v-if="diary.is_markdown === 1" v-html="contentHtml"/>
            <div class="recommend" v-else v-html="contentHtml"/>
        </div>
        <div v-else>
            没有最新动态
        </div>
    </Card>
</template>

<script lang="ts" setup>
import axios from "axios";
import { marked } from "marked"
import {onMounted, ref} from "vue";
import {DiaryEntityDatabase} from "@/entity/Diary.ts";
import Card from "@/views/Cards/components/Card.vue";

const diary = ref<DiaryEntityDatabase>({})
const contentHtml = ref('')

onMounted(()=>{
    getLatestRecommend()
})

function getLatestRecommend(){
    axios({
        method: 'get',
        url: '../../portal/diary/latest-recommend',
    })
        .then(res => {
            if (res.status === 200){
                diary.value = res.data.data
                if (diary){
                    if (diary.value.is_markdown === 1){
                        contentHtml.value = marked.parse(diary.value.content)
                    } else {
                        contentHtml.value = getContentHtml(diary.value.content)
                    }
                }
            }
        })
}
function getContentHtml(content: string){
    let isInCodeMode = /\[ ?code ?\]/i.test(content)
    if (isInCodeMode){
        return `<pre class="code">${content}</pre>`
    } else {
        let contentArray = content.split('\n')
        let contentHtml = ""
        contentArray.forEach(item => {
            if (item === ''){
                contentHtml += '<br/>'
            } else {
                contentHtml += `<p>${item}</p>`
            }
        })
        return contentHtml
    }
}
</script>

<style scoped lang="scss">
@import "../../../scss/plugin";

.recommend{
    width: 100%;
    color: $text-content;
}
@media (prefers-color-scheme: dark) {
    .recommend{
        color: $dark-text-desc;
    }
}
</style>
