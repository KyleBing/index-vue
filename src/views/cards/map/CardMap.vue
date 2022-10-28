<template>
    <CardImage title=""
               class=""
               logo-title="地图工具"
               logo-title-color="#6c6c6c"
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
            cover: require('./map-bg.jpg'),
            logo: require('../../icon-list/icons/logo-map.png')
        }
    },
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/plugin";


</style>
