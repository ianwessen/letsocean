'use strict';


document.addEventListener(
    'DOMContentLoaded',
    event => {
        const depthList = document.querySelector('.depth-markers');

        data.depthListData.forEach( element => {
            depthList.appendChild(
                DOMcreateDepthMarker(getViewObject(element.key, data.depthListData))
            )
        })
    }
)

document.addEventListener(
    'scroll', 
    event => {

        var depth = event.pageY || window.scrollY;
        var pressure = 1 + 0.05 * depth;

        var depthCounter = document.getElementById('js-depth-counter');
        depthCounter.innerHTML = 'Depth: ' + Math.floor(depth / 2) + 'm';

        var pressureCounter = document.getElementById('js-pressure-counter');
        pressureCounter.innerHTML = 'Pressure: ' + Math.floor(pressure) + ' atm';

    }
);

function getViewObject(query, listOfObjects) {
    return listOfObjects.filter((element) => {
        return element.key === query
    })[0] || {};
}

function DOMcreateDepthMarker(viewObject) {
    const depthMarker = document.createElement( 'li' );
    depthMarker.classList = `depth-mark depth-mark--${viewObject.key}`
    depthMarker.innerHTML = `${viewObject.depth}m — ${viewObject.description}`

    const topString = `top: ${viewObject.depth / data.pixelRatio}px;`;
    const leftOrRightString = `${ viewObject.alignRight ? 'right: 0;' : 'left: 0;'}`;

    depthMarker.setAttribute('style', `${topString} ${leftOrRightString}`);
    return depthMarker
}


const data = {
    depthListData: [
        {
            key: 'champagne',
            description: 'Pressure here would force the cork of a champagne bottle backwards in to the bottle.',
            depth: 10,
            alignRight: false,
        },
        {
            key: 'thermocline',
            description: 'Though the ocean\'s surface termperature varies between the arctic and the tropics, almost the entire ocean below this line hovers around 2°C (35°F).',
            depth: 100,
            alignRight: true,
        },
        {
            key: 'freeDive',
            description: 'Depth of deepest human free dive by Herbert Nitsch in 2012.',
            depth: 214,
            alignRight: false,
        },
        {
            key: 'fireHose',
            description: 'Water at this pressure would run backwards up a fire hose.',
            depth: 200,
            alignRight: true,
        },
        {
            key: 'scubaDive',
            description: 'Depth of the deepest Scuba dive by Ahmed Gabr in 2014.',
            depth: 332,
            alignRight: true,
        },
        {
            key: 'seawolfSub',
            description: 'Maximum certified pressure for Seawolf-class nuclear submarine.',
            depth: 500,
            alignRight: true,
        },
        {
            key: 'ohioSub',
            description: 'Crush depth of Ohio-class nuclear submarines',
            depth: 730,
            alignRight: false,
        },
        {
            key: 'burjKhalifa',
            description: 'The Burj Khalifa upside down would reach this depth.',
            depth: 828,
            alignRight: true,
        },
        {
            key: 'venusAtmosphere',
            description: 'Pressure at nearly a kilometer down is the typical surface air pressure on the planet Venus.',
            depth: 920,
            alignRight: false,
        },
        {
            key: 'spermWhale',
            description: 'Sperm whales can hold their breath for an hour and dive down to here.',
            depth: 1200,
            alignRight: true,
        },
        {
            key: 'baikal',
            description: 'This is the depth of the deepest lake in the world, Lake Baikal in Russia.',
            depth: 1642,
            alignRight: false,
        },
        {
            key: 'scubaTank',
            description: 'Here, if you punched a hole in a Scuba tank, air wouldn\'t come out, water would rush in.',
            depth: 2382,
            alignRight: true,
        },
        {
            key: 'goldenGate',
            description: 'The Golden Gate bridge, if dangling from the surface of the water, would length-wise reach to this depth.',
            depth: 2737,
            alignRight: false,
        },
        {
            key: 'supercriticalFLuids',
            description: 'At this depth, geothermal vents heat water to 464°C (867°F) but the pressure prevents it from boiling. Instead it exists as a supercritical fluid, where its gas and liquid states are almost indistinguishable.',
            depth: 3000,
            alignRight: false,
        },
        {
            key: 'titanic',
            description: 'The Titanic is resting here.',
            depth: 3800,
            alignRight: true,
        },
        {
            key: 'ussRioGrande',
            description: 'The USS Rio Grande was discovered at this depth, the deepest shipwreck ever found.',
            depth: 5762,
            alignRight: false,
        },
        {
            key: 'denali',
            description: 'Denali, the tallest mountain in North America, placed upside down would reach here.',
            depth: 6168,
            alignRight: true,
        },
        {
            key: 'puertoRicoTrench',
            description: 'This is the depth of the Puerto Rico Trench, the deepest point in the Atlantic Ocean.',
            depth: 8400,
            alignRight: false,
        },
        {
            key: 'mountEverest',
            description: 'Mount Everest upside down would reach this far.',
            depth: 8848,
            alignRight: false,
        },
        {
            key: 'deepwaterHorizon',
            description: 'Deepest vertical oil well ever dug, done by Deepwater Horizon in 2009.',
            depth: 10683,
            alignRight: true,
        },
        {
            key: 'marianasTrench',
            description: 'This is the depth of the Marianas Trench, the deepest point on the surface of Earth.',
            depth: 10994,
            alignRight: false,
        },
        {
            key: 'kolaBoreHole',
            description: 'Depth of the Kola Bore Hole, the deepest hole ever dug. The Russian engineers who dug this still weren\'t more than a third of the way through Earth\'s crust.',
            depth: 12289,
            alignRight: false,
        },
    ],
    pixelRatio: .5
}


