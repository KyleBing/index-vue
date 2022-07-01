<template>
    <div v-if="innerWidth > innerHeight" class="col" :style="`width: ${span/24*100}%`">
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
    name: "KyleCol"
}
</script>

<style scoped>
.col{
    flex-grow: 1;
    flex-shrink: 0;
}

</style>
