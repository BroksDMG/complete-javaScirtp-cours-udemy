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

const displayMovments = function(movements){
  containerMovements.innerHTML=''
  movements.forEach(function(mov,i){
    const type = mov>0 ?"deposit":"withdrawal"
    const html =
  `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
  `
  containerMovements.insertAdjacentHTML("afterbegin",html);
  })
}
displayMovments(account1.movements)

const calcDisplayBalance = function(movement){
  const balance = movement.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent=`${balance} EUR`;
}
calcDisplayBalance(account1.movements);
///inicjały z obiektów
function createUsernames (accs){
  accs.forEach(acc=>{
    acc.username=acc.owner
    .split(' ')
    .map(names=>names[0])
    .join('')
  })}
 createUsernames(accounts);
  // console.log(accounts); 

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

const eurToUsd=1.1;
const totalDepositsUSD= movements
  .filter(mov=>mov>0)
  .map(mov=>mov*eurToUsd)
  .reduce((acc,mov)=>acc+mov,0)
  console.log(totalDepositsUSD);