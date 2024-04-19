<template>
    <icon-list :icons="icons"/>
</template>

<script>
import IconList from "@/views/IconList/IconList";
export default {
    name: "IconsSites",
    components: {IconList},
    data(){
        return {
            icons:[
                {
                    title: '有趣的网站',
                    icons: [
                        { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://neal.fun/design-the-next-iphone/',                           icon: require('../icons/logo-iphone.png'),               name: '我是库克',      },
                        { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://gallerix.asia/',                                             icon: require('../icons/logo-painting.png'),             name: '免费名画',      },
                        { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://dapanyuntu.com/',                                            icon: require('../icons/logo-stock.png'),                name: '大盘田字图',      },
                        { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://javier.xyz/emoji-to-scale',                                  icon: require('../icons/logo-emoji-scale.png'),          name: 'emoji排序',      },
                        { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.macosicongallery.com/',                                  icon: require('../icons/logo-macicon.png'),              name: 'Mac Icon',      },
                        { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.openstreetmap.org/',                                     icon: require('../icons/logo-openstreetmap.png'),        name: 'OpenStreetMap',      },
                        { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://oimo.io/works',                                              icon: require('../icons/logo-oimo.png'),                 name: 'oimo.io',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://hakim.se/',                                                  icon: require('../icons/logo-blank.png'),                name: 'hakim.se',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://kylebing.cn/tools/highway',                                  icon: require('../icons/logo-highway.png'),              name: '高速上的2B们',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.makemepulse.com/',                                       icon: require('../icons/logo-web-amazing.png'),          name: '页面效果哇塞',   },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://2017.makemepulse.com/',                                       icon: require('../icons/logo-web-amazing.png'),          name: '2017',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://2018.makemepulse.com/',                                       icon: require('../icons/logo-web-amazing.png'),          name: '2018',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://2019.makemepulse.com/',                                       icon: require('../icons/logo-web-amazing.png'),          name: '2019',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.v2ex.com/?r=kylebing',                                   icon: require('../icons/logo-web-v2ex.png'),             name: 'V2EX',     },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.shejipi.com/',                                           icon: require('../../../assets/icons/logo-web-pi.png'),               name: '设计癖',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.chiphell.com/',                                          icon: require('../../../assets/icons/logo-web-chiphell.png'),         name: 'chiphell', },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://iamthecu.be/',                                               icon: require('../../../assets/icons/logo-web-cube.png'),             name: '魔方',       },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://neave.com/',                                                 icon: require('../../../assets/icons/logo-web-neave.png'),            name: 'Neave',    },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://cabbi.bo/enough/',                                            icon: require('../../../assets/icons/logo-web-cabbi.png'),            name: 'Cabbi',    },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://chrismckenzie.com/',                                         icon: require('../../../assets/icons/logo-web-chrismckenzie.png'),    name: '小方块',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.omfgdogs.com/',                                          icon: require('../../../assets/icons/logo-web-dogs.png'),             name: '欢乐小狗狗',    },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://patorjk.com/software/taag/#p=testall&f=Avatar&t=Kyle%20Bing', icon: require('../../../assets/icons/logo-web-text-character.png'),   name: '字符字符',     },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://ps.gaoding.com/#/',                                          icon: require('../../../assets/icons/logo-web-ps.png'),               name: '在线PS',     },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://how-i-experience-web-today.com/',                            icon: require('../../../assets/icons/logo-web-webtoday.png'),         name: '今天的互联网',   },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://www.airpano.org.cn/360photo/china-1000island/',               icon: require('../../../assets/icons/logo-web-360-view.png'),         name: '360中国千岛',  },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://izzyburton.co.uk/',                                          icon: require('../../../assets/icons/logo-web-artist-ib.png'),        name: '艺术家IB',    },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://zoomquilt.org/',                                             icon: require('../../../assets/icons/logo-web-pic-zoom.png'),         name: '不断放大图片',   },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://txti.es/',                                                    icon: require('../../../assets/icons/logo-web-txti.png'),             name: '文字页面',     },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://pointerpointer.com/',                                        icon: require('../../../assets/icons/logo-web-pointer.png'),          name: '点哪指哪',     },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://bruno-simon.com/',                                           icon: require('../../../assets/icons/logo-web-racecar.png'),          name: '小赛车',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://greatestgifsofalltime.tumblr.com/',                          icon: require('../../../assets/icons/logo-web-gif.gif'),              name: '唯美gif',    },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://chinesenewyear.net/',                                        icon: require('../../../assets/icons/logo-web-chinese-new-year.png'), name: '中国年',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://cineshader.com/',                                            icon: require('../../../assets/icons/logo-web-3d.png'),               name: '一个3D场景',   },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://theuselessweb.com/',                                         icon: require('../../../assets/icons/logo-web-useless-website.png'),  name: '一堆无用站点',   },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://tympanus.net/Development/RainEffect/index.html#slide-4',     icon: require('../../../assets/icons/logo-web-raining-outside.png'),  name: '窗外下雨了',    },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.noisli.com/',                                            icon: require('../../../assets/icons/logo-web-noisli.png'),           name: '白嗓音',      },
                        { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://www.sinuousgame.com/',                                        icon: require('../../../assets/icons/logo-web-game-avoid.png'),       name: '躲避游戏',      },
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>
