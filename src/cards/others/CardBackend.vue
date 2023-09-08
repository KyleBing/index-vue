<template>
    <CardImage title="我的后台"
               class=""
               :no-padding="true"
               :cover="cover"
               :logo="logo"
               page-link="../manager"
    >
        <div class="logo"></div>
    </CardImage>
</template>

<script>
import Card from "@/components/Card.vue";
import CardImage from "@/components/CardImage.vue";
export default {
    name: "CardBackend",
    components: {CardImage, Card},
    data(){
        return {
            cover: require('./../imgs/card-img-backend.png'),
            logo: require('../../views/icon-list/icons/logo-qr.png')
        }
    },
}
</script>

<style scoped lang="scss">
@import "plugin";


</style>
