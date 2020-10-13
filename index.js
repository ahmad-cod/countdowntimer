const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
// const stopButton = document.querySelector('#stop');
const circle = document.querySelector("circle");

const circumference = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", circumference);
console.log(circumference)

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
     duration = totalDuration;
    },
    onTick(timeLeft) {  
      circle.setAttribute('stroke-dashoffset', 
      circumference * timeLeft / duration - circumference);
    },
    onComplete() {
     console.log('Timer completed')
    }
})