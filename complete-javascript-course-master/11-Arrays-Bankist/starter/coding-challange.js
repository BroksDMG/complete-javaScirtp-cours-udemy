"use strict"
const juliData1=[3,5,2,12,7];
const kateData1=[4,1,15,8,3];
const juliData2=[9,16,6,8,3];
const kateData2=[10,5,6,1,4]
function checkDogs (dogsJulia,dogsKate){
    const updatedDgosJulia =dogsJulia.slice(1,-1)
    const result =function(dogAge,i){
        dogAge>=3?
        console.log(`Dog number ${i} is still puppy🐶`):
        console.log(`Dog number ${i} is an adult, and is ${dogAge} years old`);
    }
    const allDogs =updatedDgosJulia.concat(dogsKate);
    allDogs.forEach(result);
    
}
// checkDogs(juliData1,kateData1);
console.log('///////////////////ANOTHER DATA//////////////////');
// checkDogs(juliData2,kateData2);

function calcAveratgeHumanAge (dogAges){
    const calc =dogAges.map(age=>age<=2?2*age:16+age*4)
    const leesThan18 =calc.filter(age=>age>18)
    const averages =leesThan18.reduce((acc,age)=>(acc+age)/leesThan18.length,leesThan18[0])
    console.log(calc);
    console.log(leesThan18);
    console.log(averages);
}
calcAveratgeHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAveratgeHumanAge([16, 6, 10, 5, 6, 1, 4])