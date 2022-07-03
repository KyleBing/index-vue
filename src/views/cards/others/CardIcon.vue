<template>
    <div class="card-icon" @click="toRoute">
        <div class="icon">
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
        background-color: transparentize(white, 0.5);
        @include border-radius($radius);
        height: 60px;
        width: 60px;
        padding: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .name{
        margin-top: 10px;
        text-align: center;
        font-size: $fz-sm;
    }
    &:hover{
        .icon{
            background-color: white;
        }

    }
}


</style>
