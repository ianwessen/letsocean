
import sum from './data';

document.addEventListener('DOMContentLoaded', function () {

    console.log('thing');
    console.log('thing2', sum(4, 9));
});

document.addEventListener('scroll', function (e) {

    let depth = e.pageY || window.scrollY;
    let pressure = 1 + 0.05 * depth;

    const depthCounter = document.getElementById('js-depth-counter');
    const pressureCounter = document.getElementById('js-pressure-counter');
    depthCounter.innerHTML = 'Depth: ' + Math.floor(depth / 2) + 'm';
    pressureCounter.innerHTML = 'Pressure: ' + Math.floor(pressure) + ' atm';

    // 10m = 2*P
    // 1m = 0.2 * P
});
