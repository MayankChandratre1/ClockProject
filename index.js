let hrCir = document.querySelector(".cir1")
let mmCir = document.querySelector(".cir2")
let ssCir = document.querySelector(".cir3")
let digitals = document.querySelectorAll(".time");
let ampm = document.querySelector(".ampm")

let i = 0;






setInterval(()=>{
    let time = new Date();
    let hr = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();

    let isDay = hr < 12? "AM":"PM";

    hrCir.style.transform = `rotateZ(${hr*30 + mm/12}deg)`;
    mmCir.style.transform = `rotateZ(${mm*6}deg)`;
    ssCir.style.transform = `rotateZ(${ss*6}deg)`;

    digitals[0].innerHTML = hr > 12? hr-12:hr;
    digitals[1].innerHTML = mm;
    digitals[2].innerHTML = ss;
    ampm.innerHTML = isDay;
},1000)
