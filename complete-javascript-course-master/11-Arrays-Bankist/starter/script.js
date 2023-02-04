'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovments = function(movements,sort=false){
  containerMovements.innerHTML=''

  const movs=sort?movements.slice().sort((a,b)=>a-b):movements

  movs.forEach(function(mov,i){
    const type = mov>0 ?"deposit":"withdrawal"
    const html =
  `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
  `
  containerMovements.insertAdjacentHTML("afterbegin",html);
  })
}

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,mov)=>acc+mov,0);
  
  labelBalance.textContent=`${acc.balance} €`;
}
///inicjały z obiektów
const calcDisplaySummary = function(acc){
  const incomes= acc.movements
    .filter(mov=>mov>0)
    .reduce((acc,mov)=>acc+mov,0);
    labelSumIn.textContent=`${incomes}€`
  const outcoms =acc.movements
    .filter(mov=>mov<0)
    .reduce((acc,mov)=>acc+mov,0);
    labelSumOut.textContent=`${Math.abs(outcoms)}€`

  const iterest =acc.movements.filter(mov=>mov>0)
    .map(deposit=>(deposit*acc.interestRate)/100)
    .filter((int,i,arr)=>{
      return int>=1;
    })
    .reduce((acc,int)=>acc+int,0);
    labelSumInterest.textContent=`${iterest}€` 
}

function createUsernames (accs){
  accs.forEach(acc=>{
    acc.username=acc.owner
    .toLowerCase()
    .split(' ')
    .map(names=>names[0])
    .join('')
    
  })}
 createUsernames(accounts);
  // console.log(accounts); 
const updateUI=function(acc){
   ///display movment
   displayMovments(acc.movements)
   ///display balancex
   calcDisplayBalance(acc)
   ///display summary
   calcDisplaySummary(acc)
}
let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  currentAccount =accounts.find(acc=>acc.username===inputLoginUsername.value)

  if(currentAccount?.pin===Number(inputLoginPin.value)){
    ///display UI and massage
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity=100;
    /// clear inpu fields
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
    
    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc=accounts.find(acc=>acc.username===inputTransferTo.value) 
  inputTransferAmount.value=inputTransferTo.value=''
   if(amount>0&&
      receiverAcc&&
      currentAccount.balance>=amount&&
      receiverAcc?.username!==currentAccount.username){
        ///////doing a tranfser
        console.log(`Transfer ${amount}`);
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        ////////update UI
        updateUI(currentAccount);
      }
});

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount =Number(inputLoanAmount.value)
if(amount>0&&currentAccount.movements.some(mov=>mov>=amount*0.1)){
  //add momvent
  currentAccount.movements.push(amount);
  //Update UI
  updateUI(currentAccount)
  
}
inputLoanAmount.value=''
})

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  
  if(inputCloseUsername.value===currentAccount.username&&
    Number(inputClosePin.value)===currentAccount.pin
    ){
      const index = accounts.findIndex(acc=>acc.username===currentAccount.username);
      console.log(index);
      // delete account
      accounts.splice(index,1);
      //hide UI/
      containerApp.style.opacity=0;
    }
    inputCloseUsername.value=inputClosePin.value=''
})
let sorted=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovments(currentAccount.movements,!sorted);
  sorted=!sorted
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr =['a','b','c','d','e'];

// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log([...arr]);

// // splice
// arr.splice(-3);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// //reverse'
// arr =['a','b','c','d','e'];
// const arr2=['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat 
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr,...arr2);
// //join
// console.log(letters.join(' - '));

/// new method at

// const arr =[23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));
// /////////geting last array element

// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// // with strings
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));


// /////////////// foreach method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i,movement] of movements.entries()){
//   if(movement>0){
//     console.log(`Movment ${i+1}: You deposited ${movement}`);
//   }else{
//     console.log(`Movment ${i+1}: You withdraw ${movement}`);
//   }
// }

// //forEach

// movements.forEach(function(movement,i,arr){
//   if(movement>0){
//     console.log(`Movment ${i+1}: You deposited ${movement}`);
//   }else{
//     console.log(`Movment ${i+1}: You withdraw ${movement}`);
//   }
// })

///forEach with maps and Sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`);

// })
// //Sets 

// const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value,_,Set){
//   console.log(`${value}: ${value}`);
// })

// const eurToUsd=1.1;
// // const movementUSD= movements.map(function(mov){
// //   return mov *eurToUsd;
// // })

// const movementUSDfor =[];
// for(const mov of movements){
//   movementUSDfor.push(mov*eurToUsd);
// }
// // console.log(movementUSDfor);
// const movementUSD = movements.map(mov=>mov*eurToUsd);
// // console.log(movements);
// // console.log(movementUSD);

// const movementDescriptons = movements.map((mov,i)=>
// `Movment ${i+1}: You ${mov>0?"deposit":"withdrew"} ${Math.abs(mov)}`)
// // console.log(movementDescriptons);


