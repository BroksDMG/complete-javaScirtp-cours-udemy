"use strict";



// const calcAverage = (scoreFirs, socreSecond, scoreThird) => {
//     const averageScore = (scoreFirs + socreSecond + scoreThird) / 3;
//     return averageScore;
// }

// const checkWinner = (avgDolphins, avgKoalas) => {

//     console.log(avgDolphins);
//     console.log(avgKoalas);
//     if (avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2) {
//         return `Dolphin team win ${avgDolphins} vs. ${avgKoalas}`;
//     } else if (avgKoalas > avgDolphins && avgKoalas > avgDolphins * 2) {
//         return `Koala team win ${avgKoalas} vs. ${avgDolphins}`;
//     }
//     else {
//         return `no team wins!`;
//     }
// }
// //Tes#1
// let averageScoreDolphin = calcAverage(44, 23, 71);
// let averageScoreKoala = calcAverage(65, 54, 49);
// console.log(checkWinner(averageScoreDolphin, averageScoreKoala));

// //Tes#2
// averageScoreDolphin = calcAverage(85, 54, 41);
// averageScoreKoala = calcAverage(23, 34, 27);
// console.log(checkWinner(averageScoreDolphin, averageScoreKoala));

////coding -challange #2

// const calcTip = (bill) => {
//     let tip;
//     let sum;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 15 / 100;
//         sum = tip + bill;
//         return sum;
//     }
//     else {
//         tip = bill * 20 / 100;
//         sum = tip + bill;
//         return sum;
//     }
// };
// const bills = [125, 555, 44];
// const total = [];
// total.push(calcTip(bills[0]))
// total.push(calcTip(bills[1]))
// total.push(calcTip(bills[2]))
// console.log(calcTip(bills[0]));
// console.log(calcTip(bills[1]));
// console.log(calcTip(bills[2]));
// console.log(total);

///coding-chalannge#3

// const Mark = {
//     firstName: "Mark",
//     LastName: "Miller",
//     mass: 78,
//     heigh: 1.69,
//     BMI: function () {

//         return this.mass / this.heigh ** 2;
//     }

// };
// const John = {
//     firstName: "John",
//     LastName: "Smith",
//     mass: 92,
//     heigh: 1.95,
//     BMI: function () {
//         return this.mass / this.heigh ** 2;
//     }
// };
// console.log(Mark.BMI());
// console.log(John.BMI());
// Mark.BMI() > John.BMI() ?
//     console.log(`${Mark.firstName}'s BMI(${Mark.BMI()}) is higher than ${John.firstName}'s(${John.BMI()})`) :
//     console.log(`${John.firstName}'s BMI(${John.BMI()}) is higher than ${Mark.firstName}'s(${Mark.BMI()})`);

///coding-challange#4

const Steven = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = (bill) => {
    let tip;
    let sum;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 15 / 100;
        sum = tip + bill;
        return tip;
    }
    else {
        tip = bill * 20 / 100;
        sum = tip + bill;
        return tip;
    }
};
for (let i = 0; i < Steven.length; i++) {
    tips.push(calcTip(Steven[i]))
    total.push(calcTip(Steven[i]) + Steven[i]);
}
console.log(tips);
console.log(total);

let sum = 0;
const calcAverage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum / arr.length;
}
calcAverage(Steven);
console.log(sum);
console.log(calcAverage(Steven));
