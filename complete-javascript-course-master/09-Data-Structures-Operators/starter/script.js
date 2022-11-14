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

// /////////////////////////////Workinng with string#3///////
// //dzielenie i łaczenie
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName,secondName] ='Jonas Schmedtman'.split(' ');

// const newName = ['Mr.',firstName,secondName.toUpperCase()].
// join(' '); 
// console.log(newName);

// const capitalizeName= function(name){
//   const names =name.split(' ');
//   const namesUpper= [];

//   for(const n of names){
//     // namesUpper.push(n[0].toUpperCase()+ n.slice(1));
//     // console.log(namesUpper);
//     //or same result
//     namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizeName("jessica ann smith davis")

// ////////Padding

// const message ="Go to gate 23!";
// console.log(message.padStart(20,'+').padEnd(30,'+'));
// console.log('Jonas'.padStart(20,'+').padEnd(30,'+'));

// const maskCreditCard = function(number){
//   const str = number +'';
//   const last = str.slice(-4);
//   return last.padStart(str.length,'*')
// }

// console.log(maskCreditCard(412412));
// //repeat 


// const message2 = 'Bad waether... All departues Delayed...';
// console.log(message2.repeat(4));

// const planesInLine = function(n){
//   console.log(`There are ${n} planes in line${'🛫'.repeat(n)}`);
// };
// planesInLine(2);
// planesInLine(4);


// /////////////////////////////Working with strings#2/////

// const passenger = 'jonas';
// const passangerLower= passenger.toLowerCase();
// const passengerCorrect= 
// passangerLower[0].toUpperCase()+ passangerLower.
// slice(1);
// console.log(passengerCorrect);

// const email ='hello@jonas.is';
// const loginEmail ='Hello@Jonas.Io \n';

// // const loweEmail = loginEmail.toLocaleLowerCase();
// // const trimmedEmail= loginEmail.trim();
// /// trim is deleting all " "before string and after stirng
// const normalizedEmail = loginEmail.toLocaleLowerCase().
// trim();
// console.log(normalizedEmail);
// cosole.log(email===normalizedEmail);

// ////replacing'
// const priceGB = '288,97£'
// const priceUS =priceGB.replace('£','$').replace(',',('.'));
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// //replace first string
// console.log(announcement.replace('door','gate'));
// //in future replacing all strings
// // console.log(announcement.replaceAll('door','gate'));
// ///now replacing all strings 
// console.log(announcement.replace(/door/g,'gate'));

// /////booleans
// const plane = 'AirBus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));
// if(plane.startsWith('AirBus')&&plane.endsWith('neo')){
//   console.log('Part of the NEW ARitbus Family');
// }
// //example
// const chechBaggage= function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife')||baggage.includes('gun')){
//     console.log('You are NOT allowed on board');
//   }else console.log('Welcome board!');
// };
// chechBaggage('I have a laptop, some Food and a pocket Knife')
// chechBaggage('Socks and camera');
// chechBaggage('Got some snacks and gun for protection');
// ////////////////////////////Workign with strings#1//////
// const airline = `Tap Air Portugal`;
// const plane ='A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));//size is important

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.indexOf(' ')+1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// //example caught
// const checkMiddleSeat= function(seat){
//   const s= seat.slice(-1);
//   s==='B'||s==='E'?console.log('You got the middle seat👲'):
//   console.log("You are lucky🎅");
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


// /////////////////////////Maps iteration////////////
// const qusetion = new Map([
//   ['question',`What is the best programing language
//   in the world?`],
//   [1,'c'],
//   [2,'java'],
//   [3,'JavaScript'],
//   ['correct',3],
//   [true,'Correct!🎉'],
//   [false,'Try again'],
// ]);
// console.log(qusetion);

// //Convert obj to map
// console.log(Object.entries(openingHours));
// const hoursMap= new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quiz app with map itertion
// console.log(qusetion.get('question'));
// for(const[key,value]of qusetion){
//   if(typeof key==='Number'){
//     console.log(`Answer ${key}:
//     ${value}`);
//   }
// }
// const answer= Number(prompt('Your answer'));
// console.log(answer);
// console.log(qusetion.get(qusetion.get('correct')===answer));

//convert map to array:
// const mapToArray= [...qusetion];
// console.log(mapToArray);

// console.log([...qusetion.entries()]);
// console.log(qusetion.keys());
// console.log([...qusetion.keys()]);
// console.log([...qusetion.values()]);


// if(answer===3){console.log( qusetion.get(true))}
// else if(answer===2||answer===1){console.log( qusetion.get(false))};
// //////////////////////Maps//////////////////////
// const rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Firenze, Italy');
// console.log(rest.set(2,'Lisban, Portugal'));

// rest
//   .set('categories',['Italian','Pizzeria',
// 'Vegetarian','Organic'])
//   .set('open',11)
//   .set('close',23)
//   .set(true,"we are open!")
//   .set(false,"we are closed");
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get('1'));

// const time=8;
// console.log(rest.get(time>rest.get('open')&&time
// <rest.get('close')));


// const arr=[1,2];
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.set(arr,'test');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));
// ///////////////////Set///////////////////////
// const orderSet= new Set([
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);
// console.log(new Set('Jonas'));
// console.log(new Set('Joonaass'));


// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);


// //example
// const staff= ['Waiter','chef','Waiter',
// 'chef','Waiter','Manager']
// const staffUnique=[...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter','chef','Waiter','chef',
//   'Waiter','Manager']).size
// );

// //////////////// looping object //////////
// //property name
// const properties = Object.keys(openingHours)
// let openStr=`we are open on ${properties.length} days: `;
//  for (const day of properties) {
//   openStr+=`${day}, `;
//  }
// //  console.log(openStr);
//  //Property value
// // const value = Object.keys(openingHours);
// // console.log(value);
// // Entries object]
// const entries= Object.entries(openingHours);
// console.log(entries);

// for (const [day,{open,close}] of entries) {
//   console.log(`On ${day} we open at ${open} and close
//   at ${close}`);
// }



// ////////////////optional chaining(?.)/////////
// //clasic
// if(restaurant.openingHours&&restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon);
// }

// //with optional chaining
// // console.log(restaurant.openingHours?.mon?.open);
// //example
// const days =['mon','tue','wed','thu','fri','sat','sun'];

// for (const day of days) {
//   const open= restaurant.openingHours[day]?.open ?? 'Closed'
//   console.log(`in ${day} we open at ${open}`);
// }

// ////metthods
// console.log(restaurant.order?.(0,1)??'Methods does not exist');// exist
// console.log(restaurant.ordeRisotto?.(0,1)??'Methods does not exist');//does't exist
// //Arrays
// const users =[{name:'jonas',email:"email@email.com"}];
// // const users=[] //with this console.log below display 'User array empty"
// console.log(users[0]?.name??'User array empty');// display jonas
// //clasic
// if(users.length>0)console.log(users[0].name);else
// console.log('user array empty');


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