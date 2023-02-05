"use strict"
// const juliData1=[3,5,2,12,7];
// const kateData1=[4,1,15,8,3];
// const juliData2=[9,16,6,8,3];
// const kateData2=[10,5,6,1,4]
// function checkDogs (dogsJulia,dogsKate){
//     const updatedDgosJulia =dogsJulia.slice(1,-1)
//     const result =function(dogAge,i){
//         dogAge>=3?
//         console.log(`Dog number ${i} is still puppy🐶`):
//         console.log(`Dog number ${i} is an adult, and is ${dogAge} years old`);
//     }
//     const allDogs =updatedDgosJulia.concat(dogsKate);
//     allDogs.forEach(result);
    
// }
// // checkDogs(juliData1,kateData1);
// console.log('///////////////////ANOTHER DATA//////////////////');
// checkDogs(juliData2,kateData2);

// function calcAveratgeHumanAge (dogAges){
//     const calc =dogAges.map(age=>age<=2?2*age:16+age*4)
//     const leesThan18 =calc.filter(age=>age>=18)
//     const averages =leesThan18.reduce((acc,age)=>acc+age/leesThan18.length,0)
//     console.log(calc);
//     console.log(leesThan18);
//     return averages
// }
// console.log(calcAveratgeHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAveratgeHumanAge([16, 6, 10, 5, 6, 1, 4]));
// ///rewrite function

// const calcAveratgeHumanAge=(dogAge)=>{
//     const averages=dogAge
//         .map(age=>age<=2?2*age:16+age*4)
//         .filter(age=>age>=18)
//         .reduce((acc,age,i,arr)=>acc+age/arr.length,0)
//     return averages
// }
// console.log(calcAveratgeHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAveratgeHumanAge([16, 6, 10, 5, 6, 1, 4]));

//////////////#4
const dogs =[
    {weight:22,curFood:250,owners:['Alice','Bob']},
    {weight:8,curFood:200,owners:['Matilda']},
    {weight:13,curFood:275,owners:['Sarah','John']},
    {weight:32,curFood:340,owners:['Michael']}    
]
///1
const calcRecomendedFood=function(dogsData){
    dogsData.forEach(data=>{
        data.recomendedFood=Math.trunc(data.weight**0.75*28)
    })
}
calcRecomendedFood(dogs);
console.log(dogs);
//2
const sarahDog=function(dogsData){
   const sar= dogsData.find(dog=>dog.owners.includes('Sarah'));
   return sar
}
console.log(sarahDog(dogs))
//3
const ownersEatToMuch=[]
const ownersEatToLittle=[]
dogs.forEach(dog=>{
    if(dog.curFood<(dog.recomendedFood*0.90)) ownersEatToLittle.push(dog.owners)
    if(dog.curFood>(dog.recomendedFood*1.10)) ownersEatToMuch.push(dog.owners)
})
// console.log(ownersEatToLittle);
// console.log(ownersEatToMuch);
//4
const log=function(arr,toMuch=false){

    const names=arr
    .map(arr=>arr)
    .join(',')
    .replaceAll(','," and ")
    // names.replace(','," and")  
    console.log(names);  
    return toMuch===false?`${names} dogs eats to little`:`${names} dogs eats to much`
}
console.log(log(ownersEatToLittle));
console.log(log(ownersEatToMuch,true));
//5
dogs.forEach(dog=>{dog.recomendedFood===dog.curFood? console.log(dog.owners):console.log("nie ma")})
//6
dogs.forEach(dog=>{
    if(dog.curFood>(dog.recomendedFood*0.90)&&dog.curFood<(dog.recomendedFood*1.10)) console.log(...dog.owners,true);
    else console.log(...dog.owners,false);    
})
//6
const dogsEatingOk=[]
dogs.forEach(dog=>{
    if(dog.curFood>(dog.recomendedFood*0.90)&&dog.curFood<(dog.recomendedFood*1.10))  dogsEatingOk.push(dog)
})
console.log(dogsEatingOk);

const copyDogs=dogs
    .map(cur=>cur)
    .sort((a,b)=>a.recomendedFood-b.recomendedFood)

console.log(copyDogs);
    