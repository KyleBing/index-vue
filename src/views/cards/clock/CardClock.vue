<template>
    <Card class="black" title="全屏时钟" page-link="clock">
        <div class="clock"
             :style="`
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

        </div>
    </Card>
</template>

<script>

import Card from "@/components/Card";
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
    name: "CardClock",
    components: {Card},
    data(){
        return {
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
                fontSize: 100,
                colorIndex: 0
            },

            colors: COLORS,
            // 时间字体大小
            fontSizeStep: 10,
        }
    },
    mounted() {
        this.dateProcess()
        this.intervalHandle = setInterval(this.dateProcess, 1000)
    },
    unmounted() {
        onkeyup = null
        if (this.intervalHandle){
            clearInterval(this.intervalHandle)
        }
    },
    computed: {
        ...mapState(['insets']),
    },
    methods: {
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
    }
}


</script>

<style scoped lang="scss">
@import "../../../assets/scss/plugin";

.clock{
    //background-color: black;
    width: 100%;
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
</style>
