var second = 0;
var minute = 0;
var hour = 0;

var isRunning = false

$(".start").on("click", startCount)

$(".pause").on("click", pauseCount)

$(".reset").on("click", resetCount)

function startCount() {

    if (isRunning === false) {
        isRunning = true
        intervalId = setInterval(updateTime, 1000);
    }
    playAudio()
}

function pauseCount() {
    clearInterval(intervalId);
    isRunning = false;
    playAudio()
}

function resetCount() {

    clearInterval(intervalId);

    isRunning = false

    second = 0;
    minute = 0;
    hour = 0;

    $("h1").text("00:00:00");

    playAudio()
}


function updateTime() {

    isRunning = true
    second++

    if (second < 10) {
        var formattedSecond = "0" + second;
    } else {
        formattedSecond = second;
    }
    if (minute < 10) {
        formattedMinute = "0" + minute;
    } else {
        formattedMinute = minute;
    }
    if (hour < 10) {
        formattedHour = "0" + hour;
    } else {
        formattedHour = hour
    }


    if (second === 59) {
        minute++;
        second = 0;
    }
    if (minute === 59) {
        hour++;
        second = 0;
    }

    var time = formattedHour + ":" + formattedMinute + ":" + formattedSecond;
    $("h1").text(time);

}

function playAudio(){
    var audio = new Audio("assets/button-sound.mp3")
    audio.play()
}

