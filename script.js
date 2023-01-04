const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const mins = document.querySelector("#mins")
const sec = document.querySelector("#secs")

let finalDate = new Date("January 22, 2023 00:00:00 ").getTime()
setInterval(() => {
    let currentDate = new Date().getTime()
    let remainingTime = finalDate - currentDate;
    let day = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    let hour = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let min = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    let sec = Math.floor((remainingTime % (1000 * 60)) / 1000)

    days.innerHTML = `${day}d`;
    hours.innerHTML = `${hour}h`;
    mins.innerHTML = `${min}m`;
    secs.innerHTML = `${sec}s`;




}, 1000)

