window.onload=AnalogClock();
function AnalogClock() {
    mydate = new Date;
    ss= mydate.getSeconds();
    mm=mydate.getMinutes();
    hh=mydate.getHours();

    second.style.transform="rotate(" + (ss*6) + "deg)";
    minute.style.transform="rotate(" + (mm*6) + "deg)";
    hour.style.transform="rotate(" + (hh*(360/12)+(mm * 30/60)) + "deg)"
    setTimeout("AnalogClock()",1000);
}
