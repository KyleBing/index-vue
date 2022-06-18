<template>
    <div :class="['section', 'no-padding', 'gray', 'card-film', {'white': film.wordTheme === 'white'}]" v-if="film">
        <div class="section-header">
            <div class="title">好剧推荐</div>
        </div>
        <img :src="film.cover" alt="cover" class="cover">
        <div class="intro">
            <div class="title">
                <h2 class="name">{{film.name}} </h2>
                <div class="name-en">{{film.nameEn}}</div>
            </div>

            <dl><dt>类别</dt><dd>{{film.type}}</dd></dl>
            <dl><dt>标签</dt><dd>{{film.tags.join('、')}}</dd></dl>

            <dl><dt>时长</dt><dd>{{film.duration}}</dd></dl>
            <dl><dt>上映</dt><dd>{{film.premiere}}</dd></dl>
            <dl><dt>语言</dt><dd>{{film.language}}</dd></dl>
            <dl><dt>主演</dt><dd>{{film.actors.join(' / ')}}</dd></dl>
            <dl v-if="film.downloadLink.length > 0">
                <dt>下载</dt>
                <dd>
                    <a target="_blank" v-for="item in film.downloadLink" :href="item.downloadLink">{{item.name}}</a>
                </dd>
            </dl>
            <dl><dt>豆瓣</dt><dd><a target="_blank" :href="film.doubanLink">豆瓣页面</a></dd></dl>
            <dl><dt>观感</dt><dd>{{film.comment}}</dd></dl>
        </div>
    </div>
</template>

<script>
import filmData from "./filmData";

export default {
    name: "CardFilm",
    data(){
        return {
            // FILM
            showingFilmId: 0,
            film: null,
        }
    },
    mounted() {
        this.showingFilmId = new Date().getDay()
        if (this.showingFilmId > filmData.length){
            this.showingFilmId = Math.floor(Math.random() * filmData.length)
        }
        this.film = filmData[this.showingFilmId]
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/plugin";

</style>
