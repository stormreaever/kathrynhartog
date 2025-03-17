<template>

    <div 
        class="w-full h-full absolute z-0 bg-black"
    >
        <canvas class="animate-fade1" ref="c" width="480px" height="270px" style="height: 100%; width: 100%" ></canvas>
    </div>

</template>

<style>

.bg-swirl {
    background: #161267 url('@/assets/img/gradient3.png') no-repeat;
    background-size: cover;
}

</style>

<script setup>


import { createNoise3D } from 'simplex-noise';
const noise3D = createNoise3D();

const c = ref(null)
// const canvas = c.value

let t = 0;


function frame() {

    const canvas = c.value

    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {

            const pixel = getPixel(x, y, canvas.width, t);

            const index = (x + y * canvas.width) * 4;
            imageData.data[index] = pixel[0]; // Red channel
            imageData.data[index + 1] = pixel[1]; // Green Channel
            imageData.data[index + 2] = pixel[2]; // Blue channel
            imageData.data[index + 3] = 255; // Alpha channel
        }
    }

    t++

    ctx.putImageData(imageData, 0, 0);

    if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(frame)
    }
    

}

if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(frame)
}


function mapRange (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function getPixel(x, y, scale, t) {
    const pixel = noise3D(x / scale, y / scale, t / 1000); // value is from -1 to 1
    // const normalized = mapRange(pixel, -1, 1, 0, 255); // if black & white
    const normalized = mapRange(pixel, -1, 1, 0, 1);
    // const noise = randomNoisePixel()
    // const noisified = Math.min(normalized, noise)
    // const noisified = normalized + noise
    // const colorMapped = gradientLerp(noisified, blueGradient);
    const colorMapped = gradientLerp(normalized, blueGradient);
    return colorMapped;
}

function randomNoisePixel() {
    let value = Math.random()
    value = mapRange(value, 0, 1, 0.3, 1.2)

    // value = value * 0.5
    return value
}



// gradient from sketch DAT
const blueGradient = [
    [0, 0.019563839, 0.000038499355, 0.072, 1],
    [0.3400504, 0.124133304, 0, 0.392, 1],
    [0.38790935, 0.27854988, 0, 0.619, 1],
    [0.48614612, 0.08753166, 0.070928, 0.403, 1],
    [0.6600497, 0.0026319392, 0.00023993968, 0.072, 1],
    [1, 0.019563839, 0.000038499355, 0.072, 1],
]

// number should be from 0-1
// gradient is an array as above. Array of arrays. Arrays are pos, r, g, b, a
function gradientLerp(number, gradient) {
    
    // how do we do this? 
    // find which two keys this falls betwen.
    // then do a regular maprange based on the bounds

    let lowerBand = gradient[0];
    let upperBand = gradient[gradient.length - 1];

    for ( let i = 0; i < gradient.length; i++) {
        if ( number >= gradient[i][0] ) {
            lowerBand = gradient[i]
            if (i < gradient.length - 1) {
                upperBand = gradient[i + 1]
            }
            // break;
        }
    }

    // now lowerBand and upperBand are set

    // for each of rgba, get the lerped value

    const indexes = [1,2,3,4]
    let outputValue = []

    indexes.forEach(i => {
        const decimalColor = mapRange(number, lowerBand[0], upperBand[0], lowerBand[i], upperBand[i])
        const hexColor = mapRange(decimalColor, 0, 1, 0, 255)
        outputValue.push(
            hexColor
        )
    })

    return outputValue
}


</script>