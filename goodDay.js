const day = require('./day.js')
let i = day.length -1;

const nightToDay = function(){
    if(i >= 0){
        console.log(day[i])
        i--;}else {clearInterval(goodD);}
}
const goodD = setInterval(nightToDay,1000);