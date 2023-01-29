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
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// greet('Hello')('Jonas');
// //the same using arrow function
// const greet2= (greeting)=>(name)=>
// console.log(`${greeting} ${name}`);

// greet2("Yo")("Bob");

/////////////// the call and apply methods////////

// const lufthsnsa = {
//     airline:'Luufthansa',
//     iataCode:'LH',
//     bookings:[],
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline}
//         flight ${this.iataCode}${flightNum}`
//     )
//     this.bookings.push({flight:
//         `${this.iataCode}${flightNum}`,name})
// },
// };

// lufthsnsa.book(239,'Jonas Schmedtman');
// lufthsnsa.book(635,'John Smith')

// const eurowings = {
//     name:'Eurowings',
//     iataCode:'Ew',
//     bookings:[],
// };

// const book = lufthsnsa.book;
// ///does not working///
// // book(23,'Sarah Williams')
// book.call(eurowings,23,"Sarah Williams");
// // console.log(eurowings);

// book.call(lufthsnsa,239,'Mary Coper')
// // console.log(lufthsnsa);

// const swiss={
//     airline:'Swiss Air Lines',
//     iataCode:'LX',
//     bookings: [],
// };
// //apply method
// //befor ES5
// book.apply(swiss,[528,'George Cooper'])
// //after ES5
// book.call(swiss,...[314,"Megan Cooper"])
// book.call(swiss,[314,"Adam Cooper"])
// // console.log(swiss);

// //////////////// bind method ///////////////
// const bookEW= book.bind(eurowings);
// const bookLH= book.bind(lufthsnsa);
// const bookLX= book.bind(swiss);

// bookEW(23,'Steven Williams');
// const bookEw23= book.bind(eurowings, 23);
// bookEw23('Jonas Schmedtmann');
// bookEw23('Marta Cooper');
// /////////////// with Event Listeners///

// lufthsnsa.planes = 300;
// lufthsnsa.buyPlane=function(){
    
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// // const test=lufthsnsa.buyPlane()


// document
// .querySelector('.buy')
// .addEventListener('click',lufthsnsa.buyPlane.bind(lufthsnsa))

// // partial application
// const addTax =(rate,value)=>value+value*rate;
// console.log(addTax(0.1,200));

// const addVAT=addTax.bind(null,0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));
// ///practis with returning function//

// const setVAT=(rate)=>(value)=>value+value*rate;
// const addTaxWithVAT= setVAT(0.23);
// console.log(addTaxWithVAT(100));
// console.log(addTaxWithVAT(23));

// const runOnce =function(){
//     console.log("this will never run again");
// }
// runOnce();

// //IIFE
// (function(){
//     console.log('this will never run again');
// })();

// (()=>{console.log('this will also never run again');})
// ();

//////////////////// Closures /////////////////
const secureBooking = function(){
    let passenger = 0;

    return function(){
        passenger++;
        console.log(`${passenger} passengers`);
    }
}