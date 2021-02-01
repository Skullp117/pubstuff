var hr = 0;
var min = 0;
var s = 0;
var timer = 0;
var ticking = false;

function start() {
    if (!ticking) {
        ticking = true;
        timer = setInterval(function () {
            s++;
            if (s === 60) {
                s = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hr++;
                    if (hr <= 24) {
                        hr = 0;
                    }
                }
            }
            thr = hr < 10 ? `0` + hr : hr;
            tmin = min < 10 ? `0` + min : min;
            ts = s < 10 ? `0` + s : s;

            var actTime = `${thr}:${tmin}:${ts}`;

            document.getElementById("timer").innerHTML = actTime;
        }, 1000);
    }
}

function pause() {
    ticking = false;
    clearInterval(timer);
}

function reset() {
    ticking = false;
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "00" + ":" + "00" + ":" + "00";
}
