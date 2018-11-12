const numbers = document.getElementById('numbers');
const ticks = document.getElementById('ticks');
const roomNameContainer = document.getElementById('name');

const radius = 114;
const outerRadius = radius - 10;


function start() {
    // getMeetingRoomName()
    //     .then(r => {
    //         const roomName = document.createTextNode(r.room);
    //         roomNameContainer.appendChild(roomName);
    //     });
    //
    // createDivisions();
    // updateHandsPosition();

    const clock = new Clock();
    clock.start();
}

start();

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

    return `${dd}.${mm}.${yyyy}`
}

/**
 * Fetches room name from the server
 *
 * @returns {Promise<any>}
 */
function getMeetingRoomName() {
    const url = 'http://localhost:4000/api/room';

    return fetch(url).then(r => r.json());
}

function getRoomBookings() {
    const url = 'http://localhost:4000/api/room';

    return fetch(url)
        .then(data => data.json())
        .then(results => {

            const bookings = results.map(r => {
                r.from = new Date(r.from * 1000);
                r.to = new Date(r.to * 1000);

                return r;
            });


            console.log(bookings);



    });
}
