<template>
    <Card title="好剧推荐"
          :pageLink="pageLink"
          :no-padding="true"
          :class="[ 'no-padding', 'gray', 'card-film', {'white': film.wordTheme === 'white'},{'hover-color': hoverColor}]"
          v-if="film">
        <img :src="film.cover" alt="cover" class="cover">
        <div :class="['intro', film.position]">
            <div class="title">
                <h2 class="name">{{film.name}} </h2>
                <div class="name-en">{{film.nameEn}}</div>
            </div>

            <dl><dt>类别</dt><dd>{{film.type}}</dd></dl>
            <dl><dt>标签</dt><dd>{{film.tags.join('、')}}</dd></dl>

            <dl><dt>时长</dt><dd>{{film.duration}}</dd></dl>
            <dl><dt>上映</dt><dd>{{film.premiere}}</dd></dl>
            <dl><dt>语言</dt><dd>{{film.language}}</dd></dl>
<!--            <dl><dt>主演</dt><dd>{{film.actors.join(' / ')}}</dd></dl>-->
            <dl v-if="film.downloadLink.length > 0">
                <dt>下载</dt>
                <dd>
                    <a target="_blank" v-for="item in film.downloadLink" :href="item.downloadLink">{{item.name}}</a>
                </dd>
            </dl>
            <dl><dt>豆瓣</dt><dd><a target="_blank" :href="film.doubanLink">豆瓣页面</a></dd></dl>
            <dl><dt>观感</dt><dd>{{film.comment}}</dd></dl>
        </div>
    </Card>
</template>

<script>
import Card from "@/components/Card";

export default {
    name: "CardFilm",
    components: {Card},
    props: {
        film: null,
        pageLink: '', // 页面链接
        hoverColor: false, // 是否鼠标悬停时显示颜色
    },
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/plugin";

.card-film{
    display: flex;
    align-items: center;
    height: 500px;
    position: relative;


    &.hover-color{
        @include transition(all, 0.5s);
        filter: saturate(0%);
        &:hover {
            @include transition(all, 0.5s);
            filter: saturate(100%);
        }
    }
    .cover{
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        height: 500px;
        overflow: hidden;
    }

    .intro{
        text-shadow: 1px 1px 1px black;
        padding: 30px;
        z-index: 10;
        right: 150px;
        position: absolute;
        text-align: left;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        @include border-radius($radius);
        //@include backdrop-filter(saturate(180%) blur(5px));
        //@include backdrop-filter(blur(5px));
        .title{
            color: white;
            margin-bottom: $gap;
            font-size: $fz-huge;
            align-items: center;
            .name{
                font-weight: bold;
            }
            .name-en{
                font-size: $fz-big;
                color: $text-film-en;
                font-weight: normal;
            }
        }
        dl{
            margin-bottom: 5px;
            display: flex;
            font-size: $fz-film;
            justify-content: flex-start;
            align-items: flex-start;
            dt{
                color: $text-dark-title;
                letter-spacing: 2px;
                flex-shrink: 0;
                width: 4rem;
                margin-right: 15px;
            }
            dd{
                width: 400px;
                word-break: break-all;
                color: $text-dark-content;
                a{
                    margin-right: 10px;
                    text-decoration: underline;
                    &:hover{
                        color: $green;
                    }
                }
            }
        }
        &.left{
            left: 150px
        }

    }
    &.white{
        .intro{
            text-shadow: 1px 1px 1px white;
            .title{
                color: $text-title;
                .name-en{
                    color: $text-desc;
                }
            }
            dl{
                dt{
                    color: $text-title;
                }
                dd{
                    color: $text-content;
                }
            }
        }
    }
}
@media (max-width: 1280px) {
    .card-film {
        .intro {
            padding: 20px;
            right: 0;
            position: relative;
            .title{
                font-size: $fz-big;
                .name{}
                .name-en{
                    font-size: $fz-m;
                }
            }

            dl {
                font-size: $fz-sm;
                dt {
                }

                dd {
                    width: auto;
                }
            }

        }
    }
}


</style>
