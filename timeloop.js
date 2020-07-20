const day = require('./day.js')
let i = 0;

const dayToNight = function(){
    loopI = i%day.length
        console.log(day[loopI])
        i++;
}
const badD = setInterval(dayToNight,1000);