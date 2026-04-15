const updateClock = () => {
    let date = new Date()
    let hourstime = date.getHours();
    let minutestime = date.getMinutes();
    let secondstime = date.getSeconds();
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    if (secondstime < 10) {
        secondstime = '0' + secondstime;
    }
    if (hourstime < 10) {
        hourstime = '0' + hourstime;
    }
    if (minutestime < 10) {
        minutestime = '0' + minutestime;
    }

    hours.textContent = hourstime
    minutes.textContent = minutestime
    seconds.textContent = secondstime
}
setInterval(updateClock, 1000)
updateClock()