const APPLE = [
    {title: 'Apple 处理器' , icon: 'tools/apple-chip/'                , isPublic: true , description: 'Apple 历代处理器参数'  , path: '/tools/apple-chip'} ,
    {title: 'iPad'      , icon: 'tools/ipad/img/ipad_white@3x.png' , isPublic: true , description: 'iPad 所有机型参数'    , path: '/tools/ipad'}       ,
    {title: 'iPhone'    , icon: 'tools/iphone'                     , isPublic: true , description: 'iPhone 所有机型参数'  , path: '/tools/iphone'}     ,
    {title: 'AirPods'   , icon: 'tools/airpods'                    , isPublic: true , description: 'AirPods 所有机型参数' , path: '/tools/airpods'}    ,
]

const PROJECTS = [
    {
        title: '我的',
        value: 'most',
        isPublic: true,
        list: [
            {title: '日记'        , icon: '',isPublic: true , description: '纯文本日记项目，一目了然，已开源' , path: '/diary'}                           ,
            {title: '我的后台'      , icon: '',isPublic: true , description: '后台：日记、码表、QR'      , path: '/manager'}                         ,
            {title: '联系我'       , icon: '',isPublic: true , description: 'kylebing@163.com' , path: 'mailto:kylebing@163.com'}         ,
            // {title: 'README' , icon: '',isPublic: true , description: '一些文档说明'           , path: '/readme'}                          ,
            {title: 'CSDN'      , icon: '',isPublic: true , description: '技术博客主页'           , path: 'https://kylebing.blog.csdn.net/'} ,
            {title: 'GitHub'    , icon: '',isPublic: true , description: 'GitHub 主页'        , path: 'https://github.com/KyleBing'}     ,
        ],
    },
    {
        title: '最近搞的小东西',
        value: 'latest',
        isPublic: true,
        list: [
            {title: '像素画', isPublic: true, description: 'Divoom 像素画', path: '/me/gif'},
            {title: '计算器', isPublic: true, description: '简易算式', path: '/tools/calculator'},
            {title: '码表助手', isPublic: true, description: '码表助手 web 版', path: '/tools/wubi-dict-editor-web'},
            {title: '地图工具', isPublic: true, description: '济南骑行路线推荐', path: '/tools/map'},
            {title: '图片转base64', isPublic: true, description: '图片base64互转', path: '/e/#/tools/base642file'},
            {title: '玫枫跟打器', isPublic: true, description: '网页版，开源，五笔跟打器', path: '/tools/typepad'},
            {title: 'Vue例子', isPublic: true, description: 'element 例子', path: '/e/'},
            // {title: '图片一览', isPublic: true, description: 'DropZone', path: '/test/drop'},
            // {title: '九号邀请码', isPublic: true, description: '九号电动车购车邀请码', path: '/ninebot'},
            {title: '挪车告示', isPublic: true, description: '贴在车上的二维码页面', path: '/qr'},
            // {title: 'QR', isPublic: false, description: '二维码信息预览', path: '/qr?hash=tina'},
        ],
    },

    {
        title: '工具',
        value: 'tool',
        isPublic: true,
        list:  [
            {title: '词库管理工具', isPublic: true, description: '基于 electron', path: 'https://github.com/KyleBing/wubi-dict-editor'},
            {title: '玫枫跟打器', isPublic: true, description: '网页版，开源，五笔跟打器', path: '/tools/typepad'},
            {title: '常用下载', isPublic: true, description: '常用文件下载，工具等', path: '/download'},
            {title: '图标查找', isPublic: true, description: '查找 Ele Fa iView 图标', path: '/tools/icons'},
            {title: '苹果产品图', isPublic: true, description: '产品尺寸示意图，各角度', path: '/tools/apple'},
            {title: '济南车管所', isPublic: true, description: '济南车管所分布图', path: '/tools/map/#/info/car-manage'},
            {title: '音乐解密工具', isPublic: true, description: '转QQ(qmc)、网易云(ncm)自有音乐格式到 mp3', path: '/tools/music-unlock'},
            {title: '周报格式化', isPublic: false, description: '周报格式化工具', path: '/tools/summary'},
            {title: '饥荒', isPublic: true, description: '饥荒物品参考书', path: '/tools/starve/dist'},
            {title: '汉字列表', isPublic: true, description: 'unicode汉字列表', path: '/tools/characters'},
            {title: '想买的东西', isPublic: false, description: '想要买的东西', path: '/tools/buy-list'},
            {title: '标点处理', isPublic: true, description: '中英文标点转换', path: '/tools/words'},
            {title: 'UserAgent', isPublic: true, description: '显示当前平台浏览器：微信，支付宝', path: '/tools/useragent'},
            {title: '百度文库', isPublic: true, description: '获取当前页文库内容', path: '/tools/baidudoc'},
            {title: 'VPS', isPublic: true, description: 'BandwagonHost 主机信息', path: '/tools/vps'},
            // {title: '电影天堂', isPublic: true, description: '电影天堂最新电影简化页面', path: '/tools/films'},
            // {title: 'IP 地址地域显示', isPublic: true, description: '搜狐 IP 地址获取 API', path: '/tools/get-client-ip'},
            // {title: '贴吧签到', isPublic: true, description: '百度贴吧自动签到', path: 'tieba'},
            // {title: 'MarkDown', isPublic: true, description: 'MarkDown 语法说明', path: '/tools/markdown'},
            // {title: 'Apps', isPublic: true, description: '一些有用的小程序', path: '/tools/apps'},
            // {title: '比例计算', isPublic: true, description: '屏幕比例计算', path: '/tools/ratio'},
            // {title: '黑莓工程', isPublic: true, description: '黑莓工程模式解锁码', path: '/tools/blackberry_code'},
            // {title: '食堂菜谱', isPublic: true, description: '以前食堂菜谱', path: '/tools/food'},
            // {title: 'iPhone', isPublic: true, description: '之前买二手5s/6s用到的信息', path: '/tools/iphone'},
            // {title: 'Rime皮肤', isPublic: true, description: 'Rime 皮肤编辑器，小狼毫', path: '/tools/rime_skin_editor'},
            // {title: 'SSList', isPublic: true, description: '规则', path: 'https://github.com/KyleBing/sslist'},
            // {title: '五笔码表', isPublic: true, description: '86极点码表 for 小狼毫，鼠须管', path: 'https://github.com/KyleBing/rime-wubi86-jidian'},
            // {title: 'XXOO', isPublic: true, description: '', path: '/tools/xo'},
        ]
    },

    {
        title: '页面',
        value: 'page',
        isPublic: false,
        list:  [
            {title: '招聘页面', isPublic: true, description: '滑雪场招聘页面', path: '/proj-page/alipay'},
            {title: '车铺子下载', isPublic: true, description: '车铺子下载页面', path: '/proj-page/car-download'},
            {title: 'Grass', isPublic: true, description: '花木交易页面', path: '/proj-page/grass'},
            {title: '房屋录入', isPublic: true, description: '信息录入', path: '/proj-page/house'},
            {title: 'Nova', isPublic: true, description: '', path: '/proj-page/nova'},
            {title: '付款页面', isPublic: true, description: '', path: '/proj-page/pay-alipay'},
            {title: '付款页面-红', isPublic: true, description: '', path: '/proj-page/pay-choose-channel'},
            {title: '付款页面-蓝色', isPublic: true, description: '', path: '/proj-page/pay-confirm'},
            {title: '付款页面-蓝色', isPublic: true, description: '', path: '/proj-page/pay-confirm'},
            {title: '付款选择', isPublic: true, description: '2015年 车铺子', path: '/proj-page/pay-page'},
            {title: '付款倒计时', isPublic: true, description: '', path: '/proj-page/pay-weixin-original'},
            {title: '信息录入', isPublic: true, description: '个人信息录入', path: '/proj-page/personal-info'},
            {title: '老工作日志', isPublic: true, description: '', path: '/proj-page/worklog'},
            {title: '接口测试地址', isPublic: true, description: '', path: '/proj-page/qr-test-portal.html'},
            {title: '服务器信息', isPublic: true, description: '', path: '/proj-page/servers'},
        ],
    },
    {
        title: 'API',
        value: 'api',
        isPublic: false,
        list:  [
            {title: '饥荒', isPublic: true, description: '饥荒游戏物品数据', path: '/dontstarve/?type=query&table=characters'},
            // {title: '二维码', isPublic: true, description: '二维码生成', path: '/tools/qr/?text=http://kylebing.cn'},
        ],
    },
    {
        title: '测试',
        value: 'test',
        isPublic: true,
        list:  [
            {title: 'Full Calendar', isPublic: true, description: '日程排布工具', path: '/test/fullcalendar/'},
            {title: 'Service Worker', isPublic: true, description: 'CacheStorage 使网页可离线访问', path: '/test/service-worker/'},
            {title: 'Touch Event', isPublic: true, description: '移动端 touch 事件', path: '/test/touch-event/'},
            {title: 'Grid CSS', isPublic: true, description: 'Grid css 测试', path: '/test/grid'},
            {title: '鼠标滚轮测试', isPublic: true, description: 'window.onscroll 实现图片内容变化', path: '/test/scroll'},
            {title: 'IndexDB', isPublic: true, description: 'window IndexDB测试', path: '/test/indexdb'},
            {title: '关闭页面提醒', isPublic: true, description: 'window onbeforeunload 事件', path: '/test/unload-event'},
            {title: 'iOS 更新齿轮', isPublic: true, description: '旋转 iOS 设置图标', path: '/test/gear'},
            {title: 'Clipboard.js', isPublic: true, description: 'JS 复制插件', path: '/test/clipboard'},
            {title: '文字跑马', isPublic: false, description: '替代 marquee 标签', path: '/test/marquee'},
            {title: 'Animation', isPublic: false, description: 'css animation translate3D', path: '/test/animate'},
            {title: '滑动日期选择', isPublic: false, description: '滑动日期选择器', path: 'lib/swipe-datepicker'},
            {title: 'Websocket', isPublic: true, description: 'websocket 测试', path: '/test/websocket'},
            {title: '1px', isPublic: false, description: 'web 1px 间隔线', path: '/test/1px'},
            {title: 'checkbox', isPublic: false, description: 'input: checkbox 美化', path: '/test/checkbox'},
            {title: 'flex', isPublic: false, description: 'flex 测试', path: '/test/flex'},
            {title: '表单提交', isPublic: false, description: '表单提交测试 看console', path: '/test/form_request'},
            {title: 'inline-block', isPublic: false, description: 'inline-block 测试', path: '/test/inline-block'},
            {title: '随机数', isPublic: false, description: '随机数显示', path: '/test/random_number'},
            {title: '递归', isPublic: false, description: '递归计算 n!', path: '/test/recursion'},
            {title: 'Alipay', isPublic: false, description: '支付宝支付 web api', path: 'api/alipay'},
            {title: '分组', isPublic: true, description: "根据日期不同 分组显示", path: '/test/sortout'},
            {title: '瀑布流', isPublic: true, description: '图片瀑布流', path: '/test/waterfall'},],
    },
    {
        title: '模板',
        value: 'template',
        isPublic: false,
        list:  [
            {title: 'ColorAdmin', isPublic: false, description: 'Color Admin Ajax', path: '/template/front/coloradmin/admin/template/template_ajax'},
            {title: 'ColorAdmin', isPublic: false, description: 'ColorAdmin 文档说明', path: '/template/front/coloradmin/admin/documentation'},
            {title: '黑白', isPublic: false, description: '黑白色调文字模板', path: '/template/front/black'},
            {title: 'Resume', isPublic: false, description: '个人简历模板', path: '/template/front/resume'},
            {title: 'Vegetables', isPublic: false, description: '蔬菜模板', path: '/template/front/vegetables'}],
    },
    {
        title: '尚润',
        value: 'work',
        isPublic: false,
        list: [
            {title: 'App 下载', isPublic: true, description: '三川教育app下载', path: '/work/share/download.html'},
            {title: '三川 app 注册', isPublic: true, description: '三川教育app注册', path: '/work/share/register.html'},
            {title: '尚润官网', isPublic: true, description: '尚润官网', path: '/work/index'},
        ],
    },
    {
        title: '泽轩',
        value: 'proj',
        isPublic: false,
        list: [
            {title: '生物科技-移动端', isPublic: true, description: '生物科技官网', path: '/proj/JiNan/biology-mobile/'},
            {title: '生物科技', isPublic: true, description: '生物科技官网', path: '/proj/JiNan/biology/'},
            {title: '短视频', isPublic: true, description: '短视频网站', path: '/proj/JiNan/videos/'},
            {title: '屈蜂堂', isPublic: true, description: '泽轩食品', path: '/proj/JiNan/food/'},
            {title: '集团官网', isPublic: true, description: '泽轩集团官网', path: '/proj/JiNan/zx/'},
            {title: '涨跌宝 new', isPublic: true, description: '涨跌宝新版', path: '/proj/JiNan/rising-fall/'},
            {title: '涨跌宝 old', isPublic: true, description: '涨跌宝旧版', path: '/proj/JiNan/rising/'},
            {title: '佰汇官网', isPublic: true, description: '佰汇官网', path: '/proj/JiNan/baihui/'},
            {title: '生物小程序', isPublic: true, description: '', path: '/proj/JiNan/biology-mini/'},
        ],
    },
    {
        title: '惠民 & 滨州',
        value: 'proj',
        isPublic: false,
        list: [
            {title: '移动洗车', isPublic: true, description: '', path: '/proj/BinZhou/car/'},
            {title: '两化融合', isPublic: true, description: '', path: '/proj/BinZhou/center/'},
            {title: '办工系统', isPublic: true, description: '', path: '/proj/HuiMin/bank/'},
            {title: '花木通', isPublic: true, description: '', path: '/proj/HuiMin/hmt/'},
            {title: '遇见爱', isPublic: true, description: '', path: '/proj/HuiMin/meetlove/'},
            {title: '瑞平项目列表', isPublic: true, description: '', path: '/proj/HuiMin/ruiping-password/'},
            {title: '新东方官网', isPublic: true, description: '', path: '/proj/HuiMin/xdf/'},
        ],
    },
    {
        title: '其它',
        value: 'other',
        isPublic: true,
        list:  [
            {title: 'Bandwagon VPS', isPublic: true, description: '6.38% 优惠券： BWH3HYATVBJW', path: 'https://bwh88.net/aff.php?aff=10480'}, ]
    },
]

