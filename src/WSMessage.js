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
