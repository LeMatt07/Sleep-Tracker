function checkHours(){
    const night = parseInt(document.getElementById("nightSleep").value);
    const wake = parseInt(document.getElementById("didTheyWakeUp").value);
    const nap = parseInt(document.getElementById("nap").value);
    total = night - wake +nap;
    let message = "";
    if (total >= 8){
        message = `Yous slept for ${total} hours yesterday. That's a good amount of hours!`
    }
    else if (total === 7 || total === 6){
        message = `Yous slept for ${total} hours yesterday. That's a decent amount of hours.`
    }
    else{
        message = `Yous slept for ${total} hours yesterday. I recommend finding more time to sleep.`
    }
    document.getElementById("hoursMsg").textContent = message;
}