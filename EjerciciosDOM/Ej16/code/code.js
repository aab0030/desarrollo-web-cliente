let TIMER;

window.onload = function () {
    let botones = document.getElementsByTagName("input");

    botones[0].onclick = function (){
        TIMER = setInterval(() => {
            let meter = document.getElementsByTagName("meter")[0];
            if (meter.value < meter.max) {
                meter.value += 5;
            }else{
                this.disabled = true;
                clearInterval(TIMER);
            } 
        }, 250);
    }
    botones[1].onclick = function (){
        TIMER = setInterval(() => {
            let progress = document.getElementsByTagName("progress")[0];
            if (progress.value < progress.max) {
                progress.value += 5;
            }else{
                this.disabled = true;
                clearInterval(TIMER);
            } 
        }, 250);
    }
}