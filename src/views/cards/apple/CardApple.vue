<template>
    <Card class="blue" title="苹果常用参数">
        <div class="card-apple">

            <div class="apple-item">
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/ipad">
                    <img src="./icons/links/iapd.png" alt="ipad">
                    <h3>iPad</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('ipad')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('ipad')}}</div>
                </div>
            </div>
            <div class="apple-item">
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/iphone">
                    <img src="./icons/links/iphone.png" alt="phone">
                    <h3>iPhone</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('iphone')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('iphone')}}</div>
                </div>
            </div>
            <div class="apple-item">
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/apple-chip">
                    <img src="./icons/links/chip.png" alt="chip">
                    <h3>处理器</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('apple-chip')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('apple-chip')}}</div>
                </div>
            </div>
            <div class="apple-item">
                <a class="link-item" target="_blank" href="https://kylebing.cn/tools/airpods">
                    <img src="./icons/links/AirPods@3x.png" alt="airpods">
                    <h3>AirPods</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('airpods')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('airpods')}}</div>
                </div>
            </div>
        </div>
    </Card>
</template>

<script>

import axios from "axios";
import Card from "@/components/Card";


export default {
    name: "CardApple",
    components: {Card},
    data(){
        return{
            thumbsUpMap: new Map(), // 点选数的 map

            // websocket
            websocket: null,
        }
    },
    mounted() {
        this.getInitThumbsUpCount()
        this.websocketInit()
    },
    methods: {// 点赞功能
        getInitThumbsUpCount(){
            axios.get('../../portal/thumbs-up/all')
                .then(res => {
                    if (res.data && res.data.data){
                        console.log(res.data.data)
                        // {
                        //   "up_key": "airpods",
                        //     "up_count": 8,
                        //     "link_address": null,
                        //     "date_init": "2022-05-26T08:50:05.000Z"
                        // }
                        res.data.data.forEach(item => {
                            this.thumbsUpMap.set(item.up_key, item.up_count)
                        })
                    }
                })
        },
        thumbsUp(thumbsUpKey){
            // this.sendMessage(thumbsUpKey)
        },

        sendMessage(key){
            if (this.websocket) {
                this.heartActive = true
                let message = new WSMessage(WSMessage.type.thumbsUp, {
                    key: key
                })
                this.websocket.send(JSON.stringify(message))
            }
        },

        // websocket
        websocketInit(){
            this.websocket = new WebSocket('wss://kylebing.cn/ws')
            this.websocket.onopen = this.websocketOnOpen
            this.websocket.onmessage = this.websocketOnMessage
            this.websocket.onerror = this.websocketOnError
            this.websocket.onclose = this.websocketClose
        },
        websocketOnOpen() {
            this.portStatus = 'success'
            this.pingPongInterval = setInterval(()=>{
                if (this.websocket){
                    switch (this.websocket.readyState){
                        case 0: // connecting
                            break;
                        case 1: // open
                            let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                            this.websocket.send(JSON.stringify(message))
                            break;
                        case 2:  // closing
                            clearInterval(this.pingPongInterval)
                            break;
                        case 3: // closed
                            clearInterval(this.pingPongInterval)
                            break;
                    }
                }
            }, 10000)
        },
        websocketOnMessage(res) {
            let receivedMessage = JSON.parse(res.data)
            switch (receivedMessage.type){
                case WSMessage.type.heartBeat:
                    break;
                case WSMessage.type.thumbsUp:
                    this.thumbsUpMap.set(receivedMessage.content.key, receivedMessage.content.count)
                    break;
            }
        },
        websocketOnError() {
            this.portStatus = 'error'
            this.websocket.send('on error')
        },
        websocketClose() {
            this.portStatus = 'closed'
            console.log('socket has closed')
        },
    }
}
class WSMessage{
    constructor(type, content) {
        this.type = type
        this.content = content
    }
    static type = {
        thumbsUp: 'thumbs-up',
        heartBeat: 'heart-beat',
    }
}

</script>

<style scoped lang="scss">
@import "card-apple";
</style>
