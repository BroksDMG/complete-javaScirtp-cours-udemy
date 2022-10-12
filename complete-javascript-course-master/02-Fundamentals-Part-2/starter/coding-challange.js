"use strict";



const calcAverage = (scoreFirs, socreSecond, scoreThird) => {
    const averageScore = (scoreFirs + socreSecond + scoreThird) / 3;
    return averageScore;
}

const checkWinner = (avgDolphins, avgKoalas) => {

    console.log(avgDolphins);
    console.log(avgKoalas);
    if (avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2) {
        return `Dolphin team win ${avgDolphins} vs. ${avgKoalas}`;
    } else if (avgKoalas > avgDolphins && avgKoalas > avgDolphins * 2) {
        return `Koala team win ${avgKoalas} vs. ${avgDolphins}`;
    }
    else {
        return `no team wins!`;
    }
}
//Tes#1
let averageScoreDolphin = calcAverage(44, 23, 71);
let averageScoreKoala = calcAverage(65, 54, 49);
console.log(checkWinner(averageScoreDolphin, averageScoreKoala));

//Tes#2
averageScoreDolphin = calcAverage(85, 54, 41);
averageScoreKoala = calcAverage(23, 34, 27);
console.log(checkWinner(averageScoreDolphin, averageScoreKoala));
