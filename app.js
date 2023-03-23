const display = document.getElementById('clock')

function updateTime() {

const date = new Date();

let hour = formatTIme(date.getHours());
let minutes = formatTIme(date.getMinutes());
let seconds = formatTIme(date.getSeconds());

display.innerText = `${hour} : ${minutes} : ${seconds}`
}

function formatTIme(time){
    if(time < 10){
        return '0' + time
    }
    return time
}

setInterval(updateTime, 1000);