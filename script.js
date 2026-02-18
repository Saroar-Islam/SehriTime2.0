const sehriTimes = [
    "05:12",
    "05:11",
    "05:11",
    "05:10",
    "05:09",
    "05:08",
    "05:08",
    "05:07",
    "05:06",
    "05:05",
    "05:05",
    "05:04",
    "05:03",
    "05:02",
    "05:01",
    "05:00",
    "04:59",
    "04:58",
    "04:57",
    "04:57",
    "04:56",
    "04:55",
    "04:54",
    "04:53",
    "04:52",
    "04:51",
    "04:50",
    "04:49",
    "04:48",
    "04:47",
];

const ifterTime = [
    "05:58",
    "05:58",
    "05:59",
    "05:59",
    "06:00",
    "06:00",
    "06:01",
    "06:01",
    "06:02",
    "06:02",
    "06:03",
    "06:03",
    "06:04",
    "06:04",
    "06:05",
    "06:05",
    "06:06",
    "06:06",
    "06:07",
    "06:07",
    "06:07",
    "06:08",
    "06:08",
    "06:09",
    "06:09",
    "06:10",
    "06:10",
    "06:10",
    "06:11",
    "06:11",
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

const arrayMinus10 = sehriTimes.map((time) => subtractMinutes(time, 10));
const arrayMinus20 = sehriTimes.map((time) => subtractMinutes(time, 20));

// Current date
const now = new Date();
const fullDate = `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(2, "0")}-${now.getFullYear()}`;

document.getElementById("currentDate").innerHTML = fullDate;

// Ramadan day calculation (Feb 19, 2026 is day 1)
const ramadanStart = new Date(2026, 1, 19); // Month is 0-based, so 1 = February (2026, 1, 19)
const diffDays = Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24));
const arrayIndex = diffDays; // 0-based index

document.getElementById("ramadanDay").innerHTML = arrayIndex + 1; // Display Ramadan day (1-based)

// Day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[now.getDay()];

document.getElementById("dayOfWeek").innerHTML = dayName;

// Current Sehri
document.getElementById("sehriLastTime").innerHTML = sehriTimes[arrayIndex];

// Offsets
document.getElementById("brush").innerHTML = arrayMinus10[arrayIndex];
document.getElementById("otherStuff").innerHTML = arrayMinus20[arrayIndex];

// Current Iftar
document.getElementById("iftarTime").innerHTML += ifterTime[arrayIndex];

// Next day Sehri
if (arrayIndex + 1 < sehriTimes.length) {
    document.getElementById("nextDaySehri").innerHTML += sehriTimes[arrayIndex + 1];
}

// Clock
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

console.log("Total Sehri times:", sehriTimes.length);
console.log("Total Iftar times:", ifterTime.length);
