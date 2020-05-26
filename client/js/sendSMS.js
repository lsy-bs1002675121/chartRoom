
import client from './connect.js'
const res = client()
export default  function(){
    const stin = document.querySelector('.sendMsg')
    const val = stin.value
    if(val){
        res.send( val )
    }
    stin.value = ''
}
