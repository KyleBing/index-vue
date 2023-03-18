<template>
    <Card class="projects mb-0" title="" v-if="contentHtml">
        <div class="recommend markdown" v-if="diary.is_markdown === 1" v-html="contentHtml"/>
        <div class="recommend" v-else v-html="contentHtml"/>
    </Card>
</template>

<script>
import Card from "@/components/Card";
import axios from "axios";
import { marked } from "marked"

export default {
    name: "CardRecommend",
    components: {Card},
    data(){
        return {
            diary: '',
            contentHtml: ''
        }
    },
    mounted(){
        this.getLatestRecommend()
    },
    methods: {
        getLatestRecommend(){
            axios({
                type: 'get',
                url: '../../portal/diary/latest-recommend',
            })
                .then(res => {
                    if (res.status === 200){
                        this.diary = res.data.data
                        if (this.diary.is_markdown === 1){
                            this.contentHtml = marked.parse(this.diary.content)
                        } else {
                            this.contentHtml = this.getContentHtml(this.diary.content)
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
@import "../../../scss/plugin";

.recommend{
    color: $text-content;
}
</style>
