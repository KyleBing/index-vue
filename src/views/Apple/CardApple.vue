<template>
    <Card class="blue" title="">
        <div class="card-apple">
            <div class="apple-item" v-for="item in appleListData" :key="item.keyword">
                <a class="link-item" target="_blank" :href="item.path">
                    <img :src="item.icon" :alt="item.keyword">
                    <h3>{{ item.title }}</h3>
                </a>
                <div class="thumb-up" @click="thumbsUp(item.keyword)">
                    <img :src="heart_inactive" alt="hear-inactive">
                    <div class="count">{{thumbsUpMap.get(item.keyword) || 0}}</div>
                </div>
            </div>
        </div>
    </Card>
</template>

<script lang="ts" setup>
import axios from "axios";
import {onMounted, ref} from 'vue'
import Card from "@/components/Card.vue";



import heart_inactive from './icons/heart_inactive@3x.png'
import {appleListData} from "@/views/Apple/appleListData.ts";

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
                // console.log(res.data.data)
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
@import "card-apple";

</style>
