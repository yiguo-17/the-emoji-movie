const day = require('./day.js')
let i = 0;

const dayToNight = function(){
    if(i<day.length){
        console.log(day[i])
        i++;}
}
const badD = setInterval(dayToNight,3000);