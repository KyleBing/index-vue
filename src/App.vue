<template>
    <div class="index">
        <div class="container" v-cloak>

            <div :class="['section', 'no-padding', 'gray', 'card-film', {'white': film.wordTheme === 'white'}]" v-if="film">
                <div class="section-header">
                    <div class="title">好剧推荐</div>
                </div>
                <img :src="`./img/film/${film.cover}`" alt="cover" class="cover">
                <div class="intro">
                    <div class="title">
                        <h2 class="name">{{film.name}} </h2>
                        <div class="name-en">{{film.nameEn}}</div>
                    </div>

                    <dl><dt>类别</dt><dd>{{film.type}}</dd></dl>
                    <dl><dt>标签</dt><dd>{{film.tags.join('、')}}</dd></dl>

                    <dl><dt>时长</dt><dd>{{film.duration}}</dd></dl>
                    <dl><dt>上映</dt><dd>{{film.premiere}}</dd></dl>
                    <dl><dt>语言</dt><dd>{{film.language}}</dd></dl>
                    <dl><dt>主演</dt><dd>{{film.actors.join(' / ')}}</dd></dl>
                    <dl v-if="film.downloadLink.length > 0">
                        <dt>下载</dt>
                        <dd>
                            <a target="_blank" v-for="item in film.downloadLink" :href="item.downloadLink">{{item.name}}</a>
                        </dd>
                    </dl>
                    <dl><dt>豆瓣</dt><dd><a target="_blank" :href="film.doubanLink">豆瓣页面</a></dd></dl>
                    <dl><dt>观感</dt><dd>{{film.comment}}</dd></dl>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="section profile">
                        <div class="section-header">
                            <div class="title">个人资料</div>
                        </div>
                        <div class="section-content">
                            <!--PROFILE-->
                            <div class="profile-content">
                                <div class="head-container">
                                    <div class="head flipInX animated">
                                        <img :src="`img/me${randomPicId}.jpg`" alt="HeadPic">
                                    </div>
                                </div>
                                <div class="intro">
                                    <table class="intro-container">
                                        <tbody>
                                        <tr v-for="(item, index) in PROFILE" :key="index"><td class="intro-title">{{item.title}}</td><td class="intro-content" v-html="item.content"></td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="section gray">
                        <div class="section-header">
                            <div class="title">苹果常用参数</div>
                        </div>
                        <div class="section-content">
                            <div class="card-apple">

                                <div class="apple-item">
                                    <a class="link-item" target="_blank" href="https://kylebing.cn/tools/ipad">
                                        <img src="icons/links/iapd.png?v=2022-03-10" alt="ipad">
                                        <h3>iPad</h3>
                                    </a>
                                    <div class="thumb-up" @click="thumbsUp('ipad')">
                                        <img src="icons/heart_inactive@3x.png" alt="hear-inactive">
                                        <div class="count">{{thumbsUpMap.get('ipad')}}</div>
                                    </div>
                                </div>
                                <div class="apple-item">
                                    <a class="link-item" target="_blank" href="https://kylebing.cn/tools/iphone">
                                        <img src="icons/links/iphone.png?v=2022-03-10" alt="phone">
                                        <h3>iPhone</h3>
                                    </a>
                                    <div class="thumb-up" @click="thumbsUp('iphone')">
                                        <img src="icons/heart_inactive@3x.png" alt="hear-inactive">
                                        <div class="count">{{thumbsUpMap.get('iphone')}}</div>
                                    </div>
                                </div>
                                <div class="apple-item">
                                    <a class="link-item" target="_blank" href="https://kylebing.cn/tools/apple-chip">
                                        <img src="icons/links/chip.png?v=2022-03-10" alt="chip">
                                        <h3>处理器</h3>
                                    </a>
                                    <div class="thumb-up" @click="thumbsUp('apple-chip')">
                                        <img src="icons/heart_inactive@3x.png" alt="hear-inactive">
                                        <div class="count">{{thumbsUpMap.get('apple-chip')}}</div>
                                    </div>
                                </div>
                                <div class="apple-item">
                                    <a class="link-item" target="_blank" href="https://kylebing.cn/tools/airpods">
                                        <img src="icons/links/AirPods@3x.png?v=2022-03-10" alt="airpods">
                                        <h3>AirPods</h3>
                                    </a>
                                    <div class="thumb-up" @click="thumbsUp('airpods')">
                                        <img src="icons/heart_inactive@3x.png" alt="hear-inactive">
                                        <div class="count">{{thumbsUpMap.get('airpods')}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card-projects section mb-0">
                <div :class="['project-group', `project-${projGroup.value}`]" v-for="projGroup in PROJECTS.filter(item => item.isPublic || IS_LOCAL)" :key="projGroup.value">
                    <div class="project-title">
                        <h2>{{ projGroup.title }}</h2>
                    </div>
                    <div class="project-list">
                        <a :href="proj.path" class="project-list-item" v-for="proj in projGroup.list" :key="proj.title">
                            <!--                    <div class="icon">-->
                            <!--                        <img :src="proj.icon" alt="icon">-->
                            <!--                    </div>-->
                            <div class="detail">
                                <h3 class="title">{{ proj.title }}</h3>
                                <p class="description">{{ proj.description }}</p>
                                <p class="link">{{ proj.path }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div class="copyright">
            <p>Copyright © 2022 <a href="mailto:kylebing@163.com">KyleBing</a>. All rights reserved.
        </div>
    </div>
</template>


<script>

export default {
    data(){
        return {
            PROJECTS: data.PROJECTS,
            PROFILE: data.PROFILE,

            storageIdentifier : 'index_show_all',
            IS_LOCAL: false,

            thumbsUpMap: new Map(), // 点选数的 map

            count: 34,

            // CONST
            picCount: 14, // 头像数量
            randomPicId: 1, //

            // FILM
            randomFilmId: 0,
            film: null,

            // websocket
            websocket: null,
        }
    },

    mounted(){
        this.randomPicId = Math.floor(Math.random() * this.picCount) + 1
        this.randomFilmId = Math.floor(Math.random() * filmData.FILMS.length)
        console.log(this.randomFilmId)
        this.film = filmData.FILMS[this.randomFilmId]

        this.IS_LOCAL =  /^http:\/\/(a\.kylebing\.cn|localhost|192\.168\.\d{1,3}\.\d{1,3})/i.test(location.href)
        switch (localStorage.getItem(this.storageIdentifier)){
            case null: break
            case '1': this.IS_LOCAL = true; break
            case '0': this.IS_LOCAL = false; break
        }

        document.onkeyup = e => {
            if (e.key === 'a' ) {
                console.log(e.key)
                this.IS_LOCAL = !this.IS_LOCAL
                localStorage.setItem(this.storageIdentifier, this.IS_LOCAL ? '1':'0')
            }
        }

        this.getInitThumbsUpCount()
        this.websocketInit()
    },

    methods: {
        // 点赞功能
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
            this.sendMessage(thumbsUpKey)
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
                let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                this.websocket.send(JSON.stringify(message))
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
</script>