const PROFILE = [
    {title: "个人资料", content: "邴新科，web前端，山东济南，single，<a href='https://weibo.com/kylebing'>@微博</a> <a href='https://space.bilibili.com/12729637?from=search&seid=17604938691388481920'> @Bilibili</a>"},
    {title: "喜欢音乐", content: `<a target='_blank' href='https://music.163.com/playlist?id=368268862&userid=79759260'> 
                                <a target='_blank' href='https://music.163.com/playlist?id=368268862&userid=79759260'>《依兰爱情故事》</a> 
                                <a target='_blank' href='https://music.163.com/playlist?id=368268862&userid=79759260'>《蝙蝠》</a> 
                                <a target='_blank' href='https://music.163.com/playlist?id=368268862&userid=79759260'>《孤芒》</a> 
                                <a target='_blank' href='https://music.163.com/playlist?id=368268862&userid=79759260'>《The Day》</a> 
                                <a target='_blank' href='https://music.163.com/playlist?id=368268862&userid=79759260'>《烟火里的尘埃》</a>`},
    {title: "喜欢电影", content: "<a target='_blank' href='https://movie.douban.com/subject/3808604/'>《危情三日》</a><a target='_blank' href='https://movie.douban.com/subject/1889243/'>《星际穿越》</a><a target='_blank' href='https://movie.douban.com/subject/3541415/'>《盗梦空间》</a><a target='_blank' href='https://movie.douban.com/subject/20278505/'>《前目的地》</a><a target='_blank' href='https://movie.douban.com/subject/6538866/'>《极速车王》</a>"},
    {title: "喜欢的事", content: "看电影、拍剪视频、摩托车、K歌、游泳、摄影，偶尔王者，做一些实用页面小工具"},
    {title: "信奉的话", content: "永远相信，美好的事情即将发生"},
]

export default {
    PROJECTS, PROFILE
}
