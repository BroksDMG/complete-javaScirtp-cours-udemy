const country = "Poland";
const continent = "Europ";
const language = 'Chinese';
const isIsland = false;
let population = 38;
console.log(country);
console.log(continent);
console.log(population);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
const halfPopulation = population / 2;
console.log(halfPopulation + 1);
const populationOfFinlad = 8;
console.log(population > populationOfFinlad);
const averagePopulation = 33;
console.log(population > averagePopulation);
const description = 'Portugal is in Europe ,and its 11 milion people speak portuguese';
console.log(description);

const descriptionWithLiteralSyntax = `Portugal is in ${continent} ,and its 11 milion people speak portuguese`
console.log(descriptionWithLiteralSyntax);

console.log('9' - '5' + 'wynik:4');
console.log('19' - '13' + '17' + 'wynik: 617:');
console.log('19' - '13' + 17 + 'wynik: 23');
console.log('123' < 57 + 'wynik: false');
console.log(5 + 6 + '4' + 9 - 4 - 2 + 'wynik:1143');

// const numNeigHbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeigHbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeigHbours > 1) {
//     console.log('numNeighbours is greater than 1')
// } else {
//     console.log('no borders')
// }
/////////////////////Notice///////////////
// we should use '==' operator becouse if we have equals numbers
// javaScript convert string to number and we get good result
// when we had used '===' operator then javascript had used more accurate value
// and won't convert that value
// or used Number() on prompt and than used '===' operator
// propably that will be the best solution



if (language === 'English' && population < 50 && !isIsland) {
    const criteria = true;
    console.log('this country is okey');
} else {
    console.log('this country is not fine')
}

switch (language) {
    case 'Chinese':
    case 'mandarin':
        console.log("Most number of native speakers!(⌐■_■)");
        break;
    case 'English':
        console.log("3'rd place");
        break;
    case 'Spanish':
        console.log("2'nd place in number of native speakers!");
        break;
    case 'Hindi':
        console.log("Number 4");
        break;
    case 'Arabic':
        console.log("5'th most spoken language");
        break;
    default:
        console.log("Great language to :D")
}




