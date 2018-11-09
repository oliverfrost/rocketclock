const roomNameContainer = document.getElementById('name');
const dashboard = document.getElementById('dashboard');
const currentMeetingContainer = document.getElementById('current');
const nextMeetingContainer = document.getElementById('next');
const digitalTimeContainer = document.getElementById('time');

const dateContainer = document.getElementById('weekday');
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
    dateContainer.innerHTML = getPrettyDate(today);

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

/**
 * Returns date in format 'Week Day, DD.MM.YYYY'
 *
 * @param date {Date}
 * @returns {string}
 */
function getPrettyDate(date) {
    return `${getDayName(date.getDay())}, ${getDDMMYYYYDate(date)}`
}

function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return '';
    }
}

function getDDMMYYYYDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return  `${dd}.${mm}.${yyyy}`
}