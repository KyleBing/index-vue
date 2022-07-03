<template>
    <CardImage title="地图工具"
               class=""
               :no-padding="true"
               :cover="cover"
               :logo="logo"
               page-link="../tools/map"
    >
        <div class="logo"></div>
    </CardImage>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
export default {
    name: "CardMap",
    components: {CardImage, Card},
    data(){
        return {
            cover: require('./../imgs/card-img-map.png'),
            logo: require('../../icon-list/logo-map.png')
        }
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/plugin";


</style>
