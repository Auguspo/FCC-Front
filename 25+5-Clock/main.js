let breakIncrement = document.getElementById('breakIncrement')
let breakDecrement = document.getElementById('breakDecrement')
let breakLength = document.getElementById('break-length')

let sessionLength = document.getElementById('session-length')
let sessionIncrement = document.getElementById('sessionIncrement')
let sessionDecrement = document.getElementById('sessionDecrement')

let startStop = document.getElementById('start_stop')
let reset = document.getElementById('reset')

let timeLeft = document.getElementById('time-left')
let label = document.getElementById("timer-label")
let timer, timerStatus = "Start"



startStop.addEventListener("click", () => {

    if (timerStatus === "Start" || timerStatus === "Stop") {

        console.log("star the timer");
        startStop.innerText = "Stop"
        timer = setInterval(() => { timeLeft.innerText = decrementTime(timeLeft.innerText) }, 10);
        timerStatus = "counting"

    }
    else if (timerStatus === "counting") {
        timerStatus = "Stop"
        startStop.innerText = "Start"
        clearInterval(timer)
    }
})

reset.addEventListener("click", () => {
    console.log('reset clicked')
    clearInterval(timer)

    breakLength.innerText = "5"
    sessionLength.innerText = "25"
    timeLeft.innerText = sessionLength.innerText + ":00"
    label.innerText = "Session"
    audio.stop()

})

function decrementTime(timeString) {
    let timeDisplay = timeString.split(":")
    let secondDisplay = parseInt(timeDisplay[1])
    let minuteDisplay = parseInt(timeDisplay[0])

    if (timeString == "00:00") {
        if (label.innerText == 'Session') {
            minuteDisplay = breakLength.innerText;
            label.innerText = "Break"
            console.log(" arranco el break de " + breakLength.innerText)
            play();
        }
        else if (label.innerText == "Break") {
            minuteDisplay = sessionLength.innerText
            label.innerText = "Session"
            play();
            console.log(" arranco la sesision de " + sessionLength.innerText)
        }
    }

    secondDisplay -= 1
    if (secondDisplay === -1) {
        secondDisplay = 59
        minuteDisplay -= 1
    }

    if (minuteDisplay === -1) { minuteDisplay = "0" }
    if (secondDisplay <= 9) {
        secondDisplay = "0" + secondDisplay
    }
    if (minuteDisplay <= 9) {
        minuteDisplay = "0" + minuteDisplay
    }


    return minuteDisplay + ":" + secondDisplay
}


function sessLeng(sign) {

    if (sign == '-' && sessionLength.innerText > 1) {
        sessionLength.innerText = parseInt(sessionLength.innerText) - 1
        timeLeft.innerText = sessionLength.innerText + ":00"
    }
    if (sign == '+' && sessionLength.innerText < 60) {
        sessionLength.innerText = parseInt(sessionLength.innerText) + 1
        timeLeft.innerText = sessionLength.innerText + ":00"
    }


}

function breakLeng(sign) {

    if (sign == '-' && breakLength.innerText > 1) { breakLength.innerText = parseInt(breakLength.innerText) - 1 }
    if (sign == '+' && breakLength.innerText < 60) { breakLength.innerText = parseInt(breakLength.innerText) + 1 }

}

function play() {
    var beep = new Audio("beep.wav")
    beep.loop = true;
    beep.play();
    setTimeout(() => { beep.pause(); }, 1000);
}