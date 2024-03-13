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

    const ifterArr = [
        "6:10",
        "6:10",
        "6:11",
        "6:11",
        "6:12",
        "6:12",
        "6:12",
        "6:13",
        "6:13",
        "6:13",
        "6:14",
        "6:14",
        "6:14",
        "6:15",
        "6:15",
        "6:16",
        "6:16",
        "6:17",
        "6:17",
        "6:18",
        "6:18",
        "6:19",
        "6:19",
        "6:19",
        "6:20",
        "6:20",
        "6:21",
        "6:21",
        "6:21",
        "6:22",
    ];

    const iftar = document.querySelector("#iftarTimeSpan");
    iftar.innerText = ifterArr[daysSince - 1];
}

function reload() {
    location.reload();
}

// var dt = new Date();
// dt.setMinutes( dt.getMinutes() - 20 );
// console.log('#####',dt);
