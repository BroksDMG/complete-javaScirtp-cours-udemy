// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcTempAmplitudeNew = function(t1,t2){
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for(let i =0; i<temps.length; i++){

//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp>max) max=curTemp;
//         if(curTemp<min) min= curTemp;

//     }
//     console.log(max,min);
//     return max-min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5]);
// console.log(amplitudeNew);

// const measureKelvin  = function() {
//     const measurement= {
//     type: 'temp',
//     unit: 'celsius',
//     // value: prompt('Degrees celsius:'),
//     value:10
// };

// const kelvin = Number( measurement.value) + 273;
// return kelvin;
// };
// // A) Identify
// console.log(measureKelvin());
// // using a debugger
// const calcTempAmplitudeBug = function(t1,t2){
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for(let i =0; i<temps.length; i++){

//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp>max) max=curTemp;
//         if(curTemp<min) min= curTemp;

//     }
//     console.log(max,min);
//     return max-min;
// };

// const amplitudeNew = calcTempAmplitudeBug([3,5,1],[9,4,5]);
// //A) Identify Bug
// console.log(amplitudeNew);


////////////////////////coding-challange#1


//create function printForecast
//get value form array : using for loop propably
//
//output string
const testData1 = [17,21,23];
const testData2 = [12,5,-5,0,4];
function printForecast(arr){
    const printArray =[]
    let i;
    let print='';
    let finnalPrint='';
        for(i =0; i<arr.length;i++){
           print=`... ${arr[i]}ºC in ${i+1} days `; 
           printArray.push(print); 
           finnalPrint+=printArray[i];
        }
        
    return finnalPrint;
}
console.log(printForecast(testData1));
console.log(printForecast(testData2));


