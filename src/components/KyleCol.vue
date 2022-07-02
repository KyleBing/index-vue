<template>
    <div v-if="innerWidth > innerHeight" :class="['col', `col-span`]" >
        <slot></slot>
    </div>
    <div v-else class="col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        span: {
            type: Number
        }
    },
    data(){
        return {
            innerWidth: innerWidth,
            innerHeight: innerHeight
        }
    },
    name: "KyleCol"
}
</script>

<style scoped lang="scss">
@use "sass:math";
@import "../assets/scss/plugin";


.col{
    padding: math.div($gap, 2);
    flex-grow: 1;
    flex-shrink: 0;
}

</style>
