import client from './connect.js'
const res = client()
const ul = document.querySelector('ul')

function filterDate(val) {
    const date = new Date(val)
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate()
}

function add(msg){
    const li = document.createElement('LI')
    const p = document.createElement('P')
    p.innerHTML = window.userName + ' - ' + filterDate( Date.now() )
    li.innerHTML = msg.data
    li.appendChild(p)
    ul.appendChild(li)
}
export default add