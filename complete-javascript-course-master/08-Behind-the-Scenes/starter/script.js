 'use strict';

// function clacAge(birthYear){
//     const age = 2037-birthYear;

//     function printAge(){

//         let output =`${firstName},you are ${age},born in ${birthYear}`
        
//         console.log(output);
//         if(birthYear>=1981&&birthYear<=1996){
//             var millenial =true;
//             const firstName="Steven";
//             const str=`oh, you're a millenial, ${firstName}`;
//             console.log(str);
        
//             function add (a,b){
//                 return a+b;
//             }
//             const output="NEW OUTPOT"
//         }
//         console.log(millenial);
//         console.log(output);
//     }
//     printAge()
//     return age;
// }
// const firstName = 'jonas';
// clacAge(1991);
//////////////////////////////Hoisting and TDZ/////////////////

// //display
// // console.log(me);/////////undifanded
// // console.log(job);///can not acces before initialization
// //variables
// let job="Teacher";
// const year = 1991;
// var me = 'jons'
// //functions:
// console.log(addDecl(2,3));// display correct result
// // console.log(addExpr(2,3));// can not acces before initialization
// // console.log(addArrow(2,3));// can not acces before initialization
// //declaration
// function addDecl(a,b){
//     return a+b;
// }
// //expresion
// const addExpr=function(a,b){
//     return a+b;
// }
// //arrow
// const addArrow=(a,b)=>a+b;


// //example
// console.log(numProducts);
// if(!numProducts) deleteShopingCart();

// var numProducts = 10;

// function deleteShopingCart(){
//     console.log('All products deleted!');
// }

//  var x =1;
//  let y=2;
//  const z=3;

//  console.log(x===window.x);
//  console.log(z===window.y);
//  console.log(z===window.z);
// const firstName='steven';
// const data='14'
// console.log(data);
// console.log(firstName);
//  const jons={
//     firstName:'jonas',
//     data:16,
//     prnyName:function(){
//         return console.log(data);
        
//     }
//  }
//  console.log( jons.firstName);
//  jons.prnyName();
 
//  console.log(firstName);
//  console.log(data);


 ///////////////////////this///////////////////////
 

// //  console.log(this);
 
//  const calcAge = function (birthYear) {
//     // console.log(2037-birthYear);
//     // console.log(this);                  //display undifanded
//  };
// calcAge(1991);

// const calcAgeArrow = birthYear=>{
//     // console.log(2037-birthYear);
//     // console.log(this);                  //display value object window
// };
// calcAgeArrow(1991);


// const jonas = {
//     year:1991,
//     calcAge:function(){

//         console.log(this);
//         console.log(2037-this.year);
//     }
// }
// jonas.calcAge();

// const matilda={
//     year:2017,
// };
// matilda.calcAge=jonas.calcAge;
// matilda.calcAge();

//////////////////regular functions vs arrow functions////////////////

// let age= 30;
// let oldAge= age;
// age =31;
// console.log(age);
// console.log(oldAge);

// const me ={
//     name:'Jonas',
//     age:30,
// }
// const friend =me;
// friend.age=26;
// console.log('freind:',friend);
// console.log('Me',me);
///////////////////////primitive values and reference values/////////
//primitive tyoes
let lasName= "williams";
let oldLastName=lasName;
lasName='davis';
console.log(lasName,oldLastName);
//reference type
const jessica={
    firstName:'Jessica',
    lasName:'Williams',
    age:27,
};
const marriedJessica = jessica;
marriedJessica.lasName='Davids';
console.log('Before marriage:',jessica);
console.log('After marrage:',marriedJessica);

//Copying obejcts
const jessica2={
    firstName:'Jessica',
    lasName:'Williams',
    age:27,
    familly:['Alice',"Bob"]
};

const jessicaCopy= Object.assign({},jessica2);

jessicaCopy.lasName='Davis';
console.log('Before marriage:',jessica2);
console.log('After marrage:',jessicaCopy);

jessicaCopy.familly.push('Mary');
jessicaCopy.familly.push('john');
console.log('Before marriage:',jessica2);
console.log('After marrage:',jessicaCopy);
