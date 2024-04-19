<template>
    <icon-list :icons="icons"/>
</template>

<script>
import IconList from "@/views/IconList/IconList";
export default {
    name: "IconsMine",
    components: {IconList},
    data(){
        return {
            icons:[
                {
                    title: '我的',
                    icons: [
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/diary/' ,                     icon: require('../icons/logo-diary.png') ,        name: '日记' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/map/' ,                 icon: require('../icons/logo-map.png') ,          name: '路书' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/manager' ,                    icon: require('../icons/logo-manager.png') ,      name: '后台' ,       } ,
                        { noPadding: false , isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/readme' ,                     icon: require('../icons/logo-doc.png') ,          name: 'README' ,   } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/me/gif' ,                     icon: require('../icons/logo-gif.gif') ,          name: '像素画' ,     },
                    ]
                }
            ],
        }
    }
}
</script>

<style scoped>

</style>
