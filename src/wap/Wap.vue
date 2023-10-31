<template>
    <div class="wap">
        <wap-profile/>
        <wap-apple/>
    </div>
</template>

<script>

import WapApple from "@/wap/WapApple.vue";
import WapProfile from "@/wap/WapProfile.vue";

export default {
    name: 'Wap',
    components: {WapProfile, WapApple},
    data(){
        return {

        }
    },
    mounted() {
    },
    unmounted() {
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
@import "./wap.scss";
body{
    background: white !important;
}

</style>
