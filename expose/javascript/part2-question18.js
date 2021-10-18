function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

clearInterval();
setInterval(printTime(), 1000);