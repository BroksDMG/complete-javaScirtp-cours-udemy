'use strict';
////////////////////////defult parameters/////////
// const bookings =[];
// //new seting defult parameters after ES5
// const createBooking = function(flightNum,
//     numPassengers=1,price=199*numPassengers){
//     const booking={
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking)
//     console.log(bookings);
// }
// createBooking('LH123')
// createBooking('LH123',2,800)
// createBooking('LH123',2)
// createBooking('LH123',undefined,1000)
/////////////////////// how passing argument works: value vs reference/////

// const flight = 'LH234';
// const jonas ={
//     name:"Jonas Schmedtmann",
//     passport:247389284,
// };
// const checkIn =function(flightNum, passenger){
//     flightNum ='LH999';
//     passenger.name="Mr."+passenger.name;
    
//     if(passenger.passport===247389284){
//         alert('Checked in');
//     }else{
//         alert('Wrong Passport!');
//     }
// };
// // checkIn(flight,jonas);


// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random()*
//     1000000000);
// };

// newPassport(jonas)
// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);
// /////////////////function accepting callback function//////

// const onewWord = function(str){
//     return str.replace(/ /g,"").toLowerCase();
// }

// const upperFirstWord =function(str){
//     const [first,...others]= str.split(' ');
//     return[first.toUpperCase(),...others].join(' ');
// };
// //Higher-order function
// const transformer= function(str,fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transforemd stirng:${fn(str)}`);

//     console.log(`Transforemd by: ${fn.name}`);
// };

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, onewWord);

// const high5 =function(){
//     console.log('🖐');
// };
// //logging 🖐 when is clicking body
// document.body.addEventListener("click",high5);

//////////////FUnction returning function////////


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');
const greet2= (greeting)=>(name)=>
console.log(`${greeting} ${name}`);

greet2("Yo")("Bob");