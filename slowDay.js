const day = require('./day.js')
let i = 0;

const dayToNight = function(){
    if(i<day.length){
        console.log(day[i])
        i++;}else {clearInterval(badD);}
}
const badD = setInterval(dayToNight,3000);