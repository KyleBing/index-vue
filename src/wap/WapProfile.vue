<template>
    <div class="profile">
        <div v-for="(item, index) in PROFILE" :key="index">
            <div>{{item.title}}</div>
            <div v-html="item.content"></div>
        </div>
    </div>
</template>

<script>
import PROFILE from "../cards/profile/profileData";

export default {
    name: 'WapProfile',
    data(){
        return {
            PROFILE,
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

</style>
