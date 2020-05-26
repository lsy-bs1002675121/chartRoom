import client from './connect.js'
import closeConfirm from './closeConfirm.js'
const res = client()
function once(){
    res.send(`${window.userName}进来直播间`)
}
function click(){
    const user = document.querySelector('#username')
    window.userName = user.value
    // 第一次连接好服务器之后的发送
    res.onopen = once()
    closeConfirm()
}
export default click
