'use strict';

// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} milion people and its capital city is ${capitalCity}`)

// }

// const Finland = describeCountry("Finland", 6, "Helsinki");
// const Poland = describeCountry("Poland", 38, "Warsaw")
// const Deutschland = describeCountry("Deutschland", 83, "Berlin")


/////////////////////////
function percentAgeOfWordl1(population) {
    const worldPopulation = 7900;
    return population * 100 / worldPopulation;
}
const perocentOfChina = percentAgeOfWordl1(1441);
const perocentOfPoland = percentAgeOfWordl1(38);
const perocentOfDeutschland = percentAgeOfWordl1(83);
console.log(perocentOfChina);
console.log(perocentOfPoland);
console.log(perocentOfDeutschland);

const percentAgeOfWorld2 = function (population) {
    const worldPopulation = 7900;
    return population * 100 / worldPopulation;
}
const perocentOfChina2 = percentAgeOfWorld2(1441);
const perocentOfPoland2 = percentAgeOfWorld2(38);
const perocentOfDeutschland2 = percentAgeOfWorld2(83);
console.log(perocentOfChina2);
console.log(perocentOfPoland2);
console.log(perocentOfDeutschland2);
const percentAgeOfWorld3 = population => {
    const worldPopulation = 7900;
    return population * 100 / worldPopulation;
}
const perocentOfChina3 = percentAgeOfWorld3(1441);
const perocentOfPoland3 = percentAgeOfWorld3(38);
const perocentOfDeutschland3 = percentAgeOfWorld3(83);
console.log(perocentOfChina3);
console.log(perocentOfPoland3);
console.log(perocentOfDeutschland3);

const describePopulation = (country, populaiton) => {
    const precentOfWolrd = percentAgeOfWorld3(populaiton);

    return `${country} has ${populaiton} mioion people, wchich is aobut ${precentOfWolrd}% pepople of the world.`;
}
const describtionOfChinaPopulation = describePopulation("China", 1441);
console.log(describtionOfChinaPopulation);