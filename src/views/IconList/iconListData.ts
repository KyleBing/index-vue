import icon_diary from '../../assets/icons/logo_diary.png'
import logo_map from '../../assets/icons/logo_map.png'
import logo_manager from '../../assets/icons/logo_manager.png'
import logo_vitepress from '../../assets/icons/logo_vitepress.png'
import logo_gif from '../../assets/icons/logo_gif.gif'
import logo_all_my_life from '../../assets/icons/logo_all_my_life.png'
import logo_bb_keyboard from '../../assets/icons/logo_bb_keyboard.png'
import logo_cbr650r from '../../assets/icons/logo_cbr650r.png'
import logo_car_oil from '../../assets/icons/logo_car_oil.png'
import logo_qr from '../../assets/icons/logo_qr.png'
import logo_name from '../../assets/icons/logo_name.png'
import logo_typepad from '../../assets/icons/logo_typepad.png'
import logo_calculator from '../../assets/icons/logo_calculator.png'
import logo_symbol from '../../assets/icons/logo_symbol.png'
import logo_vps from '../../assets/icons/logo_vps.png'
import logo_image_viewer from '../../assets/icons/logo_image_viewer.png'
import logo_wubi_editor from '../../assets/icons/logo_wubi_editor.png'
import logo_download from '../../assets/icons/logo_download.png'
import logo_unlock_music from '../../assets/icons/logo_unlock_music.png'
import logo_json_table from '../../assets/icons/logo_json_table.png'
import logo_agent from '../../assets/icons/logo_agent.png'
import logo_element_ui_icons from '../../assets/icons/logo_element_ui_icons.png'
import logo_base64 from '../../assets/icons/logo_base64.png'
import logo_ele from '../../assets/icons/logo_ele.png'
import logo_blank from '../../assets/icons/logo_blank.png'
import logo_web_canvas_lost from '../../assets/icons/logo_web_canvas_lost.png'
import logo_web_canvas_loading from '../../assets/icons/logo_web_canvas_loading.png'
import logo_web_canvas_block from '../../assets/icons/logo_web_canvas_block.png'
import logo_web_canvas_heart from '../../assets/icons/logo_web_canvas_heart.png'
import logo_web_canvas_text from '../../assets/icons/logo_web_canvas_text.png'
import logo_iphone from '../../assets/icons/logo_iphone.png'
import logo_painting from '../../assets/icons/logo_painting.png'
import logo_stock from '../../assets/icons/logo_stock.png'
import logo_emoji_scale from '../../assets/icons/logo_emoji_scale.png'
import logo_macicon from '../../assets/icons/logo_macicon.png'
import logo_openstreetmap from '../../assets/icons/logo_openstreetmap.png'
import logo_oimo from '../../assets/icons/logo_oimo.png'
import logo_highway from '../../assets/icons/logo_highway.png'
import logo_web_amazing from '../../assets/icons/logo_web_amazing.png'
import logo_web_v2ex from '../../assets/icons/logo_web_v2ex.png'
import logo_web_pi from '../../assets/icons/logo_web_pi.png'
import logo_web_chiphell from '../../assets/icons/logo_web_chiphell.png'
import logo_web_cube from '../../assets/icons/logo_web_cube.png'
import logo_web_neave from '../../assets/icons/logo_web_neave.png'
import logo_web_cabbi from '../../assets/icons/logo_web_cabbi.png'
import logo_web_chrismckenzie from '../../assets/icons/logo_web_chrismckenzie.png'
import logo_web_dogs from '../../assets/icons/logo_web_dogs.png'
import logo_web_text_character from '../../assets/icons/logo_web_text_character.png'
import logo_web_ps from '../../assets/icons/logo_web_ps.png'
import logo_web_webtoday from '../../assets/icons/logo_web_webtoday.png'
import logo_web_360_view from '../../assets/icons/logo_web_360_view.png'
import logo_web_artist_ib from '../../assets/icons/logo_web_artist_ib.png'
import logo_web_pic_zoom from '../../assets/icons/logo_web_pic_zoom.png'
import logo_web_pointer from '../../assets/icons/logo_web_pointer.png'
import logo_web_racecar from '../../assets/icons/logo_web_racecar.png'
import logo_web_gif from '../../assets/icons/logo_web_gif.gif'
import logo_web_chinese_new_year from '../../assets/icons/logo_web_chinese_new_year.png'
import logo_web_3d from '../../assets/icons/logo_web_3d.png'
import logo_web_useless_website from '../../assets/icons/logo_web_useless_website.png'
import logo_web_raining_outside from '../../assets/icons/logo_web_raining_outside.png'
import logo_web_noisli from '../../assets/icons/logo_web_noisli.png'
import logo_web_game_avoid from '../../assets/icons/logo_web_game_avoid.png'
import logo_keyboard from '../../assets/icons/logo_keyboard.png'

