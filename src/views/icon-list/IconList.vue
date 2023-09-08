<template>
    <div class="icon-list-group" v-for="(group, index) in iconGroupList" :key="index">
        <div class="icon-list-header">
            <div class="title">{{ group.title }}</div>
        </div>
        <div class="icon-list">
            <card-icon v-for="item in group.icons" :key="item.name"
                       :iconInfo="item"
                       :is-bg-black="item.isBgBlack"
                       :icon="item.icon" :name="item.name"
                       :is-new="item.isNew"
                       :is-no-padding="item.noPadding"
                       :page-link="item.pageLink"
            />
        </div>
    </div>
</template>

<script>
import iconGroupList from "@/views/icon-list/iconListData.js";
import CardIcon from "@/cards/others/CardIcon";

export default {
    name: "IconList",
    components: {CardIcon},
    data(){
        return {
            iconGroupList,
        }
    }
}
</script>

<style scoped  lang="scss">
@import "../../scss/plugin";
.icon-list-group{
    padding: 20px 20px;
}
.icon-list-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title{
        padding-left: 10px;
        font-weight: bold;
        font-size: $fz-big;
        margin-bottom: 15px;
        //background-image: $gradient-bg-blue;
        background-image: $gradient-bg-purple;
        //background-image: $gradient-bg-red;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 1s;
        &:hover{
            transition: all 1s;
            background-image: $gradient-bg-blue;
        }
    }
}
.icon-list{
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}

@media (max-width: 1280px) {
    .icon-list{
        padding: 0;
    }
}

@media (prefers-color-scheme: dark) {
    .icon-list-header{
        .title{
            background-image: $gradient-bg-body;
        }
    }
}
</style>
