<template>
    <Card title="聊十分钟的">
        <div class="study-road" v-html="studyRoadHtml"/>
    </Card>
</template>

<script>
import Card from "@/views/Cards/components/Card.vue";

export default {
    name: "CardSelf",
    components: {Card},
    data() {
        return {
            studyRoad: `
                聊聊自己，聊聊从大学到现在，关于 <b>学习</b> 这方面的历程。
                从大学开始。
                大学是在 滨州学院 读的，专业是计算机网络技术，就是倒腾关于网络的东西：组网、路由器规则、交换机、综合布线、HTML基础、JAVA 基础等。期间对媒体这块比较感兴趣，大二的时候就选修了 PS，能做简单的页面效果。
                后来闲着无聊就学习了五笔，也是因为这，在快毕业的时候，从某个五笔网友那里发现这个前端岗位比较有意思，就想做这个。
                毕业后从事美工工作，做简单的页面。也几乎是从头开始学，把 HTML 和 CSS 学了个差不多，一直没碰 js。负责画界面、写页面，期间也没看书或者视频，遇到问题就百度搜，所有知识都是在碰到问题后一个一个搜出来的，搜了得有上万次。
                这中间自学了 Ai(Adobe Illustrator)，从此爱上了 Ai，后来页面中用到的所有的图标都是用 Ai 做的。
                后来买了个 MacMini 用上了 macOS，才知道有 Sketch 这么好用的软件，做 UI 神器，目前个人站点中几乎所有的图标、界面都是用它来完成的。
                再后来，在一个民间滑雪场中做了一套宣传材料（宣传单面、手提袋、易拉宝、大型路牌广告），把自己的 PS 和 AI 技能又拉升了一个层次。期间接过一个外包项目，我负责 UI 和 web 页面的制作，也是这个项目让我想彻底放弃 UI 转 前端，跟客户沟通方案的过程实在是太痛苦了，仿佛自己只是个没有灵魂的工具。所以之后就没有再接过外包项目，有闲暇时间都交给了自己，全都交给了自己的爱好。
                17 年的时候心血来潮不想上班了，回家待了一年自学 Swift，想从事 iOS 开发，期间自己开发了一个比较简单的 app。这是我人生的第二个低谷期。
                到 18 年中去北京找朋友，在他那待了几个月，本来是想找份工作的，也没找到，倒是把北京的景区都逛了个遍，也不负此行。
                19 年初来到济南，算是我人生的第三章，此时才真正开始慢慢啃 js 知识，不再在工作上接手 UI 设计相关的东西，主战前端。最初是用的 jQuery 来做一些表单提交等，在初创公司的那段日子比较忙碌，虽休息时间不多，但我们公司当时同事之间氛围非常好，玩的都跟朋友一样。
                期间学习了 git 和 github 的使用，github 打开了一个新世界的大门，通过 github 接触到了<a target="_blank" href="https://github.com/996icu/996.ICU">996icu</a> 这个项目，也才切实感受到文字的力量如此强大，才知晓每天 8 小时工作的规定是先前国外工人运动的产物。
                用 vue 做的第一个项目是 <a target="_blank" href="http://kylebing.cn/diary">《标题日记》</a>，自己的第一个开源项目，也是我投入精力比较大的项目，至今一直在更新。通过这个项目把 vue 相关的 vue router、 vuex 都了解了个差不多。
                对五笔的爱好引领我实现了几个比较有用的项目。
                为了实现能在 macOS 系统上练习五笔的目的，使用 requirejs 开发了 <a target="_blank" href="https://github.com/KyleBing/typepad">《玫枫跟打器》</a>这个 web 端的五笔跟打器；
                为了解决 Rime 输入法词条添加困难的问题，学习 electron 并开发了 <a target="_blank" href="https://github.com/KyleBing/wubi-dict-editor">《五笔码表助手》</a>这个工具。
                也是因为 electron 让我对 nodejs 有了更深入的了解，也是这份了解才促使我去把用到的所有后台都写成了 nodejs 版的，对于使用 javascript 为主要开发语言的我来说，用 nodejs 比用其它语言爽太多了。
                之后如果再有自己能帮得上的五笔需求，肯定还是会去实现的。

                一路走来，一直都感觉普通互联网小公司对页面视觉效果买单的太少。页面视觉冲击感来源于整体页面传递给人的感觉，它不仅仅是页面布局，而是一套复杂完整的结合体。是页面布局合理、图标统一个性、色彩搭配舒服的结合体，缺一不可。
                我的所有页面，都将在我现有技能基础上呈现出最好的状态，愿你们能喜欢。

                有任何问题可以 Email 我： <a href="mailto:kylebing@163.com">kylebing@163.com</a>
`
        }
    },
    mounted() {
    },
    computed: {
        studyRoadHtml() {
            return this.studyRoad
                .split('\n')
                .map(item => `<p>${item.trim()}</p>`)
                .join('\n')
        }
    },
}
</script>

<style lang="scss">
@import "../../scss/plugin";

.study-road {
    padding: 20px 0;
    p {
        margin-bottom: 5px;
        text-indent: 2rem;
        line-height: 1.5;
        font-size: $fz-m;
        color: $text-content;
        a {
            text-decoration: underline;
            color: $orange;
        }
    }
}

</style>
