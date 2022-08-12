<template>
    <div class="card-icon" @click="toRoute">
        <div :class="['icon', {'no-padding': isNoPadding}]">
            <img :src="icon" alt="icon">
        </div>
        <div class="name">{{ name }}</div>
    </div>
</template>

<script>
export default {
    props: {
        icon: '',
        name: '',
        pageLink: {
            type: String
        },
        isNoPadding: {
            type: Boolean,
            default: false
        }
    },
    name: "CardIcon",
    methods: {
        toRoute(){
            if (this.pageLink){
                if (/^\.\..*$/.test(this.pageLink)){
                    location = this.pageLink
                } else {
                    this.$router.push(this.pageLink)
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "./../../../assets/scss/plugin";
.card-icon{
    @extend .btn-like;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100px;
    .icon{
        @include transition(all 0.5s);
        @include box-shadow(0 0 0 transparentize(black, 1));
        background-color: transparentize(white, 0.3);
        @include border-radius(13px);
        overflow: hidden;
        height: 60px;
        width: 60px;
        &.no-padding{
            padding: 0;
        }
        padding: 6px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .name{
        color: $text-title;
        margin-top: 10px;
        text-align: center;
        font-size: $fz-sm;
    }
    &:hover{
        .icon{
            @include transition(all 0.2s);
            background-color: white;
            @include box-shadow(12px 25px 5px transparentize(black, 0.9), -2px 20px 5px transparentize(black, 0.9));
            @include transform(translateY(-3px))
        }
        .name{
            //color: white;
        }
    }
    &:active{
        .icon{
            @include transition(all 0.1s);
            @include box-shadow(2px 3px 3px transparentize(black, 0.8), -2px 10px 5px transparentize(black, 0.9));
            @include transform(translateY(0))
        }
    }
}


</style>
