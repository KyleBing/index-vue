<template>
   <router-view/>
</template>


<script>


import {mapMutations} from "vuex";

export default {
    mounted() {
        this.SET_INSETS({
            height: innerHeight,
            width: innerWidth,
        })
        onresize = () => {
            this.SET_INSETS({
                height: innerHeight,
                width: innerWidth,
            })
        }
    },
    methods: {
        ...mapMutations(['SET_INSETS'])
    }
}
</script>

<style lang="scss">
@import "scss/index";
</style>
