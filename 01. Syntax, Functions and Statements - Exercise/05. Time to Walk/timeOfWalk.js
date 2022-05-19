function timeOfWalk(steps, footPrint, speed) {
    let distanceInMeters = steps * footPrint;
    let speedMetersPerSeconds = speed / 3.6;
    let time = distanceInMeters / speedMetersPerSeconds;
    let rest = Math.floor(distanceInMeters / 500);

    //hh:mm:ss
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHrs = Math.floor(time / 3600);

    console.log((timeHrs < 10 ? "0" : "") + timeHrs + ":" +
        (timeMin + rest < 10 ? "0" : "") +
        (timeMin + rest) + ":" +
        (timeSec < 10 ? "0" : "") + timeSec
    );
}

/*
function timeOfWalk(steps, LengthMiter, kmPerHour) {
    let totalL = steps * LengthMiter;
    let admin = Math.floor(totalL/500);
    let timeHours = (totalL / 1000) / (kmPerHour);
    timeHours += admin / 60;
    let minutes = Math.floor(timeHours*60);
    let seconds = (timeHours*60%1*60).toFixed(0);

    console.log(`${String(Math.floor(timeHours)).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
};*/

/*
function ttw(...args) {
    const [x, y, z] = [...args];
    const aTime = Math.floor((x * y) / 500);
    const time = ((x * y) / (z / 3.6));
    let h = Math.floor(time / 3600);
    let m = Math.floor((time - (h * 3600)) / 60);
    let s = (time - (h * 3600) - (m * 60)).toFixed(0);
    const addZero = (obj) => {
        return obj < 10 ? '0' + obj : obj;
    }
    if(aTime > 59){
        let addHour = Math.floor(aTime / 60);
        let remainingMinutes = aTime -addHour * 60;
        h += addHour;
        m += remainingMinutes;
    }else{
        m += aTime;
    }
 
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
 
    return `${h}:${m}:${s}`;
}*/

timeOfWalk(4000, 0.6, 5);
timeOfWalk(2564, 0.70, 5.5);