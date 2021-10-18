function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

clearTimeout();
setTimeout(printTime, 1000);