class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // this.stopButton  = stopButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        // this.stopButton.addEventListener('click', this.stop)
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeLeft);
        }
        this.tick();
        this.interval = setInterval( () => {this.tick()}, 20 );
    }
    pause = () => {
        clearInterval(this.interval)
    }
    // stop = () => {
    //     clearInterval(this.interval);
    //     this.durationInput.value = 0;
    // }
    tick = () => {
        if(this.durationInput.value <= 0){
          this.pause();
          if(this.onComplete){
              this.onComplete();
          }
        } else {
            this.timeLeft = this.timeLeft - 0.02;
            if(this.onTick){
               this.onTick(this.timeLeft);
            }
        }
    }
    get timeLeft() {
        return parseFloat(this.durationInput.value)
    }
    set timeLeft(time) {
        this.durationInput.value = time.toFixed(2);
    }
}