import logo_art_ai from '../../assets/icons/logo_art_ai.png'
import logo_handheld from '../../assets/icons/logo_handheld.png'
import logo_wheel_his from '../../assets/icons/logo_wheel_his.png'
import logo_panda from '../../assets/icons/logo_panda.png'
import logo_size_compare_retro from '../../assets/icons/logo_size_compare_retro.png'
import logo_size_compare_3d from '../../assets/icons/logo_size_compare_3d.png'
import logo_js1k from '../../assets/icons/logo_js1k.png'
import logo_icon_high from '../../assets/icons/logo_icon_high.png'
import logo_su7 from '../../assets/icons/logo_su7.png'
import logo_keyboard_fan from '../../assets/icons/logo_keyboard_fan.png'
import logo_game_cat from '../../assets/icons/logo_game_cat.png'
import logo_strange from '../../assets/icons/logo_strange.png'
import logo_nes_online from '../../assets/icons/logo_nes_online.png'
import logo_red2 from '../../assets/icons/logo_red2.png'
import logo_nude from '../../assets/icons/logo_nude.png'
import logo_hifini from '../../assets/icons/logo_hifini.png'
import logo_ascii from '../../assets/icons/logo_ascii.png'
import logo_an2 from '../../assets/icons/logo_an2.png'
import logo_analog_clock from '../../assets/icons/logo_analog_clock.png'























interface IconItemEntity {
    noPadding: boolean,
    isNew: boolean,
    isBgBlack: boolean,
    pageLink: string,
    icon: any,
    name: string,
}
interface IconGroupEntity{
    title: string,
    icons: Array<IconItemEntity>
}

