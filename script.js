function convertTo24Hour() {
    var initialDate = new Date(2024, 2, 11); // Attention: month is zero-based
    var now = Date.now();
    var difference = now - initialDate;
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var daysSince = Math.floor(difference / millisecondsPerDay);

    const daySinceDiv = document.querySelector("#daysince");
    // daySinceDiv.innerHTML += daysSince;

    let inputBox = document.getElementById("inputBox").value;
    console.log("inputBox: " + inputBox);

    let main = inputBox + " AM";
    // console.log("main: " + main);

    let inputTime = main;

    function timeFn(timeString) {
        let date = new Date(`01/01/2022 ${timeString}`);
        let formattedTime = date.toLocaleTimeString("en-US", { hour12: false });
        return formattedTime;
    }

    let result = timeFn(main);

    let arr = result.split(":");
    // console.log(result.split(":"));

    var date = new Date();
    let currentDate = document.querySelector("#currentDate");
    currentDate.innerHTML = date.getDate();
    currentDate.innerHTML += " March, ";
    let ramadan = document.querySelector("#ramadan");
    ramadan.innerText = daysSince;
    ramadan.innerText += " Roja";

    let hour = date.setHours(arr[0]);
    let min = date.setMinutes(arr[1]);

    //lastTime
    date.setMinutes(arr[1] - daysSince + 1);

    let time0 =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    //minus 1st break
    date.setMinutes(arr[1] - 20 - daysSince + 1);

    let time1 =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    //minus 2nd break
    date.setMinutes(arr[1] - 10 - daysSince + 1);

    let time2 =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let smoke = document.getElementById("smoke");
    let brush = document.getElementById("brush");
    let lastTimeDiv = document.getElementById("lastTimeSpan");

    smoke.innerText = " " + time1;
    brush.innerText = " " + time2;
    lastTimeDiv.innerText = " " + time0;
}

function reload() {
    location.reload();
}

// var dt = new Date();
// dt.setMinutes( dt.getMinutes() - 20 );
// console.log('#####',dt);
