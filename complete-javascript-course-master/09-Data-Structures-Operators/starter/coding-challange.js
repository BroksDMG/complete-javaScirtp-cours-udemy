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
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

// ////////////////////////coding-chalange#4///////////////
// document.body.append(document.createElement('textarea'))
// document.body.append(document.createElement('button'))
// const button =document.querySelector('button');

// button.addEventListener('click',function(){
//     const text = document.querySelector('textarea').value
//     const textNormalized =text.toLowerCase().split('\n')
//     let count=0;
//     for(const word of textNormalized){
//         //////['underscore','case'];
//         count++;
//         const split_= word.trim().split('_');
//         const secondSplit = split_[1];
//         const secondSplitToUpper= secondSplit[0].toUpperCase();
//         const doneText1= [`${split_[0]}`,`${secondSplitToUpper}`,`${secondSplit.slice(1)}`].join('')
//         const te=`✅`.repeat(count)
//         const doneText=`${doneText1.padEnd(20,' ')}`+`${te}`
//         console.log(doneText);
//     }
   
      
// })


/*
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure
*/

// /////////////////////coding-chalange#3///////////////

// const gameEvents=new Map([
//     [17,'⚽Goal'],
//     [36,'🔂Substitution'],
//     [47,'⚽Goal'],
//     [61,'🔂Substitution'],
//     [64,'🔶Yellow card'],
//     [69,'🔴Red card'],
//     [70,'🔂Substitution'],
//     [72,'🔂Substitution'],
//     [76,'⚽Goal'],
//     [80,'⚽Goal'],
//     [92,'🔶Yellow card'],
    
// ]);
// //task1
// const [...events] = new Set(gameEvents.values());
// console.log(events);
// ///task2
// gameEvents.delete(64);
// console.log(gameEvents);
// ///task3
// let count=0;
// let gameTime=90;
// for(const [event] of gameEvents)count++;

// const avarageGameEvents=gameTime/count;
// console.log(`An event happened, on avarage, evry
//  ${avarageGameEvents} minutes`);
// ///task4
// let half ='FIRST HALF';
// for(const [event,value]of gameEvents){
//     if(event>45) half="SECOND HALF" 
//     console.log(`[${half}]${event}: ${value}`);

// }







// //////////////////coding-challange#2/////////////
// //task1
// const gools= Object.entries(game.scored);
// let goolsStr='';
// for (const [gool,player] of gools) {
//     console.log(`Goal ${gool}: ${player}`);
// }
// //task2
// const averageOdd= Object.values(game.odds);
// console.log(averageOdd);
// console.log(averageOdd[0]*averageOdd[2]/2);
// //task3
// const propertiesOdd= Object.entries(game.odds);

// for (const [name,value] of propertiesOdd) {
//     let str =name==='x'?'draw':`victory ${game[name]}`
        
//     console.log(`Odd of ${str}`);
// };

// console.log(propertiesOdd);
// //task4
// /*/scorers{
//     0:lewandowski,
//     1:gnarby,
//     2:lewandowski,
//     3:hummels,
// }
// */
// const {...scorers}=game.scored;
// Object.keys(scorers)

// console.log(scorers);
// console.log(Object.keys(scorers));
// for (const prop of scorers) {
//     // prop+=Object.values(game.scored)
// }

// console.log(scorers);


//////////////////coding-challange#1/////////////
//     //task1
//     let [...players1]=game.players[0];
//     let [...players2]=game.players[1];
// console.log('Team1:',players1);
// console.log('Team2:',players2);
    
// //task2
//     const [gk1,...fieldPlayers1]=players1;
//     const [gk2,...fieldPlayers2]=players2;

//     console.log(gk1,fieldPlayers1);
//     console.log(gk2,fieldPlayers2);
// //task3
//     const allPlayers=[...players1,...players2];
//     console.log(allPlayers);
// //task4
// const players1Final=[...players1,'Thiago','Countinho','Perisic'];
// console.log(players1Final);
// //task5
// const {team1,x:draw,team2}=game.odds;
// console.log(team1,draw,team2);
// //task6
// function printGoals(...name){
//     let str='Scored: ' 
//     for(let i=0;i<name.length;i++){
        
//         str+=name[i];
//         str+=", "  
//     }
   
//     return console.log(str.slice(0,str.length-2));
// }
// printGoals("lewandowski","muller","twój stary");
// printGoals(...game.scored);
// //task7

// game.odds.team1<game.odds.team2 &&console.log("Team 2 is more likly to win");
// game.odds.team1>game.odds.team2 &&console.log("Team 1 is more likly to win");
