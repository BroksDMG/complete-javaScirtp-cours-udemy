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

//display
// console.log(me);/////////undifanded
// console.log(job);///can not acces before initialization
//variables
let job="Teacher";
const year = 1991;
var me = 'jons'
//functions:
console.log(addDecl(2,3));// display correct result
// console.log(addExpr(2,3));// can not acces before initialization
// console.log(addArrow(2,3));// can not acces before initialization
//declaration
function addDecl(a,b){
    return a+b;
}
//expresion
const addExpr=function(a,b){
    return a+b;
}
//arrow
const addArrow=(a,b)=>a+b;


//example
console.log(numProducts);
if(!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart(){
    console.log('All products deleted!');
}

 var x =1;
 let y=2;
 const z=3;

 console.log(x===window.x);
 console.log(z===window.y);
 console.log(z===window.z);
const firstName='steven';
const data='14'
console.log(data);
console.log(firstName);
 const jons={
    firstName:'jonas',
    data:16,
    prnyName:function(){
        return console.log(this.data);
        
    }
 }
 console.log( jons.firstName);
 jons.prnyName
 
 console.log(firstName);
 console.log(data);
