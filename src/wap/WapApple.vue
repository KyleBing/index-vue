<template>
    <div class="apple">
        <a href="" class="apple-item">iPad <div class="count">{{thumbsUpMap.get('ipad') || 0}}</div> </a>
        <a href="" class="apple-item">iPhone <div class="count">{{thumbsUpMap.get('iphone') || 0}}</div> </a>
        <a href="" class="apple-item">AppleChip <div class="count">{{thumbsUpMap.get('apple-chip') || 0}}</div> </a>
        <a href="" class="apple-item">Airpods <div class="count">{{thumbsUpMap.get('airpods') || 0}}</div> </a>
        <a href="" class="apple-item">Watch <div class="count">{{thumbsUpMap.get('apple-watch') || 0}}</div> </a>
    </div>
</template>

<script>

import blackberryNewMessageIcon from "@/cards/others/blackberry-new.svg";
import axios from "axios";

export default {
    name: 'WapApple',
    data(){
        return{
            thumbsUpMap: new Map(), // 点选数的 map

            // websocket
            websocket: null,


            iconNewMsg: blackberryNewMessageIcon

        }
    },
    mounted() {
        this.getInitThumbsUpCount()
        this.websocketInit()
    },
    methods: {// 点赞功能
        getInitThumbsUpCount(){
            axios
                .get('../../portal/thumbs-up/all')
                .then(res => {
                    if (res.data && res.data.data){
                        console.log(res.data.data)
                        // {
                        //   "name": "airpods",
                        //     "count": 8,
                        //     "link_address": null,
                        //     "date_init": "2022-05-26T08:50:05.000Z"
                        // }
                        res.data.data.forEach(item => {
                            this.thumbsUpMap.set(item.name, item.count)
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
    @import "wap.scss";
    .apple-item{
        margin-bottom: 3px;
        font-size: $fz-film;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .count{
            text-decoration: none;
            margin-left: 10px;
        }
    }
</style>