// /////////////////////filter method ////////////////
// const deposit = movements.filter(mov=>mov>0);
// console.log(deposit);
// const depositMap = movements.map(function (mov){
//   if (mov>0) return mov
// });
// console.log(depositMap);

// const withdraws =movements.filter(function(mov){return mov<0});
// const withdrawsAbs =withdraws.map(wid=>Math.abs(wid))
// console.log(withdrawsAbs);
// ////////////////the reduce method ////////////////
// const balance = movements.reduce(function(acc,cur,i,arr){
//   console.log(`Iteration ${i} :${acc} ,${cur}`);
//   return acc+cur},0)
// console.log(movements);
// console.log(balance);

// let balance2 = 0;
// for(const mov of movements) balance2+=mov;
// console.log(balance2);

// //maximum value
// const max = movements.reduce((acc,mov)=>{
//   if(acc>mov)return acc
//   else return mov
// })
// console.log(max);
/////////////chaining methods///////////

// const eurToUsd=1.1;
// const totalDepositsUSD= movements
//   .filter(mov=>mov>0)
//   .map(mov=>mov*eurToUsd)
//   .reduce((acc,mov)=>acc+mov,0)
//   console.log(totalDepositsUSD);

///////////////find method///////////////
// const firstWithdrawal = movements.find(mov=>mov<0);
//   console.log(movements);
//   console.log(firstWithdrawal);
//   console.log(accounts);

//   const account =accounts.find(acc=>acc.owner==='Jessica Davis');
//   console.log(account);
// const drawls=[]
// movements.forEach(mov=>{if(mov<0)drawls.push(mov)});
// console.log(drawls);
// const result=[];
// accounts.forEach(acc=>{if(acc.owner==='Jessica Davis')result.push(acc);})
// console.log(result);

// ///////////some and every method
// console.log(movements);

// //EQUALITY
// console.log(movements.includes(-130));
// //CONDITION
// console.log(movements.some(mov=>mov==130));

// const anyDeposit = movements.some(mov=>mov>0)
// console.log(anyDeposit);

// ///////Every
// console.log(movements.every(mov=>mov>0));
// console.log(account3.movements.every(mov=>mov>0));

// //separate callback

// const deposit = mov=>mov>0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.find(deposit));

//////////////////////flat and flatMap/////////////////
// //flat
// const arr = [[1,2,3],[2,3,1],7,8]
// console.log(arr.flat());

// const arrDeep= [[1,[2,3]],[2,[3,1]],7,8]  
// console.log(arrDeep.flat(2));

// const overalBalance =accounts
//   .map(acc=>acc.movements)
//   .flat()
//   .reduce((acc,mov)=>acc+mov,0)
// console.log(overalBalance);

// //flatMap
// const overalBalance2=accounts
//   .flatMap(acc=>acc.movements)
//   .reduce((acc,mov)=>acc+mov,0);
// console.log(overalBalance2);

// ////////////sorting arrays
// ///strings
// const owners= ['Jonas','Zach','Adam','Martha']
// console.log(owners.sort());
// console.log(owners);

// ///Numbers
// console.log(movements);
// console.log(movements.sort());

// //return <0,A,B(Keep order)
// //return >0,B,A(Swich order)

// //Ascending
// // movements.sort((a,b)=>{
// //   if(a>b)return-1;
// //   if(a<b)return 1;
// // })
// movements.sort((a,b)=>a-b);
// console.log(movements);
// //Descending
// // movements.sort((a,b)=>{
// //   if(a>b)return 1;
// //   if(a<b)return-1;
// // })
// movements.sort((a,b)=>b-a);
// console.log(movements);
///////////////more ways to creating and filling arrays
//fill
// const arr=[1,2,3,4,5,6,7];
// console.log(new Array(1,2,3,4,5,6,7));
// const x =new Array(7)
// x.fill(1,3,5)
// x.fill(1);
// console.log(x);

// arr.fill(23,2,6);
// console.log(arr);
// //Array.from
// const y =Array.from({length:7},()=>1);
// console.log(y);
// const z =Array.from({length:7},(_,i)=>1+i);
// console.log(z);

// labelBalance.addEventListener('click',function(){
//   const movementUI=Array.from(
//     document.querySelectorAll('.movements__value'),
//     el=>Number(el.textContent.replace('€',''))
//     )
//     console.log(movementUI);
//   })
    
/////////////////////Array methods practice//////////////\

///1
const bankDepositSum=accounts
.flatMap(acc=>acc.movements)
.filter(mov=>mov>0)
.reduce((sum,cur)=>sum+cur,0);
console.log(bankDepositSum);
///2
const numDeposits1000=accounts
  .flatMap(acc=>acc.movements)
  .filter(mov=>mov>=1000)
  .length;
const numDeposits10002=accounts
  .flatMap(acc=>acc.movements)
  .reduce((counter,cur)=>cur>=1000?counter+1:counter,0)

console.log(numDeposits10002);
console.log(numDeposits1000);
