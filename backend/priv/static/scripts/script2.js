const roomNameContainer = document.getElementById('name');
const dashboard = document.getElementById('dashboard');
var radius = 114;
var outerRadius = radius - 10;
var dtg = new Date();
var hands = {};
var numbers = document.getElementById('numbers');
var ticks = document.getElementById('ticks');
var mark;
var rotation;
var number;
var angle;

hands.second = (dtg.getSeconds() + dtg.getMilliseconds() / 1000) / 60;
hands.minute = (dtg.getMinutes() + hands.second) / 60;
hands.hour = (dtg.getHours() % 12 + hands.minute) / 12;

for (key in hands) {
  document.getElementById(key).setAttribute('transform', "rotate(" + (hands[key] * 360) + ")");
}


function cE(type) {
  return document.createElementNS("http://www.w3.org/2000/svg", type);
}

function createMark(group, outerRadius, length, rotation) {
  var mark = cE('line');
  mark.setAttribute('x1', outerRadius - length);
  mark.setAttribute('x2', outerRadius);
  mark.setAttribute('y1', '0');
  mark.setAttribute('y2', '0');
  mark.setAttribute('transform', 'rotate(' + rotation + ')');
  group.appendChild(mark);
}

for (var i = 0; i < 12; i++) {
  number = cE('text');
  angle = Math.PI / 6 * i;
  number.setAttribute('x', radius * Math.cos(angle));
  number.setAttribute('y', radius * Math.sin(angle));
  number.innerHTML = ((i + 2) % 12 + 1);
  numbers.appendChild(number);
  rotation = i * 30;
  createMark(ticks, outerRadius, 16, rotation);

  for (j = 1; j < 5; j++) {
    createMark(ticks, outerRadius, 8, rotation + j * 6);
  }
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