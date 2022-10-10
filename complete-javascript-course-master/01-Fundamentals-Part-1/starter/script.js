// let js = 'amazing';
// console.log(40 + 9 + 23 - 10);

// let firstName = 'Jonas';
// console.log(firstName);
//////////////////////////////////////////////////////////////////////////
// math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2**3 means 2to the power of 3 = 2* 2*2

// const firstName = 'Jonas';
// const lastName = 'schedtmann';
// console.log(firstName + ' ' + lastName);
// //assigment operators
// let x = 10 + 5;    //15
// x += 10;  //x =x+10=25
// x *= 4; // x =x*4 =100
// x++; //x=x+1
// x--;
// x--;

// console.log(x);
// // Copatison operators
// console.log(ageJonas > ageSarah); // >,< , >=,<=
// console.log(ageSarah >= 18);

// const isFillAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

////////////////////////////////////////////////////////////////////////////////////

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// console.log(25 + 10 - 5 ** 2);
// console.log(5 ** 2);
// let x, y;
// x = y = 25 - 10 - 5; // x= y =10, x =10
// console.log(x, y);
// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah)

//////////////////////////////////////////////////////////////////////////////

// const firstName = 'jonas';
// const job = 'teacher';
// const birthYeat = 1991;
// const year = 2037;

// const jonas = "I'm" + firstName + ', a ' + (year - birthYeat) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYeat} year old ${job}!`;
// console.log(jonasNew);
// console.log(`Just a regular string..`)

// console.log('Sting with \n\
// multiple\n\
// lines');
// console.log(`Stirng
// multiple
// lines`);
///////////////////////////////////////////////////////////////////

// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('Sarah can start driving license🚗')
// } else {
//     const yearsaLefet = 18 - age;
//     console.log(`Sarah is too young. wait another ${yearsaLefet} years :)`)
// }

// const birthYear = 1992;
// let century
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// };
// console.log(century)

/////////////////////////////////////////////////////////
// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);
// // type coercion
// console.log('I am ' + 23 + ' years old')
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

///////////////////////////////////////////////////////////////
// // 5 falsy valuse: 0, '', undefinde, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 0;
//   console.log('you should get a job!');
// }

// let height = 0;
// if (height) {
//     console.log('YAY! height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }if (money) {
//     console.log("dont't spedn it all ;)");
// } else {

/////////////////////////////////////////////////////////

// const age = '18';
// if (age === 18) console.log('you just became an adult :D (strict)');
// if (age == 18) console.log('you just became an adult :D (loose)');

// const favourite = Number(prompt("what's your Favurit number?"));

// console.log(favourite);
// console.log(typeof (favourite));

// if (favourite === 23) {
//     console.log('cool! 23 i san amazing number !');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7');
// }

// if (favourite !== 23) console.log('why not 23?');

////////////////////////////////////////////////////////////

// const hasDriversLicense = true; //A
// const hasGoodVision = true;//V
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDribe = hasDriversLicense && hasGoodVision;

// // if (shouldDribe) {
// //     console.log('Sarah is able to drive!');
// // } else {
// //     console.log('Someone else should drive..')
// // }


// const isTired = true;//C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive..')
// }
////////////////////////////////////////////////////////////////////

// const day = 'friday';

// switch (day) {
//     case 'monday':// day ==== 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Wride code example');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// }
// else if (day === 'wedensday' || day === 'thursday') {
//     console.log('Wride code example');
// }
// else if (day === 'friday') {
//     console.log('record videos');
// }
// else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// }
// else { console.log('Not a valid day'); }
///////////////////////////////////////////////////////////////////

const age = 23;
age >= 18 ? console.log('I like drinke wine 🍷') : console.log('I like to drink water💧');
