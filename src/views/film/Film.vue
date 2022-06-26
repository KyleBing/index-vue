<template>
    <div class="film-list">
<!--        <div class="page-title">好剧推荐</div>-->
        <CardFilm :hoverColor="false" :film="film" v-for="film in films" :key="film.id"></CardFilm>
        <div @click="$router.back()" class="back">← back</div>
    </div>
</template>

<script>
import CardFilm from "@/views/cards/films/CardFilm";
import filmData from "@/views/cards/films/filmData";
export default {
    name: "Film",
    components: {CardFilm},
    data() {
        return {
            films: filmData
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/plugin";
.page-title{
    font-size: $fz-huge;
    font-weight: bold;
    margin-bottom: $gap;
}
.film-list{
    padding: 30px;
}

.back{
    text-align: center;
    @extend .btn-like
}

@media (max-width: 1280px) {
    .film-list{
        padding: 10px;
    }
}

</style>
