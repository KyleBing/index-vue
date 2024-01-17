<template>
    <icon-list :icons="icons"/>
</template>

<script>
import IconList from "@/views/icon-list/IconList";
export default {
    name: "IconsCanvas",
    components: {IconList},
    data(){
        return {
            icons:[
                {
                    title: 'Canvas',
                    icons: [
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/mine/' ,icon: require('../icons/logo-blank.png') ,name: '我的所有' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=0&titleFontSize=50&lineWidth=10&isShowTitle=1&bgColor=black&title=+++' ,icon: require('../icons/logo-web-canvas-lost.png') ,name: '迷离-+++' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=0&titleFontSize=50&lineWidth=10&isShowTitle=1&bgColor=black&title=HelloWorld' ,icon: require('../icons/logo-web-canvas-lost.png') ,name: '迷离-HW' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=0&titleFontSize=50&lineWidth=10&isShowTitle=1&bgColor=black&title=%E6%88%91' ,icon: require('../icons/logo-web-canvas-lost.png') ,name: '迷离-我' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=1&titleFontSize=50&lineWidth=10&isShowTitle=0' ,icon: require('../icons/logo-web-canvas-lost.png') ,name: '迷离-线条' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost' ,icon: require('../icons/logo-web-canvas-lost.png') ,name: '迷离' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-loading-canvas' ,icon: require('../icons/logo-web-canvas-loading.png') ,name: '圆圈' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-bg' ,     icon: require('../icons/logo-web-canvas-block.png') ,  name: '活动方块' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-heart-canvas' ,  icon: require('../icons/logo-web-canvas-heart.png') ,  name: '飘动的心' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-heart-canvas/?hMin=0&hMax=360&countHeart=500&sizeMin=10&sizeMax=50&bgColor=%233d3d3d' ,  icon: require('../icons/logo-web-canvas-heart.png') ,  name: '飘动的心' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-bg-text-canvas' ,icon: require('../icons/logo-web-canvas-text.png') ,   name: '文字' ,     } ,
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>
