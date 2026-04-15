'use strict'

let outDiametr = 0.5;
let thick = 0.01;
let sum = 0;

for(let i = 1; i <= 12; i++){
    let R = out_diametr / 2;
    let r = R - thick;
    let volume = (4/3) * Math.PI * r ** 3;
    sum += volume;
    outDiametr += 2 * thick;
}

console.log(`Сумарный объём ${sum} м3`);