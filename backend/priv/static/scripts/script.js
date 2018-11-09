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

function getMeetingRoomName() {
    const url = 'http://localhost:4000/api/room';

    return fetch(url).then(r => r.json()).catch(e => 'Undefined Room');
}
