import client from './connect.js'
import sendSMS from './sendSMS.js'
import closeConfirm from './closeConfirm.js'
import confirmClick  from './confirmClick.js'
import add from './getServer.js';
const btn = document.querySelector('.btn')
const confirm = document.querySelector('#confirm')
const cancel = document.querySelector('#cancel')
const container = document.querySelector('.container')
const h = document.documentElement.clientHeight
container.style.height = h - 100 + 'px'
const res = client()

//弹框点击取消关闭
cancel.onclick = closeConfirm

// 点击确定
confirm.onclick = confirmClick

// 获取服务端的信息，然后展示到界面上
res.onmessage = function(msg){
    add(msg)
}
// 点击发送发送内容
btn.onclick = sendSMS

// 回车也发送内容
document.onkeydown = function (e) {
    if (e.keyCode == 13) {
        sendSMS()
    }
}





