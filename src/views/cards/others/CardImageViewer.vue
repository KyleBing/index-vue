<template>
    <CardImage title="图片批量查看器"
               class="gray"
               :no-padding="true"
               :cover="cover"
               :logo="null"
               logo-title="图片查看器"
               page-link="../tools/drop-and-show"
    >
        <div class="logo"></div>
    </CardImage>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
export default {
    name: "CardImageViewer",
    components: {CardImage, Card},
    data(){
        return {
            cover: require('./../imgs/card-img-imgs.png'),
            logo: require('../../icon-list/icons/logo-diary.png')
        }
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/plugin";
img{
    height: 200px;
    display: block;
}

</style>
