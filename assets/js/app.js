const hour = document.getElementById('hour')
const munite = document.getElementById('munite')
const second = document.getElementById('second')
const am = document.getElementById('am')
const hour_div = document.getElementById('hour_div')
const munite_div = document.getElementById('munite_div')
const second_div = document.getElementById('second_div')
const hour_svg = document.getElementById('hour_svg')
const munite_svg = document.getElementById('munite_svg')
const second_svg = document.getElementById('second_svg')
const dots_hour_round = document.querySelector('.dots_hour_round')
const dots_munite_round = document.querySelector('.dots_munite_round')
const dots_second_round = document.querySelector('.dots_second_round')



const clock =()=>{
    const date = new Date();
    let h= date.getHours().toLocaleString();
    let m = date.getMinutes();
    let s= date.getSeconds();
    let ampm = h>=12? "pm": "am"
    
    if(h>12){
        h= h-12
    };

    h=(h<10)? "0" +h:h
    m=(m<10)? "0" +m:m
    s=(s<10)? "0" +s:s


    hour.innerHTML = h;
    munite.innerHTML = m;
    second.innerHTML = s;
    am.innerHTML = ampm;
    hour_svg.style.strokeDashoffset =440 -(440*h)/12;
    munite_svg.style.strokeDashoffset =440 -(440*m)/60;
    second_svg.style.strokeDashoffset =440 -(440*s)/60;

    dots_hour_round.style.transform=`rotateZ(${h*30}deg)`;
    dots_munite_round.style.transform=`rotateZ(${m*6}deg)`;
    dots_second_round.style.transform=`rotateZ(${s*6}deg)`;
}

setInterval(clock,1000)
