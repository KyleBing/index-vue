<template>
    <div class="clock"
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
            <dl><dt>←</dt><dd>颜色变换 -</dd></dl>
            <dl><dt>→</dt><dd>颜色变换 -</dd></dl>
            <dl><dt>C - <span class="tip">Color</span></dt><dd>颜色变换</dd></dl>
            <dl><dt>D - <span class="tip">Date</span></dt><dd>日期 显示/隐藏</dd></dl>
            <dl><dt>S - <span class="tip">Second</span></dt><dd>秒数 显示/隐藏</dd></dl>

        </div>
    </div>
</template>

<script>

import {mapState} from "vuex";

const WEEKDAY = {0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六',}
const WEEKDAY_SHORT = {0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六',}
const COLORS = [
    '#FFF','#4CD964','#5AC8FA','#007AFF','#5856D6','#FF2D70','#FF3B30','#FF9500','#FFCC00','#8E8E93'
]
function padNumberWith0(num){
    return String(num).padStart(2, '0')
}

export default {
    name: "Clock",
    data(){
        return {
            isFullScreen: false,
            isShowHelp: false,  // show help
            intervalHandle: null,

            hours: 0,
            minutes: 0,
            seconds: 0,
            year: 0,
            month: 1,
            day: 1,
            weekday: '',
            weekShort: '',
            dateShort: '',
            date: '',
            dateFull: '',
            dateFullSlash: '',
            timeLabel: '',
            time: '',

            stringDate: '',
            stringTimeLabel: '',

            // config
            storageName: 'clock',
            config: {
                isShowSecond: true, // 显示秒数
                isShowDate: true, // 显示日期
                isShowToolPanel: true, // 显示工具栏
                fontSize: 180,
                colorIndex: 0
            },

            colors: COLORS,
            // 时间字体大小
            fontSizeStep: 10,
        }
    },
    mounted() {
        this.getConfig()
        this.dateProcess()
        this.intervalHandle = setInterval(this.dateProcess, 1000)
        onkeydown = event => {
            switch (event.key){
                case 'ArrowDown': this.fontSizeDown();break
                case 'ArrowUp': this.fontSizeUp();break
                case 'ArrowLeft': this.switchColor();break
                case 'ArrowRight': this.switchColor();break
                case 'c': this.switchColor();break // color
                case 'd': this.toggleDate();break // date
                case 's': this.toggleSecond();break // second
                case 'f': this.switchFullScreen();break // full screen
                case 'h': this.toggleToolPanel();break // tool panel
            }
        }
    },
    unmounted() {
        onkeydown = null
        if (this.intervalHandle){
            clearInterval(this.intervalHandle)
        }
    },
    computed: {
        ...mapState(['insets']),
    },
    methods: {
        showHelpInfo(){
            this.isShowHelp = true
        },
        // 切换颜色
        switchColor(){
            if (this.config.colorIndex >= COLORS.length - 1){
                this.config.colorIndex = 0
            } else {
                this.config.colorIndex = this.config.colorIndex + 1
            }
            this.saveConfig()
        },
        // 从本地获取上次设置的初始字体大小
        getConfig(){
            let configString = localStorage.getItem(this.storageName)
            if (configString){
                this.config = JSON.parse(configString)
                this.config.fontSize = this.config.fontSize || 180
            }
        },
        saveConfig(){
            localStorage.setItem(this.storageName, JSON.stringify(this.config))
        },
        toggleToolPanel(){
            this.config.isShowToolPanel = !this.config.isShowToolPanel
            this.saveConfig()
        },
        toggleSecond(){
            this.config.isShowSecond = !this.config.isShowSecond
            this.saveConfig()
        },
        toggleDate(){
            this.config.isShowDate = !this.config.isShowDate
            this.saveConfig()
        },

        fontSizeDown(){
            if (this.config.fontSize - this.fontSizeStep < 0 ){

            } else {
                this.config.fontSize = this.config.fontSize - this.fontSizeStep
                this.saveConfig()
            }
        },
        fontSizeUp(){
            this.config.fontSize = this.config.fontSize + this.fontSizeStep
            this.saveConfig()
        },
        dateProcess() {
            let date = new Date()
            this.year = date.getFullYear()
            this.month = date.getMonth() + 1
            this.day = date.getDate()
            this.hours = date.getHours()
            this.minutes = padNumberWith0(date.getMinutes())
            this.seconds = padNumberWith0(date.getSeconds())
            let week = date.getDay()
            let timeLabel = ''
            if (this.hours >= 23 && this.hours < 24 || this.hours <= 3 && this.hours >= 0) {
                timeLabel = '深夜'
            } else if (this.hours >= 19 && this.hours < 23) {
                timeLabel = '晚上'
            } else if (this.hours >= 14 && this.hours < 19) {
                timeLabel = '傍晚'
            } else if (this.hours >= 11 && this.hours < 14) {
                timeLabel = '中午'
            } else if (this.hours >= 6 && this.hours < 11) {
                timeLabel = '早上'
            } else if (this.hours >= 3 && this.hours < 6) {
                timeLabel = '凌晨'
            }

            this.weekday = WEEKDAY[week]
            this.weekShort = WEEKDAY_SHORT[week]
            this.dateShort = `${padNumberWith0(this.month)}/${padNumberWith0(this.day)}`
            this.date = `${padNumberWith0(this.month)}月${padNumberWith0(this.day)}日`
            this.dateFull = `${this.year}年${this.month}月${this.day}日`
            this.dateFullSlash = `${this.year}/${this.month}/${this.day}`
            this.timeLabel = timeLabel
            this.time = `${padNumberWith0(this.hours)}:${padNumberWith0(this.minutes)}`
        },
        switchFullScreen(){
            let element = document.documentElement
            // 判断是否已经是全屏
            // 如果是全屏，退出
            if (this.isFullScreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
                this.isFullScreen = false
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
                this.isFullScreen = true
            }
        },
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/plugin";

.clock{
    background-color: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    .time{
        font-weight: bold;
        font-size: 20rem;
        //font-family: "Courier";
        //font-family: "DS-Digital";
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-flow: row nowrap;
        .second{
            font-size: 60px;
            padding-bottom: 50px;
        }
    }
    .separator{
        padding: 0 30px;
    }

    .date{
        font-weight: 200;
        font-size: 2rem;
    }

}

.operations{
    position: absolute;
    left: 10px;
    bottom: 10px;
    .operation-item{
        text-align: center;
        padding: 3px 20px;
        @extend .btn-like;
        @include border-radius(50px);
        @extend .unselectable;
        &:hover{
            background-color: transparentize(white, 0.8);
            color: $orange;
        }
    }
}

.help-info{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparentize(white, 0.9);
    @include backdrop-filter(blur(15px) saturate(180%));
    @include transition(all 0.5s);
    .info{
        font-size: $fz-m;
        color: white;
        @include border-radius(15px);
        padding: 30px;
        background-color: transparentize(black, 0.5);
        text-shadow: 1px 1px 0 transparentize(black, 0.7);
        h3{
            text-align: center;
            font-size: $fz-big;
            margin-bottom: 30px;
        }
        dl{
            padding: 5px 10px;
            width: 300px;
            display: flex;
            justify-content: space-between;
            dt{
                font-weight: bold;
                .tip{
                    font-weight: normal;

                }

            }
            dd{

            }
        }

    }
}

</style>
