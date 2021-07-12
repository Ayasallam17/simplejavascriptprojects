var noon=12;
var evening  = 18;
var lunchTime= 12;
var showCurrentTime = function(){
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours       = currentTime.getHours();
    var minutes     = currentTime.getMinutes();
    var seconds     = currentTime.getSeconds();
    var meridian    = "AM";
    //set hours
    if(hours >= noon){
        meridian = "PM";
    }
    if(hours > noon){
        hours -= 12; 
    }
    //SET MINUTES
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    //set seconds
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    var time = hours +":" + minutes + ":" + seconds + " " + meridian;
    console.log(time);
    clock.innerText = time;
};

var updateClock = function(){
    var textMessage;
    var time = new Date().getHours();
    var image = "img1.jpg";
    var timeEvent = document.getElementById("timeEvent");
    if(time == evening){
        textMessage= "good evening";
    }
    else if(time == lunchTime){
        textMessage = "let't have some lunch";
    }
    else if(timeEvent >= evening){
        textMessage = "good evening";
    }
    else if(time <noon){
        textMessage="good morning";
    }
    timeEvent.innerText = textMessage;
    showCurrentTime();
};
updateClock();
var onesecond = 1000;
setInterval(updateClock,onesecond);
