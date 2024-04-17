/**
 * Prompt 提示
 * @param type
 * @param title
 * @param callback
 * @param timeout
 */
function popMessage(
    type: 'default' | 'warning' | 'success' | 'danger',
    title: string,
    callback = () => {
    },
    timeout = 0.8) {
    let popClass = `pop-msg-${type}`
    let msgEl = document.createElement('div')
    msgEl.classList.add('pop-msg', 'animated-fast', 'slideInDownPopMessage', popClass)
    let msgTitle = document.createElement('h3')
    msgTitle.innerText = title
    msgEl.append(msgTitle)
    $('body')?.append(msgEl)

    setTimeout(() => {
        msgEl.classList.remove('slideInDownPopMessage')
    }, 200)
    setTimeout(() => {

        // msgEl.classList.replace('slideInDown', 'slideOutUp')
        msgEl.classList.add('slideOutUpPopMessage')
        setTimeout(() => {
            msgEl.remove()
        }, 200); // 需要对应 css 中 .animated-fast 的动画过渡时间

        // 为了避免回调方法影响 动画的过程，将其异步处理
        setTimeout(() => {
            callback && callback()
        }, 200)

    }, 1000 * timeout)
}

function $(selector: string) {
    return document.querySelector(selector)
}


// 格式化时间，输出字符串
function dateFormatter(date: Date, formatString: string = 'yyyy-MM-dd hh:mm:ss') {
    let dateRegArray: Object = {
        "M+": date.getMonth() + 1,                      // 月份
        "d+": date.getDate(),                           // 日
        "h+": date.getHours(),                          // 小时
        "m+": date.getMinutes(),                        // 分
        "s+": date.getSeconds(),                        // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds()                     // 毫秒
    }
    if (/(y+)/.test(formatString)) {
        formatString = formatString.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (let section in dateRegArray) {
        if (new RegExp("(" + section + ")").test(formatString)) {
            formatString = formatString.replace(RegExp.$1, (RegExp.$1.length === 1) ? (dateRegArray[section]) : (("00" + dateRegArray[section]).substr(("" + dateRegArray[section]).length)))
        }
    }
    return formatString
}

export {
    popMessage,
    dateFormatter,
}
