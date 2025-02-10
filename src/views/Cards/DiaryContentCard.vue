<template>
    <Card class="mb-0" :title="keyword" :is-show-title="true" v-if="contentHtml">
        <div class="recommend markdown" v-if="diary.is_markdown === 1" v-html="contentHtml"/>
        <div class="recommend" v-else v-html="contentHtml"/>
    </Card>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import axios from "axios";
import { marked } from "marked"
import {onMounted, ref} from "vue";

const props = defineProps({
    keyword: {
        type: String,
        default: ''
    }
})

const diary = ref()
const contentHtml = ref('')

onMounted(() =>{
    getLatestPublicDiaryContentWidthKeyword()
})

function getLatestPublicDiaryContentWidthKeyword(){
    axios({
        type: 'get',
        url: '../../portal/diary/get-latest-public-diary-with-keyword',
        params: {
            keyword: props.keyword
        }
    })
        .then(res => {
            if (res.status === 200){
                diary.value = res.data.data
                if (diary.value){
                    if (diary.value.is_markdown === 1){
                        contentHtml.value = marked.parse(diary.value.content)
                    } else {
                        console.log(diary.value)
                        contentHtml.value = getContentHtml(diary.value.content)
                    }
                }
            }
        })
}

function getContentHtml(content: string){
    console.log('content: ', content)
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
@import "../../scss/plugin";

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
