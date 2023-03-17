const smallSquare = document.querySelector('.box');
const radius = 210;
const centerX = 237;
const centerY = 237;
let angle = 0;

function move() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    smallSquare.style.top = y + 'px';
    smallSquare.style.left = x + 'px';

    angle += Math.PI / 180;

    setTimeout(move, 10)
}

move()

const counterElement = document.querySelector('#counter');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
let counter = 0;
let intervalId = null;

startButton.addEventListener('click', () => {
    intervalId = setInterval(() => {
        counter++;
        counterElement.textContent = counter;
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});
