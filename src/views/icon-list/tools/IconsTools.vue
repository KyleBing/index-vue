<template>
    <icon-list :icons="icons"/>
</template>

<script>
import IconList from "@/views/icon-list/IconList";
export default {
    name: "IconsTools",
    components: {IconList},
    data(){
        return {
            icons:[
                {
                    title: '工具',
                    icons: [
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/car-oil' ,              icon: require('../icons/logo-car-oil.png') ,            name: '汽车行程花费' ,      } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/qr?hash=two' ,                        icon: require('../icons/logo-qr.png') ,                 name: '挪车提醒' ,     } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/name' ,                 icon: require('../icons/logo-name.png') ,               name: '起名工具' ,      } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/typepad' ,              icon: require('../icons/logo-typepad.png') ,            name: '跟打器' ,      } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/keyboard/' ,            icon: require('../icons/logo-keyboard.png') ,           name: '键盘测试' ,     } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/calculator' ,           icon: require('../icons/logo-calculator.png') ,         name: '计算器' ,      } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/words' ,                icon: require('../icons/logo-symbol.png') ,             name: '标点处理' ,     } ,
                        // { noPadding: false , isNew: false, isBgBlack: false , pageLink: 'https://kylebing.cn/tools/vps' ,                  icon: require('../icons/logo-vps.png') ,                name: 'VPS' ,      } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/drop-and-show' ,        icon: require('../icons/logo-image-viewer.png') ,       name: '图片查看器' ,    } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/wubi-dict-editor-web' , icon: require('../icons/logo-wubi-editor.png') ,        name: '五笔助手' ,     } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/download' ,                   icon: require('../icons/logo-download.png') ,           name: '常用下载' ,     } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/unlock-music' ,         icon: require('../icons/logo-unlock-music.png') ,       name: '音乐解码' ,     } ,

                    ]
                },
                {
                    title: '开发工具',
                    icons: [
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/json-table' ,           icon: require('../icons/logo-json-table.png') ,         name: '表格 JSON' ,  } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/useragent' ,            icon: require('../icons/logo-agent.png') ,              name: 'UserAgent' ,  } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/icons' ,                icon: require('../icons/logo-element-ui-icons.png') ,   name: 'element图标' , } ,
                        { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/tools/base64-text' ,          icon: require('../icons/logo-base64.png') ,             name: 'Base64文本' , } ,
                        { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'https://kylebing.cn/e' ,                          icon: require('../icons/logo-ele.png') ,                name: 'Vue 例子'} ,
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>
