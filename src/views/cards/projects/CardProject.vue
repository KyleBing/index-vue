<template>
    <Card class="projects mb-0">
        <div class="projects-content">
            <div :class="['project-group', `project-${projGroup.value}`]" v-for="projGroup in PROJECTS.filter(item => item.isPublic || IS_LOCAL)" :key="projGroup.value">
                <div class="project-title">
                    <h2>{{ projGroup.title }}</h2>
                </div>
                <div class="project-list">
                    <a :href="proj.path" class="project-list-item" v-for="proj in projGroup.list" :key="proj.title">
                        <div class="detail">
                            <h3 class="title">{{ proj.title }}</h3>
                            <p class="description">{{ proj.description }}</p>
                            <p class="link">{{ proj.path }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </Card>
</template>

<script>
import PROJECTS from "./projectData";
import Card from "@/components/Card";

export default {
    name: "CardProject",
    components: {Card},
    data(){
        return {
            PROJECTS: PROJECTS,

            storageIdentifier : 'index_show_all',
            IS_LOCAL: false,

            count: 34,
        }
    },
    mounted(){
        this.IS_LOCAL =  /^http:\/\/(a\.kylebing\.cn|localhost|192\.168\.\d{1,3}\.\d{1,3})/i.test(location.href)
        switch (localStorage.getItem(this.storageIdentifier)){
            case null: break
            case '1': this.IS_LOCAL = true; break
            case '0': this.IS_LOCAL = false; break
        }
        document.onkeyup = e => {
            if (e.key === 'a' ) {
                console.log(e.key)
                this.IS_LOCAL = !this.IS_LOCAL
                localStorage.setItem(this.storageIdentifier, this.IS_LOCAL ? '1':'0')
            }
        }
    },
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/plugin";

.projects-content{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
}

.project-title{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
    h2{
        flex-shrink: 0;
        flex-grow: 0;
        @include border-radius(0.3rem);
        @extend .unselectable;
        font-size: $fz-m;
        font-weight: normal;
        text-align: center;
    }
}

$cols-md: 8;

.project-group{
    margin-bottom: 2rem;
}

.project-list{}
.project-list-item{
    @include border-radius(2px);
    //margin-bottom: 5px;
    padding: 3px 5px;
    border-bottom: 1px solid $item-border-color;
    &:last-child{
        border-bottom: none;
    }
    @include transition(box-shadow .3s, border-color .3s, transform .3s);

    &:hover{
        @include transition(box-shadow .3s, border-color .3s, transform .3s);
    }

    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    .icon{
        width: 80px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            //-webkit-filter: contrast(180%);
            display: block;
            width: 40px;
        }
    }
    .detail{
        display: flex;
        justify-content: flex-start;
        flex-flow: row nowrap;
        align-items: center;
        flex-grow: 1;
        .title{
            width: 10rem;
            margin-right: $gap;
            font-weight: normal;
            font-size: $fz-m;
            color: $item-title-color;
        }
        .description{
            width: 20rem;
            margin-right: $gap;
            font-size: $fz-sm;
            color: $item-content-color
        }
        .link{
            text-decoration: underline;
            margin-right: $gap;
            font-size: $fz-sm;
            color: $item-content-color
        }
    }
}

@each $name,$color in $label-array {
    .project-#{$name} {
        .project-title{
            h2{
                color: $color;
                //background: -webkit-linear-gradient(top, lighten($color, 5%), $color);
                //background: linear-gradient(top, lighten($color, 5%), $color);
            }
        }
        .project-list-item{
            &:hover{
                border-color: $color;
                background-color: $color;
                @include box-shadow(0.6rem 0.6rem 1.5rem transparentize($color, 0.2));
                @include transform(translateY(size(-5)));
                .title{
                    color: white;
                }
                .description{
                    color: $text-dark-content;
                }
                .link{
                    color: $text-dark-content;
                }
            }
            &:active{
                @include transform(translateY(size(3)));
            }
        }
    }
}


@media (max-width: 1280px) {
    .project-list{
        .project-list-item{
            padding: 5px 3px;
            .title{
                font-size: $fz-m;
            }
            .description{
                display: none;
            }
            .link{
                display: none;
            }
        }
    }
}


</style>
