'use strict';

//selecting elements
const ActivePL0=document.querySelector('.player--0');
const ActivePL1=document.querySelector('.player--1');
const scorPL0= document.getElementById('score--0');
const scorPL1= document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const currentScorePL0= document.getElementById('current--0');
//start conditions
scorPL0.textContent=0;
scorPL1.textContent=0;  
dice.classList.add('hidden');
let current=0;
let currentPlayer=0;
const score=[0,0];
let rnd=0;
const resetCurrent=function(){
        document.getElementById(`current--${currentPlayer}`).textContent=0;
        //change player
        current=0;
        currentPlayer= currentPlayer===0?1:0;
        //changeTheme
        ActivePL0.classList.toggle('player--active');
        ActivePL1.classList.toggle('player--active');
}
//add roll functionality

btnRoll.addEventListener('click',function(){
    // create random number
    const diceRndNum= Math.trunc((Math.random()*6)+1);
    rnd=diceRndNum;
    //display dice with number
    dice.classList.remove('hidden');
    dice.src=`dice-${diceRndNum}.png`;
    //change current result if is't 1
    if(diceRndNum!==1){
    current+=diceRndNum;
    document.getElementById(`current--${currentPlayer}`).textContent=current;
    document.getElementById(`score--${currentPlayer}`).textContent=score[currentPlayer];
    }
    else{
        //reset current score
        score[currentPlayer]=0;
        document.getElementById(`score--${currentPlayer}`).textContent=0;   
        
        resetCurrent()
    }

})
btnHold.addEventListener('click',function(){
    //score = score+curent
    score[currentPlayer]+=current;
    //display score
    document.getElementById(`score--${currentPlayer}`).textContent=score[currentPlayer];
    if(score[currentPlayer]>=100){
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
    }
    //reset current
    resetCurrent()
});
