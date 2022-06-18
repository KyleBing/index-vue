<template>
    <div class="card-projects section mb-0">
        <div :class="['project-group', `project-${projGroup.value}`]" v-for="projGroup in PROJECTS.filter(item => item.isPublic || IS_LOCAL)" :key="projGroup.value">
            <div class="project-title">
                <h2>{{ projGroup.title }}</h2>
            </div>
            <div class="project-list">
                <a :href="proj.path" class="project-list-item" v-for="proj in projGroup.list" :key="proj.title">
                    <!--                    <div class="icon">-->
                    <!--                        <img :src="proj.icon" alt="icon">-->
                    <!--                    </div>-->
                    <div class="detail">
                        <h3 class="title">{{ proj.title }}</h3>
                        <p class="description">{{ proj.description }}</p>
                        <p class="link">{{ proj.path }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import PROJECTS from "./projectData";

export default {
    name: "CardProject",
    data(){
        return {
            PROJECTS: PROJECTS,

            storageIdentifier : 'index_show_all',
            IS_LOCAL: false,

            count: 34,
        }
    },
    mounted(){
        this.IS_LOCAL =  /^http:\/\/(a\.kylebing\.cn|localhost|192\.168\.\d{1,3}\.\d{1,3})/i.test(location.href)
        switch (localStorage.getItem(this.storageIdentifier)){
            case null: break
            case '1': this.IS_LOCAL = true; break
            case '0': this.IS_LOCAL = false; break
        }
        document.onkeyup = e => {
            if (e.key === 'a' ) {
                console.log(e.key)
                this.IS_LOCAL = !this.IS_LOCAL
                localStorage.setItem(this.storageIdentifier, this.IS_LOCAL ? '1':'0')
            }
        }
    },
}
</script>

<style scoped>

</style>
