// The stopWatch is stored as a function
function stopWatch () {

    // Storing and creating variables for the elements
    let minutes = 0o0;
    let seconds = 0o0;
    let tens = 0o0;

    const appendMinutes = document.getElementById('minutes');
    const appendSeconds = document.getElementById('seconds');
    const appendTens = document.getElementById('tens');

    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const resetBtn = document.getElementById('reset');

    let interval;

    // This is the code for the timer itself 
    const startTimer = () => {
        tens++;

        if (tens > 9 ) {
            appendTens.innerText = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerText = '0' + seconds;
            tens = 0;
            appendTens.innerText = '0' + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerText = seconds;
        }
        if (seconds > 59) {
            minutes++
            appendMinutes.innerText = '0' + minutes
            seconds = 0;
            appendSeconds.innerText = '0' + seconds;
        }
        if (minutes > 9) {
            appendMinutes.innerText = minutes
        }
    }

    // Added eventListeners to each button to give them functionality 
    startBtn.addEventListener('click', function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })    

    stopBtn.addEventListener('click', function () {
        clearInterval(interval);
    })

    resetBtn.addEventListener('click', function () {
        clearInterval(interval);
        minutes = '00';
        seconds = '00';
        tens = '00';
        appendMinutes.innerText  = minutes;
        appendSeconds.innerText = seconds;
        appendTens.innerText = tens;
    })

}

// Call the function
stopWatch();