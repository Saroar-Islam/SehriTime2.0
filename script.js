const times = [
    "05:04",
    "05:03",
    "05:02",
    "05:01",
    "05:00",
    "04:59",
    "04:58",
    "04:57",
    "04:56",
    "04:55",
    "04:54",
    "04:54",
    "04:53",
    "04:52",
    "04:51",
    "04:50",
    "04:49",
    "04:48",
    "04:47",
    "04:46",
    "04:45",
    "04:44",
    "04:44",
    "04:43",
    "04:42",
    "04:41",
    "04:40",
    "04:39",
    "04:38",
    "04:36",
    "04:35",
    "04:34",
];

const ifterTime = [
    "6:02",
    "6:03",
    "6:03",
    "6:04",
    "6:04",
    "6:05",
    "6:05",
    "6:06",
    "6:06",
    "6:07",
    "6:07",
    "6:08",
    "6:08",
    "6:09",
    "6:09",
    "6:09",
    "6:10",
    "6:10",
    "6:11",
    "6:11",
    "6:12",
    "6:12",
    "6:13",
    "6:13",
    "6:14",
    "6:14",
    "6:15",
];

// Function to subtract minutes from time
function subtractMinutes(time, minutes) {
    let [hours, mins] = time.split(":").map(Number);
    mins -= minutes;
    while (mins < 0) {
        mins += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
    }
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

const arrayMinus10 = times.map((time) => subtractMinutes(time, 10));
const arrayMinus20 = times.map((time) => subtractMinutes(time, 20));

const now = new Date();
const fullDate = `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
)}-${now.getFullYear()}`;

document.getElementById("currentDate").innerHTML = fullDate;

const arrayIndex = now.getDate() - 2;

document.getElementById("ramadan").innerHTML = arrayIndex + 1;

const lastTimeSpan = (document.getElementById("lastTimeSpan").innerHTML = times[arrayIndex]);
document.getElementById("brush").innerHTML = arrayMinus10[arrayIndex];
document.getElementById("otherStuff").innerHTML = arrayMinus20[arrayIndex];
const iftarTimeSpan = (document.getElementById("iftarTimeSpan").innerHTML = ifterTime[arrayIndex]);

const nextDaySehri = (document.getElementById("nextDaySehri").innerHTML += times[arrayIndex + 1]);

// clock
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = String(hours).padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display the time immediately on page load
