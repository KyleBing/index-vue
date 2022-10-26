let avatarArray = []
const picCount = 6
for (let i=1; i<= picCount;i++){
    avatarArray.push(require('./avatars/me' + i + '.jpg'))
}

export default {
    avatarArray, picCount
}
