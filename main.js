"use strict";

function getClock(){
    let date, hours, minutes, seconds;
    date = new Date()
    hours =date.getHours();
    minutes =date.getMinutes();
    seconds =date.getSeconds();
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    

    setTimeout(getClock, 1000);
}

getClock();


