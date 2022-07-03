let timer = document.querySelector('[data-js="timer"]')
let buttonStart = document.querySelector('[data-js="start"]');
let buttonStop = document.querySelector('[data-js="stop"]');
let buttonReset = document.querySelector('[data-js="reset"]');
let interval

buttonStart.addEventListener('click', startTime)
buttonStop.addEventListener('click', stopTime)
buttonReset.addEventListener('click', resetTime)

function startTime() {
    timer.value++
    interval = setTimeout(startTime,1000)
}

function stopTime() {
    clearTimeout(interval)
}

function resetTime() {
    timer.value = 0
    stopTime()
}
