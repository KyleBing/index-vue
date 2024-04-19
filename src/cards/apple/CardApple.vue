<template>
    <Card class="blue" title="">
        <div class="card-apple">
            <div class="apple-item">
                <a class="link-item" target="_blank" href="http://kylebing.cn/tools/ipad">
                    <img src="./icons/links/ipad_white@2x.png" alt="ipad">
                    <h3>iPad</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('ipad')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('ipad') || 0}}</div>
                </div>
            </div>
            <div class="apple-item">
                <a class="link-item" target="_blank" href="http://kylebing.cn/tools/iphone">
                    <img src="./icons/links/iphone_white@2x.png" alt="phone">
                    <h3>iPhone</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('iphone')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('iphone') || 0}}</div>
                </div>
            </div>
            <div class="apple-item">
                <a class="link-item" target="_blank" href="http://kylebing.cn/tools/airpods">
                    <img src="./icons/links/airpods_white@2x.png" alt="airpods">
                    <h3>AirPods</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('airpods')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('airpods') || 0}}</div>
                </div>
            </div>
            <div class="apple-item">
                <a class="link-item" target="_blank" href="http://kylebing.cn/tools/apple-chip">
                    <img src="./icons/links/chip_white@2x.png" alt="chip">
                    <h3>处理器</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp('apple-chip')">
                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get('apple-chip') || 0}}</div>
                </div>
            </div>
<!--            <div class="apple-item disabled">-->
<!--                <a class="link-item" target="_blank" href="http://kylebing.cn/tools/apple-watch">-->
<!--                    <div class="indicator-new">-->
<!--                        <img alt="black-berry-new-message-icon" :src="iconNewMsg">-->
<!--                    </div>-->
<!--                    <img src="./icons/links/apple-watch@2x.png" alt="watch">-->
<!--                    <h3 style="text-decoration: line-through">Watch</h3>-->
<!--                </a>-->
<!--                <div class="thumb-up" @click="thumbsUp('apple-watch')">-->
<!--                    <img src="./icons/heart_inactive@3x.png" alt="hear-inactive">-->
<!--                    <div class="count">{{thumbsUpMap.get('apple-watch') || 0 }}</div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </Card>
</template>

<script lang="ts" setup>
import axios from "axios";
import {onMounted, ref} from 'vue'
import Card from "@/components/Card.vue";

const thumbsUpMap = new Map() // 点选数的 map

// websocket
let websocket= null
const portStatus = ref('')

onMounted(()=>{
    getInitThumbsUpCount()
    websocketInit()
})

function getInitThumbsUpCount(){
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
                    thumbsUpMap.set(item.name, item.count)
                })
            }
        })
}
function thumbsUp(thumbsUpKey: string){
    // this.sendMessage(thumbsUpKey)
}

const heartActive = ref(false)
function sendMessage(key: string){
    if (websocket) {
        heartActive.value = true
        let message = new WSMessage(WSMessage.type.thumbsUp, {
            key: key
        })
        websocket.send(JSON.stringify(message))
    }
}

// websocket
function websocketInit(){
    websocket = new WebSocket('ws://kylebing.cn/ws')
    websocket.onopen = websocketOnOpen
    websocket.onmessage = websocketOnMessage
    websocket.onerror = websocketOnError
    websocket.onclose = websocketClose
}

let pingPongInterval = null
function websocketOnOpen() {
    portStatus.value = 'success'
    pingPongInterval = setInterval(()=>{
        if (websocket){
            switch (websocket.readyState){
                case 0: // connecting
                    break;
                case 1: // open
                    let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                    websocket.send(JSON.stringify(message))
                    break;
                case 2:  // closing
                    clearInterval(pingPongInterval)
                    break;
                case 3: // closed
                    clearInterval(pingPongInterval)
                    break;
            }
        }
    }, 10000)
}
function websocketOnMessage(res) {
    let receivedMessage = JSON.parse(res.data)
    switch (receivedMessage.type){
        case WSMessage.type.heartBeat:
            break;
        case WSMessage.type.thumbsUp:
            thumbsUpMap.set(receivedMessage.content.key, receivedMessage.content.count)
            break;
    }
}
function websocketOnError() {
    portStatus.value = 'error'
    websocket.send('on error')
}
function websocketClose() {
    portStatus.value = 'closed'
    console.log('socket has closed')
}

class WSMessage{
    constructor(type: string, content: object) {
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
@import "./card-apple";

</style>
