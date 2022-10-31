'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
    },
    };
    //task1
    let [...players1]=game.players[0];
    let [...players2]=game.players[1];
console.log('Team1:',players1);
console.log('Team2:',players2);
    
//task2
    const [gk1,...fieldPlayers1]=players1;
    const [gk2,...fieldPlayers2]=players2;

    console.log(gk1,fieldPlayers1);
    console.log(gk2,fieldPlayers2);
//task3
    const allPlayers=[...players1,...players2];
    console.log(allPlayers);
//task4
const players1Final=[...players1,'Thiago','Countinho','Perisic'];
console.log(players1Final);
//task5
const {team1,x:draw,team2}=game.odds;
console.log(team1,draw,team2);
//task6
function printGoals(...name){
    let str='Scored: ' 
    for(let i=0;i<name.length;i++){
        
        str+=name[i];
        str+=", "  
    }
   
    return console.log(str.slice(0,str.length-2));
}
printGoals("lewandowski","muller","twój stary");
printGoals(...game.scored);
//task7

game.odds.team1<game.odds.team2 &&console.log("Team 2 is more likly to win");
game.odds.team1>game.odds.team2 &&console.log("Team 1 is more likly to win");
