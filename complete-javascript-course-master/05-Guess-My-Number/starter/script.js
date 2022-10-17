'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value =23;

// console.log(document.querySelector('.guess').value);
 const docSel =function (argument) {
    return document.querySelector(argument)
 };
 const rndNumber = function(){
    const secretNumber=Math.floor(Math.random()*20)+1;
    return secretNumber;
 };
let secretNumber =rndNumber();

/////////////////////////////////////////////

//chech guess number is number?V
//if is lower show "numebr is higher" and socre -1V
//if is higher show "numebr is lover" and score -1V
// if is correct show "congratulation" and save highscore V
// lose the game if score is lower than 1 V
// fix score string V
// change background on green
/////////////////////////////////////////////
//////create function for again buton////////
// create new random number after clicking the button

let score =20;
let highScore =0;

docSel('.again').addEventListener('click',function(){
    secretNumber= rndNumber();
    docSel('.score').textContent= score=20;
    docSel('.number').textContent= secretNumber;
    docSel('body').style.backgroundColor = '#222';
    docSel('.number').style.width ='15rem';
    docSel('.number').style.fontSize ='6rem';
    docSel('.message').textContent = "Start guessing..."
    docSel('.guess').value = null;
    docSel('.number').textContent= "?";
    docSel('h1').textContent = "Guess My Number!"

});

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
        docSel('.message').textContent = "congratulation!"
        docSel('h1').textContent = "🎉 You WIN 🎉"
        docSel('body').style.backgroundColor = 'green';
        docSel('.number').style.width ='30rem';
        docSel('.number').style.fontSize ='12rem';
        docSel('.number').textContent= secretNumber;
        if(highScore<score){
        highScore=score;
        docSel('.highscore').textContent=highScore;
        }else{
        docSel('.highscore').textContent=highScore
        };
    }
});

