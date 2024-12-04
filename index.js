var info = document.getElementById("infobox");

setInterval( ()=> {
    var hours = document.getElementById("hours");
    var mins = document.getElementById("min");
    var secs = document.getElementById("sec");
    var  time = new Date();
    var cHour = time.getHours();
    var cMin = time.getMinutes();
    var cSec = time.getSeconds();
    
    var dhour = cHour*30 + cMin/2;
    var dmin= cMin*6;
    var dsec = cSec*6;
    
    hours.style.transform = `rotate(${dhour}deg)`;
    mins.style.transform = `rotate(${dmin}deg)`;
    secs.style.transform = `rotate(${dsec}deg)`;
    var hour = ""
    var min = ""
    var sec =""
    var last = "am"
    if (cHour >= 12){
        cHour = cHour-12;
        last = "pm"
    }
    if (cHour <=9){
        hour = "0"+cHour;
    }else{
        hour = cHour;
    }
    if(cMin <=9 ){
        min = "0"+cMin;
    }else{
        min = cMin;
    }
    if (cSec <=9){
        sec = "0"+cSec;
    }else{
        sec = cSec;
    }
    
    info.textContent = hour+" : "+min+" : "+sec+" "+last;
        
    
},1000);