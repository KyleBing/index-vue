<template>
    <div class="copyright">
        <p>
            <span>Copyright © 2016-2024 </span>
            <a href="mailto:kylebing@163.com">KyleBing</a>
            <span>All rights reserved. </span>
        </p>
        <p><a href="https://beian.miit.gov.cn">鲁ICP备2022028139号-1</a></p>
        <p>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37011202001794">
                <img class="police-icon" src="../assets/img/policeIcon.png" alt="PoliceIcon">鲁公网安备 37011202001794号
            </a>
        </p>
    </div>
</template>

<script>
export default {
    name: "Copyright"
}
</script>

<style scoped lang="scss">
@import "../scss/plugin";
.copyright{
    padding: 1rem 1rem 2rem ;
    text-align: center;
    font-size: .8rem;
    color: $text-title;
    p{
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a{
        display: flex;
        align-items: center;
        padding: 0 5px;
        &:hover{
            color: $magenta;
        }
    }
    .police-icon{
        margin-right: 3px;
        display: inline-block;
        width: 15px;
        height: 15px;
    }
}

@media (prefers-color-scheme: dark) {
    .copyright{
        color: $text-dark-desc
    }
}

</style>
