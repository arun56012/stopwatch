
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
    

});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    
});

function stopWatch() {
    if (timer) {
        minute++;

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        
        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;

        setTimeout(stopWatch, (1000*60));
    }
}