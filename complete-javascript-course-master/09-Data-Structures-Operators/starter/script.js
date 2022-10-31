'use strict';

// Data needed for a later exercise
const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const openingHours={
    ["thu"]: {
      open: 12,
      close: 22,
    },
    ["fri"]: {
      open: 11,
      close: 23,
    },
    ["sat"]: {
      open: 0, // Open 24 hours
      close: 12+12,
    },
  };
  // Data needed for first part of the section
  const restaurant = {
  openingHours,//openingHours is a method
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  
  orderDelivery: function({
    starterIndex=1,
    mainIndex=0,
    time='20:00',
    address,
  }){
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} will be dilivered 
      to ${address} at ${time}`);
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with
    ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza:function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};

////////////////optional chaining(?.)/////////
//clasic
if(restaurant.openingHours&&restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon);
}

//with optional chaining
// console.log(restaurant.openingHours?.mon?.open);
//example
const days =['mon','tue','wed','thu','fri','sat','sun'];

for (const day of days) {
  const open= restaurant.openingHours[day]?.open ?? 'Closed'
  console.log(`in ${day} we open at ${open}`);
}

////metthods
console.log(restaurant.order?.(0,1)??'Methods does not exist');// exist
console.log(restaurant.ordeRisotto?.(0,1)??'Methods does not exist');//does't exist
//Arrays
const users =[{name:'jonas',email:"email@email.com"}];
// const users=[] //with this console.log below display 'User array empty"
console.log(users[0]?.name??'User array empty');// display jonas
//clasic
if(users.length>0)console.log(users[0].name);else
console.log('user array empty');


/////////////////////////for of loop///////////////
// const menu= [...restaurant.starterMenu,...restaurant.mainMenu];
// for(const item of menu) console.log(item);

// for (const item of menu.entries())  console.log(item[0],item[1]);

// for(const [i,el] of menu.entries())console.log(`${i}: ${el}`);





// /////////////////nullish coalescing operator

// restaurant.numGuests=0;    
// const guest3= restaurant.numGuests??10 // 0
// console.log(guest3);

// const rest1={
//   name:"La pizza",
//   numGuests:0,
// }
// const rest2={
//   name:'Capri',
//   owner:'Giovani Gucci',
// }



// //////////////////////////logical assignament operator//////////////
// //Or asigment operator
// //  rest1.numGuests=rest1.numGuests||10; //10  incorrect. should return 0
// //  rest2.numGuests=rest2.numGuests||10; //10  correct

// //  rest1.numGuests||=10;
// //  rest2.numGuests||=10;       //same as above but in shorcut
// //// solution is nullish operator(null and undefinde)
// rest1.numGuests??=10; //0   correct
// rest2.numGuests??=10; //10  correct
// //And assigment operator
// // rest1.owner =rest1.owner||'<ANONYMOUS>';//correct ,do nothing becouse rest1.owner is false
// // rest2.owner =rest2.owner||'<ANONYMOUS>';//correct , change rest2.owner on <ANONYMOUS>
// rest1.owner&&='<ANONYMOUS>';//same as above but in shortcut
// rest2.owner&&='<ANONYMOUS>';//


// console.log(rest1);
// console.log(rest2);
// ///////////////////operator or || and &&/////////////////
// console.log(3||'jonas');
// console.log(""||'jonas');
// console.log(true||'jonas');
// console.log(undefined||null);
// console.log(undefined||null||0||'Hello'||23||'');

// const guest1= restaurant.numGuest? restaurant.numGuest:10;
// console.log(guest1);//10
// const guest2= restaurant.numGuest||10;
// console.log(guest2);//10

// console.log(0&&'jonas');//0
// console.log(7&&'jonas');//jonas
// console.log('hello'&&23&&null&&'jonas');//null

// //practical example'
// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms','spinach')};

// restaurant.orderPizza&&restaurant.orderPizza(
//   'mushrooms','spinach');

////////////////////////////Operator Rest //////////////////////////

// //Spread, becouse on RIGHT side of  =
// const arr=[1,2, ...[3,4]]; //1,2,3,4

// //Rest, becouse on LEFT side of =
// const[a,b,...others]=[1,2,3,4,5];// 1,2,[3,4,5];
// console.log(a,b,others);

// const[Pizza,, Risotto,...othersFood]=[//pizza Risotto ["focaccia","Bruschetta",itd.]
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];


// //object
// const{sat,...wekdays}=restaurant.openingHours;
// console.log(wekdays);


// //2) functions
// const add =function(...numbers){
//   let sum=0;
//   for(let i=0;i<numbers.length;i++){
//     sum+=numbers[i];
//   } 
//   return sum;
// }
// console.log(add(4,2)) //6
// console.log(add(4,2,6,4,2))//summ all elements of arrray =18

// const x =[23,5,7];
// add(...x);
// restaurant.orderPizza('mashrooms','onion','olives','spinach');
// restaurant.orderPizza('mashrooms')
// ////////////////////////////operator Spread/////////////////////
// //object
// const newRestauran={    //copying restauran and add 2 new element
//   FoundedIn:1998,       // foundedIn and founder
//   ...restaurant,
//   founder:'Guiseppe'};
//   console.log(newRestauran);

//   const restaurantCopy={...restaurant};
//   restaurantCopy.name='Ristorante Roma'; //all the same except name
//   console.log(restaurant);
//   console.log(restaurantCopy);

// //live example

// const ingredients=[
//   // prompt('let\'s make pasta! Ingredient 1?'),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 2'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);

// restaurant.orderPasta(...ingredients);

// const arr = [7,8,9];
// const badNewArr= [1,2, arr[0],arr[1],arr[2]];
// console.log(badNewArr);   //same as below

// const newArr=[1,2,...arr];
// console.log(newArr);      //display 1,2,7,8,9

// const newMenu=[...restaurant.mainMenu, 'Gnucci']; //create new array with "gnucci"
// console.log(newMenu);

// // copy array
// const mainMenuCopy =[...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);

// //Iterables:arrays,strings,maps,sets.Not Objects

// const str= 'Jonsa';
// const letters=[...str, " ",'S.']; //  'J','o','n','a','s','','s.'
// console.log(...str); // J o n a s
// // console.log(`${...str} schmedtmann`); //its not gona work


///////////////////////Destructuring object/////////////////////
// restaurant.orderDelivery({
//   address:'Via del Sole,21',
//   starterIndex:1,
// })
// restaurant.orderDelivery({
//   time:'20:30',
//   address:'Via del Sole,21',
//   mainIndex:2,
//   starterIndex:2,
// });
// const {name,openingHours,categories}= restaurant;
// //display Name, metod OpeningHours and array categories
// console.log(name,openingHours,categories);

// const {name:restaurantName,openingHours:hours,categories:tags}=restaurant;
// //display same as above
// console.log(restaurantName,hours,tags);

// const {menu= [], starterMenu:sterters=[]}=restaurant;
// //display defult empty array "menu", becouse he does't exist yet
// // and startMenu array 
// console.log(menu,sterters);

// //Mutating variables
// let a =111;
// let b =999;
// const obj={a:23,b:7,c:14};
// // let {a,b}=obj;    //can't do that becouse variables a,b already exist
// // let{f,d}=obj;    //cant't do tahat becoues this create new variables
// /* {a,b}=obj;       // cant't do that becouse ist's sytax error becouse
//                    when we start with {} javaScript expecting block code */
// ({a,b}=obj) //its the result, we sholud use () and then it will work
// console.log(a,b); 

// //nested object
// const {openingHours:{
//   fri:{open:o,close:c}}}=restaurant;  //distplay 11 and 23
// console.log(o,c);



//////////////////////////Destructuring Arrays///////////////
// const arr =[2,3,4];
// const a =arr[0];//a=2
// const b =arr[1];//b=3
// const c =arr[2];//c=4

// const [x,y,z]=arr;
// console.log(x,y,z); //x =2 ,y=3,z=4
// console.log(arr); //arr=[2,3,4];

// const [first, second]=restaurant.categories;
// // display Italian Pizzeria
// console.log(first,second);

// let [main, ,secendary]= restaurant.categories;
// //display Italian Vegetarian
// console.log(main,secendary);

// // //swiching variables 
// //  const temp = main;
// //  main = secendary;
// //  secendary= temp;
// //  console.log(main,secendary);

// [main,secendary]= [secendary,main];
// console.log(main,secendary);

// //receive 2 return values from function;
// const [sterter,maain]= restaurant.order(2,0);
// // display Garlic Bread Pizza
// console.log(sterter,maain);

// const nested=[2,4,[5,6]];
// //const [i,j]=nested;      //display 2 4
// const [i,,[j,k]]=nested;   //display 2 5 6 
// console.log(i,j,k);       

// //defult values
// // const [p,q,r]=[8,9]; //p=8,q=9,r=undefind
// const [p=1,q=1,r=1]=[8,9]; //p=8,q=9,r=1