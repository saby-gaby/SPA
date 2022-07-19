let timerID = null;
let startTime = null;

function tick() {
    // console.log("tick");
    const date = Date.now();
    const passedTime=(date - startTime);
    const minutes = Math.floor(passedTime / 60000);
    const seconds = Math.floor((passedTime % 60000)/1000);
    const hunderthSeconds = Math.round(((passedTime % 60000) % 1000)/10);
    
    console.log(minutes, seconds, hunderthSeconds);
}

function startTimer() {
    console.log('start');
    startTime=Date.now()
    timerID = setInterval(tick, 1);
}

function stopTimer() {
    clearInterval(timerID)
}

startTimer()

setTimeout(stopTimer,11000)