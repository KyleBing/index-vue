<template>
    <div class="icon-list">
        <card-icon v-for="item in icons" :key="item.name"
                   :icon="item.icon" :name="item.name"
                   :is-no-padding="item.noPadding"
                   :page-link="item.pageLink"
        />
    </div>
</template>

<script>
import CardIcon from "@/views/cards/others/CardIcon";
export default {
    name: "IconList",
    components: {CardIcon},
    data(){
        return {
            icons: [
                {name: '电影推荐', noPadding: false, pageLink: 'film', icon: require('./logo-film.png')},
                {name: '地图工具', noPadding: false, pageLink: '../tools/map/', icon: require('./logo-map.png')},
                {name: '常用下载', noPadding: true, pageLink: '../download', icon: require('./logo-download.png')},
                {name: '图片查看器', noPadding: false, pageLink: '../tools/drop-and-show', icon: require('./logo-image-viewer.png')},
                {name: '后台', noPadding: false, pageLink: '../manager', icon: require('./logo-backend.png')},
                {name: '跟打器', noPadding: false, pageLink: '../tools/typepad', icon: require('./logo-typepad.png')},
                {name: 'VPS', noPadding: false, pageLink: '../tools/vps', icon: require('./logo-vps.png')},
                {name: 'Vue 例子', noPadding: false, pageLink: '../e', icon: require('./logo-ele.png')},
                {name: '像素画', noPadding: true, pageLink: '../me/gif', icon: require('./logo-gif.gif')},
                {name: '五笔助手', noPadding: true, pageLink: '../tools/wubi-dict-editor-web', icon: require('./logo-wubi-editor.png')},
                {name: '计算器', noPadding: true, pageLink: '../tools/calculator', icon: require('./logo-calculator.png')},
                {name: '标点处理', noPadding: false, pageLink: '../tools/words', icon: require('./logo-symbol.png')},
                {name: '音乐解码', noPadding: false, pageLink: '../tools/unlock-music', icon: require('./logo-unlock-music.png')},
                {name: 'Base64工具', noPadding: false, pageLink: '../e/#/base64/base64-text', icon: require('./logo-base64.png')},
                {name: 'README', noPadding: false, pageLink: '../readme', icon: require('./logo-doc.png')},
            ],
        }
    }
}
</script>

<style scoped  lang="scss">
@import "./../../assets/scss/plugin";
.icon-list{
    padding: 30px 20px;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}


</style>