const iconList: Array<IconGroupEntity> = [
    {
        title: '我的',
        icons: [
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/diary/' ,                        icon: icon_diary ,        name: '日记' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/map/' ,                    icon: logo_map ,          name: '路书' ,     } ,
            { noPadding: true ,  isNew: false,   isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/clock-a/' ,                icon: logo_analog_clock ,  name: '时钟' ,     } ,
            { noPadding: true ,  isNew: false,   isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/clock-a?theme=black' ,     icon: logo_analog_clock ,  name: '时钟-黑' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/manager' ,                       icon: logo_manager ,      name: '后台' ,       } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/readme' ,                        icon: logo_vitepress ,     name: 'README' ,   } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/me/#/gif' ,                      icon: logo_gif ,          name: '像素画' ,     },
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/canvas-my-hole-life?v=1' ,  icon: logo_all_my_life ,  name: '一生的时间' ,  },
            { noPadding: true ,  isNew: true,   isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/bb-keyboard' ,              icon: logo_bb_keyboard ,  name: '黑莓键盘' ,  },
        ]
    },
    {
        title: '工具',
        icons: [
            { noPadding: true ,  isNew: true,  isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/show-keyname' ,            icon: logo_keyboard ,            name: '显示键名' ,      } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/cbr650r' ,                 icon: logo_cbr650r ,            name: 'CBR650R' ,      } ,
            { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/car-oil' ,                 icon: logo_car_oil ,            name: '汽车行程花费' ,      } ,
            { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/qr?hash=two&from=kylebing.cn' ,  icon: logo_qr ,                 name: '挪车提醒' ,     } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/name' ,                    icon: logo_name ,               name: '起名工具' ,      } ,
            { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/typepad' ,                 icon: logo_typepad ,            name: '跟打器' ,      } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/keyboard/' ,               icon: logo_keyboard ,           name: '键盘测试' ,     } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/calculator' ,              icon: logo_calculator ,         name: '计算器' ,      } ,
            { noPadding: true , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/words' ,                   icon: logo_symbol ,             name: '标点处理' ,     } ,
            // { noPadding: false , isNew: false, isBgBlack: false , pageLink: 'http://kylebing.cn/tools/vps' ,                     icon: logo_vps ,                name: 'VPS' ,      } ,
            { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/drop-and-show' ,           icon: logo_image_viewer ,       name: '图片查看器' ,    } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/wubi-dict-editor-web' ,    icon: logo_wubi_editor ,        name: '五笔助手' ,     } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/download' ,                      icon: logo_download ,           name: '常用下载' ,     } ,
            { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/unlock-music' ,            icon: logo_unlock_music ,       name: '音乐解码' ,     } ,

        ]
    },
    {
        title: '开发工具',
        icons: [
            { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/json-table' ,           icon: logo_json_table ,         name: '表格 JSON' ,  } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/useragent' ,            icon: logo_agent ,              name: 'UserAgent' ,  } ,
            { noPadding: true ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/icons' ,                icon: logo_element_ui_icons ,   name: 'element图标' , } ,
            { noPadding: false , isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/base64-text' ,          icon: logo_base64 ,             name: 'Base64文本' , } ,
            { noPadding: false ,  isNew: false, isBgBlack: false,  pageLink: 'http://kylebing.cn/e' ,                          icon: logo_ele ,                name: 'Vue 例子'} ,
        ]
    },
    {
        title: 'Canvas',
        icons: [
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/tools/mine/' ,icon: logo_blank ,name: '我的所有' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=0&titleFontSize=50&lineWidth=10&isShowTitle=1&bgColor=black&title=+++' ,icon: logo_web_canvas_lost ,name: '迷离-+++' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=0&titleFontSize=50&lineWidth=10&isShowTitle=1&bgColor=black&title=HelloWorld' ,icon: logo_web_canvas_lost ,name: '迷离-HW' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=0&titleFontSize=50&lineWidth=10&isShowTitle=1&bgColor=black&title=%E6%88%91' ,icon: logo_web_canvas_lost ,name: '迷离-我' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost/?isShowLine=1&titleFontSize=50&lineWidth=10&isShowTitle=0' ,icon: logo_web_canvas_lost ,name: '迷离-线条' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-lost' ,icon: logo_web_canvas_lost ,name: '迷离' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-loading-canvas' ,icon: logo_web_canvas_loading ,name: '圆圈' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-canvas-bg' ,     icon: logo_web_canvas_block ,  name: '活动方块' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-heart-canvas' ,  icon: logo_web_canvas_heart ,  name: '飘动的心' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-heart-canvas/?hMin=0&hMax=360&countHeart=500&sizeMin=10&sizeMax=50&bgColor=%233d3d3d' ,  icon: logo_web_canvas_heart ,  name: '飘动的心' ,     } ,
            { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://kylebing.cn/test/animate-bg-text-canvas' ,icon: logo_web_canvas_text ,   name: '文字' ,     } ,
        ]
    },
    {
        title: '有趣的网站',
        icons: [
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.senpian.com/aizw',                                       icon:logo_art_ai,                name: 'AI作图鉴赏',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://zhangjiquan.com/',                                           icon:logo_handheld,              name: '掌机圈',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.lishichelun.com/',                                      icon:logo_wheel_his,              name: '历史车轮',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.ipanda.com/',                                            icon:logo_panda,                  name: '熊猫频道',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://retrosizer.com/',                                            icon:logo_size_compare_retro,     name: '🎮尺寸比较',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://comparesizes.com/#/',                                        icon:logo_size_compare_3d,        name: '尺寸比较-3D',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://js1k.com/',                                                  icon:logo_js1k,                  name: 'JS 1k竞赛',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://macosicons.com/#/',                                          icon:logo_icon_high,             name: '高清应用图标',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://gamemcu.com/su7/',                                           icon:logo_su7,                   name: '小米SU7模型',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.zfrontier.com/',                                         icon:logo_keyboard_fan,          name: '装备前线',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://cat.llx.life/',                                              icon:logo_game_cat,              name: '🎮喵喵竞赛',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://wiki.xxiivv.com/site/home.html',                              icon:logo_strange,              name: '奇奇怪怪',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://nes.heheda.top/',                                             icon:logo_nes_online,           name: '🎮NES在线',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://ra2web.com/',                                                 icon:logo_red2,                 name: '🎮红警2',      },
            // { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://videocelebs.net/',                                              icon:logo_nude,               name: 'X18nd',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.hifini.com/',                                             icon:logo_hifini,               name: '音乐磁场',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://asciiflow.com/',                                              icon:logo_ascii,                name: '作图转ASCII',      },
            { noPadding: true, isNew: true, isBgBlack: false, pageLink: 'https://www.an2.net/',                                                icon:logo_an2,                  name: '家长喜欢',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.gsmarena.com/',                                          icon: logo_blank,               name: '所有手机大全',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://neal.fun/design-the-next_iphone/',                           icon: logo_iphone,               name: '我是库克',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://gallerix.asia/',                                             icon: logo_painting,             name: '免费名画',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://dapanyuntu.com/',                                            icon: logo_stock,                name: '大盘田字图',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://javier.xyz/emoji-to-scale',                                  icon: logo_emoji_scale,          name: 'emoji排序',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.macosicongallery.com/',                                  icon: logo_macicon,              name: 'Mac Icon',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.openstreetmap.org/',                                     icon: logo_openstreetmap,        name: 'OpenStreetMap',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://oimo.io/works',                                              icon: logo_oimo,                 name: 'oimo.io',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://hakim.se/',                                                  icon: logo_blank,                name: 'hakim.se',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://kylebing.cn/tools/highway',                                  icon: logo_highway,              name: '高速上的2B们',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.makemepulse.com/',                                       icon: logo_web_amazing,          name: '页面效果哇塞',   },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://2017.makemepulse.com/',                                       icon: logo_web_amazing,          name: '2017',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://2018.makemepulse.com/',                                       icon: logo_web_amazing,          name: '2018',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://2019.makemepulse.com/',                                       icon: logo_web_amazing,          name: '2019',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.v2ex.com/?r=kylebing',                                   icon: logo_web_v2ex,             name: 'V2EX',     },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.shejipi.com/',                                           icon: logo_web_pi,               name: '设计癖',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.chiphell.com/',                                          icon: logo_web_chiphell,         name: 'chiphell', },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://iamthecu.be/',                                               icon: logo_web_cube,             name: '魔方',       },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://neave.com/',                                                 icon: logo_web_neave,            name: 'Neave',    },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://cabbi.bo/enough/',                                            icon: logo_web_cabbi,            name: 'Cabbi',    },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://chrismckenzie.com/',                                         icon: logo_web_chrismckenzie,    name: '小方块',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.omfgdogs.com/',                                          icon: logo_web_dogs,             name: '欢乐小狗狗',    },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://patorjk.com/software/taag/#p=testall&f=Avatar&t=Kyle%20Bing', icon: logo_web_text_character,   name: '字符字符',     },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://ps.gaoding.com/#/',                                          icon: logo_web_ps,               name: '在线PS',     },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://how-i-experience-web-today.com/',                            icon: logo_web_webtoday,         name: '今天的互联网',   },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://www.airpano.org.cn/360photo/china-1000island/',               icon: logo_web_360_view,         name: '360中国千岛',  },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://izzyburton.co.uk/',                                          icon: logo_web_artist_ib,        name: '艺术家IB',    },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://zoomquilt.org/',                                             icon: logo_web_pic_zoom,         name: '不断放大图片',   },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://pointerpointer.com/',                                        icon: logo_web_pointer,          name: '点哪指哪',     },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://bruno-simon.com/',                                           icon: logo_web_racecar,          name: '小赛车',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://greatestgifsofalltime.tumblr.com/',                          icon: logo_web_gif,              name: '唯美gif',    },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://chinesenewyear.net/',                                        icon: logo_web_chinese_new_year, name: '中国年',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://cineshader.com/',                                            icon: logo_web_3d,               name: '一个3D场景',   },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://theuselessweb.com/',                                         icon: logo_web_useless_website,  name: '一堆无用站点',   },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://tympanus.net/Development/RainEffect/index.html#slide-4',     icon: logo_web_raining_outside,  name: '窗外下雨了',    },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'https://www.noisli.com/',                                            icon: logo_web_noisli,           name: '白嗓音',      },
            { noPadding: true, isNew: false, isBgBlack: false, pageLink: 'http://www.sinuousgame.com/',                                        icon: logo_web_game_avoid,       name: '躲避游戏',      },
        ]
    },
]

export {
    iconList
}
