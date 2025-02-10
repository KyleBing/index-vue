<template>
    <div class="index">
        <div v-cloak>
            <div class="mb-4">
                <CardApple/>
            </div>
            <div class="mb-2">
                <IconList/>
                <MusicIconList/>
            </div>
        </div>
        <Copyright/>
    </div>
</template>

<script lang="ts" setup>
import Copyright from "./Copyright.vue";
import CardApple from "@/views/Apple/CardApple.vue";
import MusicIconList from "./Music/MusicIconList.vue";
import IconList from "./IconList/IconList.vue";

</script>

<style scoped>

</style>
