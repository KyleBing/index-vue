import ipad_white from './icons/links/ipad_white@2x.png'
import iphone_white from './icons/links/iphone_white@2x.png'
import airpods_white from './icons/links/airpods_white@2x.png'
import chip_white from './icons/links/chip_white@2x.png'

interface AppleItemEntity{
    title:  string,
    icon: any,
    keyword: string,  // 点赞时的标识符
    isPublic: boolean,
    description: string,
    path: string
}

const appleListData: Array<AppleItemEntity> = [
    {title: 'iPad'        , keyword: 'ipad',        icon: ipad_white                , isPublic: true , description: 'iPad 所有机型参数'    , path: 'http://kylebing.cn/tools/ipad'}       ,
    {title: 'iPhone'      , keyword: 'iphone',      icon: iphone_white              , isPublic: true , description: 'iPhone 所有机型参数'  , path: 'http://kylebing.cn/tools/iphone'}     ,
    {title: 'AirPods'     , keyword: 'airpods',     icon: airpods_white             , isPublic: true , description: 'AirPods 所有机型参数' , path: 'http://kylebing.cn/tools/airpods'}    ,
    {title: '处理器'       , keyword: 'apple-chip',  icon: chip_white                , isPublic: true , description: 'Apple 历代处理器参数' , path: 'http://kylebing.cn/tools/apple-chip'} ,
]

export {
    appleListData
}
