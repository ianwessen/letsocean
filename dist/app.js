'use strict';

// import { sum } from '../data/data.js'

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('thing')
//     console.log('thing2', sum(4,9))
// })

document.addEventListener('scroll', function (e) {

    var depth = e.pageY || window.scrollY;
    var pressure = 1 + 0.05 * depth;

    var depthCounter = document.getElementById('js-depth-counter');
    var pressureCounter = document.getElementById('js-pressure-counter');
    depthCounter.innerHTML = 'Depth: ' + Math.floor(depth / 2) + 'm';
    pressureCounter.innerHTML = 'Pressure: ' + Math.floor(pressure) + ' atm';

    // 10m = 2*P
    // 1m = 0.2 * P
});
