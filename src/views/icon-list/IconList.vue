<template>
    <div class="icon-list">
        <card-icon v-for="item in icons" :key="item.name"
                   :icon="item.icon" :name="item.name"
                   :is-new="item.isNew"
                   :is-no-padding="item.noPadding"
                   :page-link="item.pageLink"
        />
    </div>
</template>

<script>
import CardIcon from "@/views/cards/others/CardIcon";
export default {
    name: "IconList",
    components: {CardIcon},
    data(){
        return {
            icons: [
                { noPadding: true ,  isNew: true,  pageLink: '../diary/' ,                     icon: require('./logo-diary.png') ,        name: '日记' ,     } ,
                { noPadding: false , isNew: false, pageLink: 'film' ,                          icon: require('./logo-film.png') ,         name: '电影推荐' ,     } ,
                { noPadding: false , isNew: false, pageLink: '../tools/map/' ,                 icon: require('./logo-map.png') ,          name: '地图工具' ,     } ,
                { noPadding: true ,  isNew: false, pageLink: '../download' ,                   icon: require('./logo-download.png') ,     name: '常用下载' ,     } ,
                { noPadding: false , isNew: false, pageLink: '../tools/drop-and-show' ,        icon: require('./logo-image-viewer.png') , name: '图片查看器' ,    } ,
                { noPadding: false , isNew: false, pageLink: '../manager' ,                    icon: require('./logo-backend.png') ,      name: '后台' ,       } ,
                { noPadding: false , isNew: false, pageLink: '../tools/typepad' ,              icon: require('./logo-typepad.png') ,      name: '跟打器' ,      } ,
                { noPadding: false , isNew: false, pageLink: '../tools/vps' ,                  icon: require('./logo-vps.png') ,          name: 'VPS' ,      } ,
                { noPadding: false , isNew: false, pageLink: '../e' ,                          icon: require('./logo-ele.png') ,          name: 'Vue 例子'} ,
                { noPadding: true ,  isNew: false, pageLink: '../me/gif' ,                     icon: require('./logo-gif.gif') ,          name: '像素画' ,      } ,
                { noPadding: true ,  isNew: false, pageLink: '../tools/wubi-dict-editor-web' , icon: require('./logo-wubi-editor.png') ,  name: '五笔助手' ,     } ,
                { noPadding: true ,  isNew: false, pageLink: '../tools/calculator' ,           icon: require('./logo-calculator.png') ,   name: '计算器' ,      } ,
                { noPadding: false , isNew: true,  pageLink: '../tools/words' ,                icon: require('./logo-symbol.png') ,       name: '标点处理' ,     } ,
                { noPadding: false , isNew: false, pageLink: '../tools/unlock-music' ,         icon: require('./logo-unlock-music.png') , name: '音乐解码' ,     } ,
                { noPadding: false , isNew: false, pageLink: '../e/#/base64/base64-text' ,     icon: require('./logo-base64.png') ,       name: 'Base64工具' , } ,
                { noPadding: false , isNew: false, pageLink: '../readme' ,                     icon: require('./logo-doc.png') ,          name: 'README' ,   } ,

            ],
        }
    }
}
</script>

<style scoped  lang="scss">
@import "./../../assets/scss/plugin";
.icon-list{
    padding: 30px 20px;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}

@media (max-width: 1280px) {
    .icon-list{
        padding: 0;
    }
}


</style>
