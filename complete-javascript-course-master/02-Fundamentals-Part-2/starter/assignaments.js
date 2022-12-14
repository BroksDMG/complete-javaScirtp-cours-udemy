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
///////////////////////////////////////

const populations = [1441, 83, 11, 38];
if (populations.length === 4) {
    console.log("true");
} else console.log("false")

const percentages = [
    percentAgeOfWorld3(populations[0]),
    percentAgeOfWorld3(populations[1]),
    percentAgeOfWorld3(populations[3]),
    percentAgeOfWorld3(populations[populations.length - 1])];
console.log(percentages);

///////////////////////////////////////////

const neighbours = [
    "Russia",
    "Lithuania",
    "Ukraine",
    "Slovakia",
    "Czech",
    "Germany"
];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);
if (neighbours.includes('Germany')) {
    console.log("Propably a central Eurpan country :D")
} else console.log("Propably not a central Eurpan country :D")

neighbours[neighbours.indexOf("Czech")] = "Czech Republic";
console.log(neighbours);
///////////////////////////////////////////////////////


const myCountry = {
    country: "Finlad",
    capital: 'Helsinki',
    language: 'Finnish',
    populaiton: 6,
    neighbours: ['Norway', 'Russia', 'Sweden'],
    describe: function () {
        console.log(`${this.country} has ${this.populaiton} million 
    ${this.language}-speaking people, ${this.neighbours.length} neighbouring 
    countries and a capital called ${this.capital}    `)
    },
    isIsland: true,
    checkIsIsland: function () {
        if (this.neighbours.length < 1) this.isIsland = true;
        else if (this.neighbours.length >= 1) this.isIsland = false;

    }
};
console.log(myCountry);

/////////////////////////////////////////////////////////
// console.log(`${myCountry.country} has ${myCountry.populaiton} million
//  ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring
//  countries and a capital called ${myCountry.capital}`);

// myCountry.populaiton += 2;

// console.log(`${myCountry.country} has ${myCountry.populaiton} million
//  ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring
//  countries and a capital called ${myCountry.capital}`);

// myCountry['populaiton'] -= 2;

// console.log(`${myCountry.country} has ${myCountry.populaiton} million
//  ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring
//  countries and a capital called ${myCountry.capital}`);

/////////////////////////////////////////////////

myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry.isIsland);
////////////////////////////////////////

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }
////////////////////////////////
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {

    percentages2.push(percentAgeOfWordl1(populations[i]))
};
console.log(percentages2);


////////////////////////////////////

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']];

for (let first = 0; first < listOfNeighbours.length; first++) {
    for (let second = 0; second < listOfNeighbours[first].length; second++) {

        console.log(`Neighbour: ${listOfNeighbours[first][second]}`);
    }
}
