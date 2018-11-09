class Clock {
    constructor() {
        this.updateHandsPosition();
        this.createDivisions();
        this.timer = null;
    }

    start() {
        this.timer = setInterval(this.updateHandsPosition, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }

    updateHandsPosition() {
        const date = new Date();
        const hands = {};

        hands.second = (date.getSeconds() + date.getMilliseconds() / 1000) / 60;
        hands.minute = (date.getMinutes() + hands.second) / 60;
        hands.hour = (date.getHours() % 12 + hands.minute) / 12;

        for (let key in hands) {
            document.getElementById(key).setAttribute('transform', `rotate(${hands[key] * 360})`);
        }
    }

    createDivisions() {
        let number, angle, rotation;

        function createElement(type) {
            return document.createElementNS('http://www.w3.org/2000/svg', type);
        }

        function createMark(group, outerRadius, length, rotation) {
            const mark = createElement('line');

            mark.setAttribute('x1', outerRadius - length);
            mark.setAttribute('x2', outerRadius);
            mark.setAttribute('y1', '0');
            mark.setAttribute('y2', '0');
            mark.setAttribute('transform', `rotate(${rotation})`);
            group.appendChild(mark);
        }

        for (let i = 0; i < 12; i++) {
            number = createElement('text');
            angle = Math.PI / 6 * i;
            number.setAttribute('x', radius * Math.cos(angle));
            number.setAttribute('y', radius * Math.sin(angle));
            number.innerHTML = ((i + 2) % 12 + 1);
            numbers.appendChild(number);

            rotation = i * 30;
            createMark(ticks, outerRadius, 16, rotation);

            for (let j = 1; j < 5; j++) {
                createMark(ticks, outerRadius, 8, rotation + j * 6);
            }
        }
    }
}