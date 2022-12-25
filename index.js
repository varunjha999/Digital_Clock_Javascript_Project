 alert("Hello Varun, Welcome to the Alarm Clock App")
function clock() {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let meridian;

    if (hours > 12) {
        meridian = "PM"
        hours -= 12;
    }
    else {
        meridian = "AM"
    }

    if (hours < 10)
        hours = "0" + hours;

    if (min < 10)
        min = "0" + min;

    if (sec < 10)
        sec = "0" + sec;


    const hoursSlot = document.getElementById("hours")
    hoursSlot.innerHTML = hours;

    const minsSlot = document.getElementById("mins")
    minsSlot.innerHTML = min;

    const secsSlot = document.getElementById("secs")
    secsSlot.innerHTML = sec;

    const meridianSlot = document.getElementById("meridian")
    meridianSlot.innerHTML = meridian;
}

setInterval(() => {
    clock();
}, 1000);


function setAlarm() {
    let wake = document.getElementById("wakeUpTime").value;
    let lunch = document.getElementById("lunchTime").value;
    let nap = document.getElementById("napTime").value;
    let night = document.getElementById("nightTime").value;
    
    let time = new Date();
    if (time.getHours() == wake) {
        document.getElementById("text").innerText = "GOOD MORNING!! WAKE UP !! "
        document.getElementById("Mor_Img").src = "./images/goodMorning.png"
        document.getElementById("Mor_Img").style.borderRadius = "2vw"
        document.getElementById("grab").innerText = "GRAB SOME HEALTHY BREAKFAST!!! "
    }
    if (time.getHours() == lunch) {
        document.getElementById("text").innerText = "Good Afternoon !! Take Some Sleep "
        document.getElementById("Mor_Img").src = "./images/goodAfter.png"
        document.getElementById("Mor_Img").style.borderRadius = "2vw"
        document.getElementById("grab").innerText = "Let's Have Some Lunch !! "
    }
    if (time.getHours() == nap) {
        document.getElementById("text").innerText = "Good Evening !! "
        document.getElementById("grab").innerText = "Stop Yawning, Get Some Tea.. launch_time's Just Evening  !! "
        document.getElementById("Mor_Img").src = "./images/goodEvening.png"
        document.getElementById("Mor_Img").style.borderRadius = "2vw"
    }
    if (time.getHours() == night) {
        document.getElementById("text").innerText = "Good Night !! "
        document.getElementById("Mor_Img").src = "./images/sleep.jpeg"
        document.getElementById("grab").innerText = "Close Your Eyes and Go to Sleep !! "
        document.getElementById("Mor_Img").style.borderRadius = "2vw"
    }
   


    function Wake_Time() {
        let afterW = parseInt(wake) + 1;
        if (wake < 12) {
            if (wake < 11)
                return wake + " AM - " + afterW + " AM"
            else return wake + " AM - " + afterW + " PM"
        }
        else {
            afterW = afterW - 12;
            wake = wake - 12;
            if (wake < 11)
                return wake + " PM - " + afterW + " PM";
            else return wake + " PM - " + afterW + " AM";
        }
    }
    console.log(Wake_Time())
    
    function LT() {
        let AL = parseInt(lunch) + 1;
        if (lunch < 12) {
            if (lunch < 11)
                return lunch + " AM - " + AL + " AM"
            else return lunch + " AM - " + AL + " PM"
        }
        else {
            AL = AL - 12;
            lunch = lunch - 12;
            if (lunch < 11)
                return lunch + " PM - " + AL + " PM";
            else return lunch + " PM - " + AL + " AM";
        }
    }

    function Nap_Time() {
        let AN = parseInt(nap) + 1;
        if (nap < 12) {
            if (nap < 11)
                return nap + " AM - " + AN + " AM";
            else return nap + " AM - " + AN + " PM";
        }
        else {
            AN = AN - 12;
            nap = nap - 12;
            if (nap < 11)
                return nap + " PM - " + AN + " PM";
            else return nap + " PM - " + AN + " AM";
        }
    }

    function Night_Time() {
        let AT = parseInt(night) + 1;
        if (night < 12) {
            if (night < 11)
                return night + " AM - " + AT + " AM"
            else return night + " AM - " + AT + " PM"
        }
        else {
            AT = AT - 12;
            night = night - 12;
            if (night < 11)
                return night + " PM - " + AT + " PM";
            else return night + " PM - " + AT + " AM";
        }
    }
    document.getElementById("wakeT").innerText = Wake_Time();
    document.getElementById("lunchT").innerText = LT()
    document.getElementById("napT").innerText = Nap_Time()
    document.getElementById("nightT").innerText = Night_Time()

    console.log(LT())

   
}
console.log(setAlarm())
