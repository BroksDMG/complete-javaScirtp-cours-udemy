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

const flight = 'LH234';
const jonas ={
    name:"Jonas Schmedtmann",
    passport:247389284,
};
const checkIn =function(flightNum, passenger){
    flightNum ='LH999';
    passenger.name="Mr."+passenger.name;
    
    if(passenger.passport===247389284){
        alert('Checked in');
    }else{
        alert('Wrong Passport!');
    }
};
// checkIn(flight,jonas);


const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*
    1000000000);
};

newPassport(jonas)
checkIn(flight,jonas);
console.log(flight);
console.log(jonas);
