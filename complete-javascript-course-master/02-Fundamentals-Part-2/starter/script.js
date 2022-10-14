'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log('I can drive ;D')

// // const interface = 'Audio';
// // const private = 534;
/////////////////////////////////////////////////////

// function logger() {
//     console.log('My name is Jonas');
// }
// /// calling/ running / invoking funkcion
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(4, 5);
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//////////////////////////////////////////////////////
// //function declaration
// function calcAge1(brithYeah) {
//     return 2037 - brithYeah;
// }

// const age1 = calcAge1(1991);
// console.log(age1);
// //function expression
// const calcAge2 = function (brithYeah) {
//     return 2037 - brithYeah;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);
//////////////////////////////////////////////////


// //function expression
// const calcAge2 = function (brithYeah) {
//     return 2037 - brithYeah;
// }

// //arrow Function
// const calcAge3 = brithYeah => 2037 - brithYeah;

// const age3 = calcAge3(1991);
// console.log(age3)
// const yearsUntilRetirment = (brithYeah, firstName) => {
//     const age = 2037 - brithYeah;
//     const retirment = 65 - age;
//     // return retirment;
//     return `${firstName} retire in ${retirment} years`;
// }

// console.log(yearsUntilRetirment(1991, "Jonas"));
// console.log(yearsUntilRetirment(1980, "Bob"));
///////////////////////////////////////////////
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePices = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePices} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

//////////////////////////////

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirment = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirment = 65 - age;

//     if (retirment > 0) {
//         console.log(`${firstName} retires in ${retirment} years`);
//         return retirment;

//     } else {
//         console.log(`${firstName} has alread retired`);
//         return -1;
//     }

//     // return `${firstName} retire in ${retirment} years`;
// }

// console.log(yearsUntilRetirment(1991, "Jonas"));
// console.log(yearsUntilRetirment(1970, "Mike"));
//////////////////////////////////////////////

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friens= ['Bob',"Alice"];
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991,
//     'teacher', friends];

// console.log(jonas);
// console.log(jonas.length);

// ///Exercise
// function calcAge(brithYeah) {
//     return 2037 - brithYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]),
// calcAge(years[1])];
// console.log(ages)


/////////////////////////////////////////////////


// const friends = ['Michael', 'Steven', 'Peter'];
// /// add elemets to array
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //remove elements
// friends.pop();// last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift() //first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log("You have a freind called Steven")
// }
///////////////////////////////////////

const jonasArray = [
    'Jonas',
    'Schmedtman',
    2036 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastNAme: 'Schmedtman',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};