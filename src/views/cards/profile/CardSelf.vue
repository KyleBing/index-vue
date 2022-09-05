<template>
    <Card title="聊十分钟的">
        <div class="self">
            聊聊自己，聊聊从大学到现在，关于学习这方面的历程。
            从大学开始。
            大学是在滨州学院读的，专业是计算机网络技术，期间对媒体这块比较感兴趣就选修了 PS，能做简单的页面效果。快毕业的时候，从网友那里发现这个前端岗位比较有意思，就想做这个。
            毕业后从事美工工作，做简单的页面。也几乎是从头开始学，把 HTML 和 CSS 学了个差不多，一直没碰 js。
               期间自学了 Ai(Adobe Illustrator)，从此爱上了 Ai，后来页面中用到的所有的图标都是用 Ai 做的。
                后来买了个 MacMini 用上了 macOS，才知道有 Sketch 这么好用的软件，做 UI 神器，目前个人站点中几乎所有的图标、界面都是用它来完成的。
                再后来，在一个民间滑雪场中做了一套宣传材料（宣传单面、手提袋、易拉宝、大型路牌广告），把自己的 PS 和 AI 技能又拉升了一个层次。
                之后来到济南才真正开始慢慢啃 js 知识。做的第一个 vue 项目是 <a href="">《标题日记》</a>，这一直是我投入精力比较大的项目。
               再后来做 UI 设计，再后来才转到了比较感兴趣的 Web前端，现在也掌握了实现后台的功能。
            一直以来都感觉互联网市场对页面视觉效果买单的太少。
            页面视觉冲击感来源于整体页面对人的感觉。它不仅仅是页面布局的作用效果，而是一套复杂完整的结合体。它是页面布局合理、图标统一个性、色彩搭配舒服的结合体，缺一不可。
            我的所有页面，都将在我现有技能基础上呈现最好的状态。
        </div>
    </Card>
</template>

<script>
import Card from "@/components/Card";

export default {
    name: "CardSelf",
    components: {Card},
    data(){
        return{
        }
    },
    mounted() {
        this.changeAvatar()
    },
    methods: {
        changeAvatar(){
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/plugin";

.self{
    padding: 20px 0;
    p{
        line-height: 1.5;
        font-size: $fz-m;
        color: $text-content;
    }
}

</style>
