const roomNameContainer = document.getElementById('name');
const dashboard = document.getElementById('dashboard');
const currentMeetingContainer = document.getElementById('current');
const nextMeetingContainer = document.getElementById('next');
const digitalTimeContainer = document.getElementById('time');

const secondsArrow = document.getElementById('seconds');
const minutesArrow = document.getElementById('minutes');
const hoursArrow = document.getElementById('hours');


const roomName = document.createTextNode('Stockholm');
roomNameContainer.appendChild(roomName);


/**
 * Launches timer that shown time in HH:MM format
 */
function startTimer() {
    function checkTime(i) {
        return (i < 10) ? '0' + i : i;
    }

    const today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());

    digitalTimeContainer.innerHTML = h + ':' + m;
    const timer = setTimeout(() => {
        startTimer();
        moveArrows(h, m, s);
    }, 1000);
}

startTimer();

function moveArrows(hours, minutes, seconds) {
    moveSecondsArrow(seconds * 6);
    moveMinutesArrow(minutes * 6);
    moveHoursArrow(hours * 30);
}

function moveSecondsArrow(deg) {
    secondsArrow.style.transform = `rotate(${deg}deg)`;
}

function moveMinutesArrow(deg) {
    minutesArrow.style.transform = `rotate(${deg}deg)`;
}

function moveHoursArrow(deg) {
    hoursArrow.style.transform = `rotate(${deg}deg)`;
}