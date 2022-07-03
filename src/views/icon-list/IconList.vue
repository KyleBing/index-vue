<template>
    <div class="icon-list">
        <card-icon v-for="item in icons" :key="item.name"
                   :icon="item.icon" :name="item.name"
                   :page-link="item.pageLink"
        ></card-icon>
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
                {name: '地图工具',pageLink: '../tools/map/', icon: require('./logo-map.png')},
                {name: '图片查看器',pageLink: '../tools/drop-and-show', icon: require('./logo-diary.png')},
                {name: '后台',pageLink: '../manager', icon: require('./logo-backend.png')},
                {name: '跟打器',pageLink: '../tools/typepad', icon: require('./logo-typepad.png')},
                {name: 'VPS',pageLink: '../tools/vps', icon: require('./logo-vps.png')},
            ],
        }
    }
}
</script>

<style scoped  lang="scss">
@import "./../../assets/scss/plugin";
.icon-list{
    padding: 20px 0;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;

}


</style>
