<template>
    <Card stitle="">
        <div id="gitalk">

        </div>
    </Card>
</template>

<script>

import Card from "@/components/Card";
import 'gitalk/dist/gitalk.css'
import Gitalk from "gitalk";

export default {
    name: "CardGiTalk",
    components: {Card},
    data(){

        return {

        }
    },
    mounted() {
        const gitalk = new Gitalk({
            clientID: 'f93dc671128b26fd8006',
            clientSecret: 'cc9d9a73f8b2d14c881ad63d19351512c63cb48e',
            repo: 'comments',      // The repository of store comments,
            owner: 'KyleBing',
            admin: ['KyleBing'],
            id: 'kylebing.cn/index',
            distractionFreeMode: false,
            language: 'zh-CN'
        })

        gitalk.render('gitalk')

    },
    unmounted() {
    },
    computed: {
    },
    methods: {

    }
}


</script>

<style scoped lang="scss">
#gitalk{
    width: 100%;
}
</style>
