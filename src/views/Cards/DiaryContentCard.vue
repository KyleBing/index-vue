<template>
    <Card class="projects mb-0" :title="keyword" :is-show-title="true" v-if="contentHtml">
        <div class="recommend markdown" v-if="diary.is_markdown === 1" v-html="contentHtml"/>
        <div class="recommend" v-else v-html="contentHtml"/>
    </Card>
</template>

<script>
import Card from "@/views/Cards/components/Card.vue";
import axios from "axios";
import { marked } from "marked"

export default {
    name: "DiaryContentCard",
    components: {Card},
    props: {
        keyword: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            diary: '',
            contentHtml: ''
        }
    },
    mounted(){
        this.getLatestPublicDiaryContentWidthKeyword()
    },
    methods: {
        getLatestPublicDiaryContentWidthKeyword(){
            axios({
                type: 'get',
                url: '../../portal/diary/get-latest-public-diary-with-keyword',
                params: {
                    keyword: this.keyword
                }
            })
                .then(res => {
                    if (res.status === 200){
                        this.diary = res.data.data
                        if (this.diary){
                            if (this.diary.is_markdown === 1){
                                this.contentHtml = marked.parse(this.diary.content)
                            } else {
                                this.contentHtml = this.getContentHtml(this.diary.content)
                            }
                        }
                    }
                })
        },
        getContentHtml(content){
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
        },
    },
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
