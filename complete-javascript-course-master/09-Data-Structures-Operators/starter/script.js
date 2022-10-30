'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr =[2,3,4];
const a =arr[0];//a=2
const b =arr[1];//b=3
const c =arr[2];//c=4

const [x,y,z]=arr;
console.log(x,y,z); //x =2 ,y=3,z=4
console.log(arr); //arr=[2,3,4];

const [first, second]=restaurant.categories;
// display Italian Pizzeria
console.log(first,second);

let [main, ,secendary]= restaurant.categories;
//display Italian Vegetarian
console.log(main,secendary);

// //swiching variables 
//  const temp = main;
//  main = secendary;
//  secendary= temp;
//  console.log(main,secendary);

[main,secendary]= [secendary,main];
console.log(main,secendary);

//receive 2 return values from function;
const [sterter,maain]= restaurant.order(2,0);

console.log(sterter,maain);

const nested=[2,4,[5,6]];
//const [i,j]=nested;
const [i,,[j,k]]=nested;
console.log(i,j,k);

//defult values
// const [p,q,r]=[8,9]; //p=8,q=9,r=undefind
const [p=1,q=1,r=1]=[8,9]; //p=8,q=9,r=1