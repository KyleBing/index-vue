<template>
    <div class="copyright">
        <p>Copyright © 2022 <a href="mailto:kylebing@163.com">KyleBing</a> All rights reserved. <a href="https://beian.miit.gov.cn">鲁ICP备2022028139号-1</a></p>
    </div>
</template>

<script>
export default {
    name: "Copyright"
}
</script>

<style scoped lang="scss">
@import "../assets/scss/plugin";
.copyright{
    padding: 1rem 1rem 2rem ;
    text-align: center;
    font-size: .8rem;
    color: $text-title;
    a{
        display: inline-block;
        &:hover{
            color: $magenta;
        }
    }
}

</style>
