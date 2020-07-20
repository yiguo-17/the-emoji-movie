const day = require('./day.js')
const time = process.argv[2]
let i = 0;

const dayToNight = function(){
    if(i<day.length){
        console.log(day[i])
        i++;}else {clearInterval(badD);}
}
const badD = setInterval(dayToNight,time);