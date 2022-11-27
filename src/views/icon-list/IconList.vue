<template>
    <div class="icon-list-group" v-for="(group, index) in iconGroups" :key="index">
        <div class="icon-list-header">
            <div class="title">{{ group.title }}</div>
        </div>
        <div class="icon-list">
            <card-icon v-for="item in group.icons" :key="item.name"
                       :is-bg-black="item.isBgBlack"
                       :icon="item.icon" :name="item.name"
                       :is-new="item.isNew"
                       :is-no-padding="item.noPadding"
                       :page-link="item.pageLink"
            />
        </div>
    </div>

</template>

<script>
import CardIcon from "@/views/cards/others/CardIcon";
export default {
    name: "IconList",
    components: {CardIcon},
    data(){
        return {
            iconGroups: [
                {
                    title: '我的',
                    icons: [
                        { noPadding: true ,  isNew: true,  isBgBlack: false,  pageLink: '../diary/' ,                     icon: require('./icons/logo-diary.png') ,        name: '日记' ,     } ,
                        { noPadding: true , isNew: false, isBgBlack: false,  pageLink: '../manager' ,                    icon: require('./icons/logo-manager.png') ,      name: '后台' ,       } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: '../readme' ,                     icon: require('./icons/logo-doc.png') ,          name: 'README' ,   } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: '../me/gif' ,                     icon: require('./icons/logo-gif.gif') ,          name: '像素画' ,      } ,
                    ]
                },
                {
                    title: '工具',
                    icons: [
                        { noPadding: true ,  isNew: true,  isBgBlack: false,  pageLink: '../tools/keyboard/' ,            icon: require('./icons/logo-keyboard.png') ,     name: '键盘测试' ,     } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: '../tools/map/' ,                 icon: require('./icons/logo-map.png') ,          name: '地图工具' ,     } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: '../tools/words' ,                icon: require('./icons/logo-symbol.png') ,       name: '标点处理' ,     } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: '../tools/drop-and-show' ,        icon: require('./icons/logo-image-viewer.png') , name: '图片查看器' ,    } ,
                        { noPadding: false , isNew: true,  isBgBlack: false,  pageLink: '../tools/typepad' ,              icon: require('./icons/logo-typepad.png') ,      name: '跟打器' ,      } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: '../e/#/base64/base64-text' ,     icon: require('./icons/logo-base64.png') ,       name: 'Base64工具' , } ,
                        { noPadding: false , isNew: false, isBgBlack: false , pageLink: '../tools/vps' ,                  icon: require('./icons/logo-vps.png') ,          name: 'VPS' ,      } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: '../e' ,                          icon: require('./icons/logo-ele.png') ,          name: 'Vue 例子'} ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: '../tools/calculator' ,           icon: require('./icons/logo-calculator.png') ,   name: '计算器' ,      } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: '../tools/wubi-dict-editor-web' , icon: require('./icons/logo-wubi-editor.png') ,  name: '五笔助手' ,     } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: '../download' ,                   icon: require('./icons/logo-download.png') ,     name: '常用下载' ,     } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: '../tools/unlock-music' ,         icon: require('./icons/logo-unlock-music.png') , name: '音乐解码' ,     } ,
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped  lang="scss">
@import "./../../assets/scss/plugin";
.icon-list-group{
    padding: 30px 20px;
}
.icon-list-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title{
        padding-left: 10px;
        font-weight: bold;
        font-size: $fz-big;
        margin-bottom: 15px;
        //background-image: $gradient-bg-blue;
        background-image: $gradient-bg-purple;
        //background-image: $gradient-bg-red;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 1s;
        &:hover{
            transition: all 1s;
            background-image: $gradient-bg-blue;
        }
    }
}
.icon-list{
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}

@media (max-width: 1280px) {
    .icon-list{
        padding: 0;
    }
}

@media (prefers-color-scheme: dark) {
    .icon-list-header{
        .title{
            background-image: $gradient-bg-body;
        }
    }
}
</style>
