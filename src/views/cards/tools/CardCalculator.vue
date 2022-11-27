<template>
    <CardImage title="我的后台"
               class=""
               :no-padding="true"
               :cover="cover || ''"
               :logo="logo"
               page-link="../manager"
    >
        <div class="logo"></div>
    </CardImage>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
export default {
    name: "CardCalculator",
    components: {CardImage, Card},
    data(){
        return {
            // cover: require('./card-img-backend.png'),
            // logo: require('./logo-qr.png')
            cover: '',
            logo: ''
        }
    },
}
</script>

<style scoped lang="scss">
@import "src/scss/plugin";


</style>
