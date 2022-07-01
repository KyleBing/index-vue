<template>
    <div class="row">
        <slot></slot>
    </div>

</template>

<script>
export default {
    name: "KyleRow"
}
</script>

<style scoped>
.row{
    width: 100%;
    overflow: hidden;
    display: flex;
}

</style>
