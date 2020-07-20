const day = require('./day.js')
const greet = function(){console.log('hi');}
// const greeting = setInterval(greet,1000);
let i = 0;

const dayToNight = function(){
    if(i<day.length){
        console.log(day[i])
        i++;}
}
const badD = setInterval(dayToNight,1000);
