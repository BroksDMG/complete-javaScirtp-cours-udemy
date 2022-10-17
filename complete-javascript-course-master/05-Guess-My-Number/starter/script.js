'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value =23;

// console.log(document.querySelector('.guess').value);
 const docSel =function (argument) {
    return document.querySelector(argument)
 }
const secretNumber = Math.floor(Math.random()*20)+1;
docSel('.number').textContent= secretNumber;
/////////////////////////////////////////////

//chech guess number is number?V
//if is lower show "numebr is higher" and socre -1V
//if is higher show "numebr is lover" and score -1V
// if is correct show "congratulation" and save highscore V
// lose the game if score is lower than 1 V
// fix score string V
/////////////////////////////////////////////
// create function for again buton

let score =20;
let highScore =0;
//
docSel('.check').addEventListener('click',function (){
    
    const guessNumebr = Number(docSel('.guess').value);
    console.log(guessNumebr,typeof guessNumebr)
    if(!guessNumebr||guessNumebr>20||guessNumebr<1){
        docSel('.message').textContent = "Number between 1 and 20!😡";
        score--;
        docSel('.score').textContent=score;
    }else if(guessNumebr> secretNumber){
        docSel('.message').textContent = "📈 To high!"
        score--;
        docSel('.score').textContent=score;
        if(score<1){
            docSel('.message').textContent = "😿You lose the game😿"
            docSel('.score').textContent= 0;
        }
    }
    else if(guessNumebr< secretNumber){
        docSel('.message').textContent = "📉 To low!"
        score--;
        docSel('.score').textContent=score;
        if(score<1){
            docSel('.message').textContent = "😿You lose the game😿"
            docSel('.score').textContent= 0;
        }
    }
    else if(guessNumebr === secretNumber){
        docSel('.message').textContent = "🎉 You WIN 🎉congratulation!"
        if(highScore<score){
        highScore=score;
        docSel('.highscore').textContent=highScore;
        }else{
        docSel('.highscore').textContent=highScore
        };
    }
});

docSel('.again').addEventListener('click',function(){
    docSel('.score').textContent= score=20;

});