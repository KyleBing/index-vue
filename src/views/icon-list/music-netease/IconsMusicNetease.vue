<template>
    <icon-list :icons="icons"/>
</template>

<script>
import IconList from "@/views/icon-list/IconList";
export default {
    name: "IconsMusicNetease",
    components: {IconList},
    data(){
        return {
            icons:[
                {
                    title: '网易云 7日黑胶',
                    icons: [
                        { noPadding: true ,  isNew: true,  isBgBlack: false,  pageLink: 'http://163cn.tv/LSrKm4' ,                     icon: require('../icons/logo-netease-music.png') ,name: '9月' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'http://163cn.tv/fkG2I3' ,                     icon: require('../icons/logo-netease-music.png') ,name: '8月完' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'https://music.163.com/prime/m/gift-receive?d=cudcSllmrPiWoRL-75iaFw&p=5LZK-YHo3G-qjt6UlXPOG4ck6Jsk7bhUjiwQ88OIt2Xsn_D_20LzjzfBCjQBgnAXX5kpVKKVjQ-SjL1Ki-bQxiXupHFgO11lNMfNmD9lGwo&userid=79759260&app_version=8.10.15&dlt=0846' ,                     icon: require('../icons/logo-netease-music.png') ,name: '7月完' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'https://music.163.com/prime/m/gift-receive?d=1OtPBYw3FlgNw_YmZudIEg&p=MFpkHLFLKa0C8dsRZxfb0CMLEyGPbKrk2dwKsEwYIrFa5Nofv0xdEJUjuU0qoRvLTlWOV7giNdMlBGZyMsBYfF3PK6VpQzMnM2Xcj-EIGCI&userid=79759260&app_version=8.9.95&dlt=0846' ,                     icon: require('../icons/logo-netease-music.png') ,name: '6月完' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'https://music.163.com/prime/m/gift-receive?d=LicTw1fi166OdFT0EswA2A&p=8Hb1nvPLegqPZqAkk1X4xlKMM_KbjkbsHSvVTKQB0fSzhZGdb4zWtvqwkPSXqaPultJrult8QWEaFdu4mzcMcmXfc4AxH7mQAEAzduTiGB0&userid=79759260&app_version=8.9.73&dlt=0846' ,                     icon: require('../icons/logo-netease-music.png') ,name: '5月完' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'https://music.163.com/prime/m/gift-receive?d=qj0ojHhiu0XiadIY3n14Ag&p=FIrkti_v2Ux7nPAxiLTOL3_iW9PBWH1hrzpoI7lhENtS7fcgxdLyBrYzERE4B6EW0okiTwMQIODHivr4YxtXpyrYw3DswHQjl7zxSQl7ILA&userid=79759260&app_version=8.9.40&dlt=0846' ,                     icon: require('../icons/logo-netease-music.png') ,name: '4月完' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'https://music.163.com/prime/m/gift-receive?d=CaP0cC3Ls3T1co9URbTgLQ&p=W4Dpr9bU3dQx_Fce4ZdCa2efPMAjgLuB8mzayY51SEa8gLyle53tgMFoe7elJQsyBiWsxzudtcr3JHHu521m6bbAgcE7aNSrr0dfN3IDRkA&userid=79759260&app_version=8.9.30&dlt=0846' ,                     icon: require('../icons/logo-netease-music.png') ,name: '3月完' ,     } ,
                        { noPadding: true ,  isNew: false,  isBgBlack: false,  pageLink: 'https://music.163.com/prime/m/gift-receive?d=XG_zS_50_j-DN-MTO9k9yA&p=p_E55KtdeJO5livvCYr0O0MVmIh2jJjC6hCeGii2oJbsch4o2sm8eUvEPzrLvf1QbpP_9B3Nz_vEHk0F_aHZidRNG8PC9VjwqL8u8IuPzto&userid=79759260&app_version=8.9.20&dlt=0846' ,                     icon: require('../icons/logo-netease-music.png') ,name: '2月完' ,     } ,
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>
