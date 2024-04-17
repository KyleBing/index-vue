<template>
    <div
        :class="['clock', {'hide-pointer': !config.isShowToolPanel}]"
         :style="`
             height: ${insets.height}px;
             color: ${colors[config.colorIndex]}`"
    >
        <div class="time" :style="`font-size: ${config.fontSize}px`">
            <div class="hour">{{ hours }}</div>
            <div class="separator" :style="`padding: 0 ${config.fontSize * 0.1}px`">:</div>
            <div class="minute">{{ minutes }}</div>
            <div class="second"
                 :style="`
                     font-size: ${config.fontSize * 0.3}px;
                     padding-bottom: ${config.fontSize * 0.2}px`"
                 v-if="config.isShowSecond"
            >
                    <span :style="`padding-left: ${config.fontSize * 0.05}px`">:</span>
                    {{ seconds }}</div>
        </div>

        <div class="date" v-if="config.isShowDate">
           {{ year }}年{{ date }} {{ weekday }} {{ timeLabel }}
        </div>

        <div class="operations" v-if="config.isShowToolPanel">
            <div class="operation-item" @click="switchColor">颜色</div>
            <div class="operation-item" @click="switchFullScreen">全屏</div>
            <div class="operation-item" @click="toggleSecond">秒数</div>
            <div class="operation-item" @click="toggleDate">日期</div>
            <div class="operation-item" @click="fontSizeUp">↑</div>
            <div class="operation-item" @click="fontSizeDown">↓</div>
            <div class="operation-item" @click="showHelpInfo">帮助</div>
        </div>
    </div>

    <div class="help-info" @click="isShowHelp = !isShowHelp" v-if="isShowHelp">
        <div class="info">
            <h3>快捷键</h3>
            <dl><dt>H - <span class="tip">Hide</span></dt><dd>操作面板 显示/隐藏</dd></dl>
            <dl><dt>↑</dt><dd>字体 +</dd></dl>
            <dl><dt>↓</dt><dd>字体 -</dd></dl>

            <dl><dt>C - <span class="tip">Color</span></dt><dd>颜色变换</dd></dl>
            <dl><dt>D - <span class="tip">Date</span></dt><dd>日期 显示/隐藏</dd></dl>
            <dl><dt>S - <span class="tip">Second</span></dt><dd>秒数 显示/隐藏</dd></dl>
            <dl><dt>G - <span class="tip">Glass</span></dt><dd>玻璃遮罩 显示/隐藏</dd></dl>
            <dl><dt>Q - <span class="tip">Quit</span></dt><dd>关闭</dd></dl>
            <dl><dt>←</dt><dd>毛玻璃效果减小</dd></dl>
            <dl><dt>→</dt><dd>毛玻璃效果增大</dd></dl>
            <dl><dt>F - <span class="tip">FullScreen</span></dt><dd>全屏切换</dd></dl>

        </div>
    </div>

    <div class="glass-blur"
         v-show="config.isShowGlassBlur"
         :style="`backdrop-filter: blur(${config.blur}px) saturate(180%) !important;-webkit-backdrop-filter: blur(${config.blur})px saturate(180%)!important; cursor: none`"
         />
</template>

<script lang="ts" setup>

import {onMounted, onUnmounted, ref} from "vue";
import {useRouter} from "vue-router";

enum ENUM_WEEKDAY {'周日' = 0, '周一' = 1, '周二' = 2, '周三' = 3, '周四' = 4, '周五' = 5, '周六' = 6}
enum ENUM_WEEKDAY_SHORT {'日' = 0, '一' = 1, '二'= 2, '三'= 3, '四'= 4, '五'= 5, '六'= 6}
const COLORS = [
    '#FFF',
    '#4CD964',
    '#5AC8FA',
    '#007AFF',
    '#5856D6',
    '#FF2D70',
    '#FF3B30',
    '#FF9500',
    '#FFCC00',
    '#8E8E93'
]
function padNumberWith0(num: number){
    return String(num).padStart(2, '0')
}

const isFullScreen = ref(false)
const isShowHelp = ref(false)  // show help
const intervalHandle = ref(null)

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const year = ref(0)
const month = ref(1)
const day = ref(1)
const weekday = ref('')
const weekShort = ref('')
const dateShort = ref('')
const date = ref('')
const dateFull = ref('')
const dateFullSlash = ref('')
const timeLabel = ref('')
const time = ref('')

const stringDate = ref('')
const stringTimeLabel = ref('')

// config
const storageName = ref('clock')
const config = ref({
    isShowSecond: true, // 显示秒数
    isShowDate: true, // 显示日期
    isShowToolPanel: true, // 显示工具栏
    fontSize: 180,
    colorIndex: 0,
    isShowGlassBlur: false, // 是否显示玻璃遮罩
    blur: 10, // 毛玻璃程度
})

// 时间字体大小
const fontSizeStep = ref(10)

const router = useRouter()

onMounted(()=>{
    getConfig()
    dateProcess()
    intervalHandle.value = setInterval(dateProcess, 1000)
    onkeydown = event => {
        console.log(event.key)
        switch (event.key){
            case 'ArrowDown'  : fontSizeDown()     ; break
            case 'ArrowUp'    : fontSizeUp()       ; break
            case 'ArrowLeft'  : blurMinus()        ; break
            case 'ArrowRight' : blurPlus()         ; break
            case 'c'          : switchColor()      ; break // color
            case 'd'          : toggleDate()       ; break // date
            case 's'          : toggleSecond()     ; break // second
            case 'f'          : switchFullScreen() ; break // full screen
            case 'h'          : toggleToolPanel()  ; break // tool panel
            case 'g'          : toggleGlass()      ; break // tool panel
            case 'q'          : router.push('/')  ; break // tool panel
        }
    }
    setTimeout(() => {
        if (!/^http:\/\/(a\.kylebing\.cn|localhost|192\.168\.\d{1,3}\.\d{1,3})/i.test(location.href)) {
            let hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?478d99033369c24a114bbc84a4cdc066";
            let s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        }
    }, 1000)
})

onUnmounted(()=>{
    onkeydown = null
    if (intervalHandle.value){
        clearInterval(intervalHandle.value)
    }
})

function showHelpInfo(){
    isShowHelp.value = true
}
// 切换颜色
function switchColor(){
    if (config.value.colorIndex >= COLORS.length - 1){
        config.value.colorIndex = 0
    } else {
        config.value.colorIndex = config.value.colorIndex + 1
    }
    saveConfig()
}
// 从本地获取上次设置的初始字体大小
function getConfig(){
    let configString = localStorage.getItem(storageName.value)
    if (configString){
        config.value = JSON.parse(configString)
        config.value.fontSize = config.value.fontSize || 180
    }
}
function saveConfig(){
    localStorage.setItem(storageName.value, JSON.stringify(config.value))
}
function toggleToolPanel(){
    config.value.isShowToolPanel = !config.value.isShowToolPanel
    saveConfig()
}
function toggleGlass(){
    config.value.isShowGlassBlur = !config.value.isShowGlassBlur
    saveConfig()
}
function toggleSecond(){
    config.value.isShowSecond = !config.value.isShowSecond
    saveConfig()
}
function toggleDate(){
    config.value.isShowDate = !config.value.isShowDate
    saveConfig()
}

// BLUR
function blurMinus(){
    if (config.value.blur >= 1){
        config.value.blur = config.value.blur - 1
    }
    saveConfig()
}
function blurPlus(){
    config.value.blur = config.value.blur + 1
    saveConfig()
}

function fontSizeDown(){
    if (config.value.fontSize - fontSizeStep.value < 0 ){

    } else {
        config.value.fontSize = config.value.fontSize - fontSizeStep.value
        saveConfig()
    }
}
function fontSizeUp(){
    config.value.fontSize = config.value.fontSize + fontSizeStep.value
    saveConfig()
}
function dateProcess() {
    let currentDate = new Date()
    year.value = currentDate.getFullYear()
    month.value = currentDate.getMonth() + 1
    day.value = currentDate.getDate()
    hours.value = currentDate.getHours()
    minutes.value = padNumberWith0(currentDate.getMinutes())
    seconds.value = padNumberWith0(currentDate.getSeconds())
    let week = currentDate.getDay()
    let currentTimeLabel = ''
    if (hours.value >= 23 && hours.value < 24 || hours.value <= 3 && hours.value >= 0) {
        currentTimeLabel = '深夜'
    } else if (hours.value >= 19 && hours.value < 23) {
        currentTimeLabel = '晚上'
    } else if (hours.value >= 14 && hours.value < 19) {
        currentTimeLabel = '傍晚'
    } else if (hours.value >= 11 && hours.value < 14) {
        currentTimeLabel = '中午'
    } else if (hours.value >= 6 && hours.value < 11) {
        currentTimeLabel = '早上'
    } else if (hours.value >= 3 && hours.value < 6) {
        currentTimeLabel = '凌晨'
    }

    weekday.value = ENUM_WEEKDAY[week]
    weekShort.value = ENUM_WEEKDAY_SHORT[week]
    dateShort.value = `${padNumberWith0(month.value)}/${padNumberWith0(day.value)}`
    date.value = `${padNumberWith0(month.value)}月${padNumberWith0(day.value)}日`
    dateFull.value = `${year.value}年${month.value}月${day.value}日`
    dateFullSlash.value = `${year.value}/${month.value}/${day.value}`
    timeLabel.value = currentTimeLabel
    time.value = `${padNumberWith0(hours.value)}:${padNumberWith0(minutes.value)}`
}
function switchFullScreen(){
    let element = document.documentElement
    // 判断是否已经是全屏
    // 如果是全屏，退出
    if (isFullScreen.value) {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        }
        isFullScreen.value = false
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen()
        }
        isFullScreen.value = true
    }
}
</script>

<style scoped lang="scss">
@import "clock";
</style>
