var today,hr,min,sec, clock,color1;
(function clocky() {
    today = new Date();
    hr = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();

if(hr <=9) {
    hr = "0" + hr;
}
if(min <= 9) {
    min = "o" + min;
}
if(sec<=9) {
    sec = "0" + sec;
}
clock = hr + ":" + min + ":" + sec;
color1 = "#" + hr + min + sec;
document.getElementById("clock").innerHTML = clock;
document.body.style.background = color1;
setTimeout(clocky,1000);
})();
