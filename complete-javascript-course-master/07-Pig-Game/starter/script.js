'use strict';

//selecting elements
const ActivePL0=document.querySelector('.player--0');
const ActivePL1=document.querySelector('.player--1');
const scorPL0= document.getElementById('score--0');
const scorPL1= document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const currentScorePL0= document.getElementById('current--0');
const currentScorePL1= document.getElementById('current--1');
//start conditions
let current,currentPlayer,playing,score;
const init=function(){
    score=[0,0];
    current=0;
    playing =true;
    currentPlayer=0;
    
    scorPL1.textContent=0;
    scorPL0.textContent=0;
    currentScorePL0.textContent=0;
    currentScorePL1.textContent=0;

    dice.classList.add('hidden');
    ActivePL0.classList.remove('player--winner');
    ActivePL1.classList.remove('player--winner');
    ActivePL1.classList.remove('player--active');
    ActivePL0.classList.add('player--active');
}
init();
const resetCurrent=function(){
        document.getElementById(`current--${currentPlayer}`).textContent=0;
        //change player
        current=0;
        currentPlayer= currentPlayer===0?1:0;
        //changeTheme
        ActivePL0.classList.toggle('player--active');
        ActivePL1.classList.toggle('player--active');
}
const winPlayer=function(){
    playing=false
    dice.classList.add('hidden');
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
}
//add roll functionality

btnRoll.addEventListener('click',function(){
    if(playing){
        
    // create random number
    const diceRndNum= Math.trunc((Math.random()*6)+1);
    //display dice with number
    dice.classList.remove('hidden');
    dice.src=`dice-${diceRndNum}.png`;
    //change current result if is't 1
   
    if(diceRndNum!==1){
    current+=diceRndNum;
    document.getElementById(`current--${currentPlayer}`).textContent=current;
    document.getElementById(`score--${currentPlayer}`).textContent=score[currentPlayer];

    }else resetCurrent()
    

}})
btnHold.addEventListener('click',function(){
    if(playing){
    //score = score+curent
    score[currentPlayer]+=current;
    //display score
    document.getElementById(`score--${currentPlayer}`).textContent=score[currentPlayer];
    if(score[currentPlayer]>=20){
        winPlayer();   
    }else resetCurrent()

}});
btnNew.addEventListener("click",init);
