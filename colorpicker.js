let slider = document.getElementById('myinput');
var headcolor = document. getElementsByClassName('head'); // get all elements.

slider.addEventListener('change', (ev) => {
        let res = test(ev.target.value)
        // d2.innerText = ev.target.value + ' color: ' + res
        for(var i = 0; i < headcolor. length; i++){
            headcolor[i]. style. fill = res;
        }
    })
    function test(value) {
        let colorPicked = pickRgbRange(value,
            { color: [255, 0, 228, 1], position: 0 },
            { color: [0, 194, 255, 1, 1], position: 15 },
            { color: [35, 200, 0, 1], position: 35 },
            { color: [255, 250, 164], position: 50 },
            { color: [255, 0, 0, 1], position: 75 },
            { color: [0, 0, 0, 1], position: 100 }
        );
        let resultRgba = `rgba(${colorPicked[0]},${colorPicked[1]},${colorPicked[2]},${colorPicked[3]})`;
        return resultRgba
    }

    //(ildarin cc0) Start copy from here: ----------------------------------
    /** @description usage
       let colorPickedRgba = pickRgbRange(value,
         {color:[255,0,228,1], position:0},
         {color:[0,194,255,1,0.5], position:.15},
         {color:[35,200,0,1], position:.35},
         {color:[255, 250, 164], position:.50},
         {color:[255,0,0,1], position:.75},
         {color:[0,0,0,1], position:.100}
         )
         let resultRgba = `rgba(${colorPicked[0]},${colorPicked[1]},${colorPicked[2]},${colorPicked[3]})`
    */
    function pickRgbRange(position, ...elements) {
        var [left, right, weight] = pickClosest(position, ...elements);
        return pickRgba(left.color, right.color, weight);
    }

    function pickRgba(color1, color2, weight) {
        var w1 = weight;
        var w2 = 1 - w1;
        var rgba = [
            Math.round(color1[0] * w2 + color2[0] * w1),
            Math.round(color1[1] * w2 + color2[1] * w1),
            Math.round(color1[2] * w2 + color2[2] * w1),
            1
        ];
        return rgba;
    }

    function pickClosest(position, ...elements) {
        var left = elements[0],
            right = { color: [0, 0, 0], position: Number.MAX_VALUE };
        var leftIndex = 0;
        for (var i = 0; i < elements.length; i++) {
            if (position >= elements[i].position && position > left.position) {
                left = elements[i];
                leftIndex = i;
            }
        }
        if (elements.length - 1 === leftIndex) {
            right = elements[leftIndex];
        }
        else {
            right = elements[leftIndex + 1];
        }
        if (left == right) {
            return [right, right, 0];
        }
        var dleft = position - left.position;
        var sum = dleft + right.position - position;
        var weight = dleft / sum;
        return [left, right, weight];
    }
    