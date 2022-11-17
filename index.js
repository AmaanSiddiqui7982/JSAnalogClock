let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
// let hrs = d.getHours();
// hour.innerHTML = str

setInterval(() => {
    let d = new Date();
    let hr = d.getHours()
    let mi = d.getMinutes()
    let time = d.getSeconds()
   
    let str = `<h6>${hr}</h6>`
    let str2 = `<h6>${mi}</h6>`
    let str3 = `<h6>${time}</h6>`
    hour.innerHTML = str
    second.innerHTML = str3
    minute.innerHTML = str2
    hour.style.color = "black" 
    minute.innerHTML = str2
}, 1000);