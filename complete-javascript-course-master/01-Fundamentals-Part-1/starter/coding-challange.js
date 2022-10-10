
// // coding-challange#1//
// //variables
// let markHeigh;
// let johnHeigh;
// let markmass;
// let johnmass;
// let markHigherBMI;
// let bmiMark;
// let bmiJohn;

// ////////////////////////Tests////////////////////////
// //first test//
// //Mark bmi
// markHeigh = 1.69;
// markmass = 78;
// bmiMark = markmass / markHeigh ** 2;
// console.log(bmiMark);
// //John bmi
// johnHeigh = 1.95;
// johnmass = 92;
// bmiJohn = johnmass / johnHeigh ** 2;
// console.log(bmiJohn);

// markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI)
// //second test//
// //Mark bmi
// markHeigh = 1.88;
// markmass = 95;
// bmiMark = markmass / markHeigh ** 2;
// console.log(bmiMark);
// //John bmi
// johnHeigh = 1.76;
// johnmass = 85;
// bmiJohn = johnmass / johnHeigh ** 2;
// console.log(bmiJohn);
// //wchich BMI is higher
// markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI)
// // coding-challange#2//

// if (bmiMark > bmiJohn) {
//     console.log("Mark's BMI is higher than Johna's");
// } else {
//     console.log("Johna's BMI is higher than Mark's");
// };

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's Bmi ${bmiMark} is higher than Johnas's ${bmiJohn}`);
// } else {
//     console.log(`Johna's Bmi ${bmiJohn} is higher than Mark's ${bmiMark}`)
// }
/////////////////////////////////////////////////////////////////////
// //coding-challange#3//
// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// let averageScoreToDolphin = 0;
// let averageScoreToKoalas = 0;

// if (dolphinScore1 > koalasScore1 && dolphinScore1 >= 100) {
//     averageScoreToDolphin++;
//     console.log('first Match won Delphin team ')
// } else if (dolphinScore1 < koalasScore1 && koalasScore1 >= 100) {
//     averageScoreToKoalas++;
//     console.log('first Match won Delphin team ')
// } else if (dolphinScore1 === koalasScore1 && koalasScore1 >= 100 && dolphinScore1 >= 100) {
//     console.log('first match is Draw')
//     averageScoreToKoalas++;
//     averageScoreToDolphin++;
// }
// else {
//     console.log("no one scored any points")
// }
// if (dolphinScore2 > koalasScore2 && dolphinScore2 >= 100) {
//     averageScoreToDolphin++;
//     console.log('second Match won Delphin team ')
// } else if (dolphinScore2 < koalasScore2 && koalasScore2 >= 100) {
//     averageScoreToKoalas++;
//     console.log('second Match won Koala team ')
// } else if (dolphinScore2 === koalasScore2 && koalasScore2 >= 100 && dolphinScore2 >= 100) {
//     console.log('second match is Draw')
//     averageScoreToKoalas++;
//     averageScoreToDolphin++;
// } else {
//     console.log("no one scored any points")
// }
// if (dolphinScore3 > koalasScore3 && dolphinScore3 >= 100) {
//     averageScoreToDolphin++;
//     console.log('third Match won Delphin team ')
// } else if (dolphinScore3 < koalasScore3 && koalasScore3 >= 100) {
//     averageScoreToKoalas++;
//     console.log('third Match won Koala team ')
// } else if (dolphinScore3 === koalasScore3 && koalasScore3 >= 100 && dolphinScore3 >= 100) {
//     console.log('third match is Draw')
//     averageScoreToKoalas++;
//     averageScoreToDolphin++;
// }
// else {
//     console.log("no one scored any points")
// }
// console.log(averageScoreToDolphin);
// console.log(averageScoreToKoalas);
// if (averageScoreToDolphin > averageScoreToKoalas) {
//     console.log('Delphin team wins a trophy!');
// } else if (averageScoreToDolphin === averageScoreToKoalas) {
//     console.log('Draw')
// }
// else {
//     console.log('Koala team wins a trophy!');
// }
//////////////////////////////////////////////////////////////////////////
//coding-challange#4
let tip;
let value = 275;
console.log(`The bill was ${value}, the tip was ${value >= 50 && value <= 300 ? tip = value * 0.15 : tip = value * 0.20}, and the total value ${value + tip}`);