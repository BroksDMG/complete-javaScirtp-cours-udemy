//variables
let markHeigh;
let johnHeigh;
let markmass;
let johnmass;
let markHigherBMI;
let bmiMark;
let bmiJohn;

////////////////////////Tests////////////////////////
//first test//
//Mark bmi
markHeigh = 1.69;
markmass = 78;
bmiMark = markmass / markHeigh ** 2;
console.log(bmiMark);
//John bmi
johnHeigh = 1.95;
johnmass = 92;
bmiJohn = johnmass / johnHeigh ** 2;
console.log(bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI)
//second test//
//Mark bmi
markHeigh = 1.88;
markmass = 95;
bmiMark = markmass / markHeigh ** 2;
console.log(bmiMark);
//John bmi
johnHeigh = 1.76;
johnmass = 85;
bmiJohn = johnmass / johnHeigh ** 2;
console.log(bmiJohn);
//wchich BMI is higher
markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI)
