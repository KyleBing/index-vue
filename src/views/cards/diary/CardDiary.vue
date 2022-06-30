<template>
    <CardImage title="日记" class="gray" :no-padding="true" :cover="cover">
    </CardImage>
</template>

<script>
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
export default {
    name: "CardDiary",
    components: {CardImage, Card},
    data(){
        return {
            cover: require('./diary.png')
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/plugin";
img{
    height: 200px;
    display: block;
}

</style>
