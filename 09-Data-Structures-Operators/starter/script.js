'use strict';
/*
// //DESTRUCTURING OBJECTS
// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
//     );
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orederPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`);
//   },
//   orderPizza: function(mainIngrediend, ...otherIngredient){
//     console.log(mainIngrediend);
//     console.log(otherIngredient);
//   }
// };

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'LaPizza',
//   owner: 'Giovanni Rossi',
// };


// // //OR OPERATOR
// // // rest1.numGuests = rest1.numGuests || 10;
// // // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests  ||= 10;
// // rest2.numGuests ||= 10;

// // //NULLISH assignment operator (null or undefined)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;


// //AND assingment operator
// rest1.owner = rest1.owner && '<ANNONYMUS';
// rest2.owner = rest2.owner && '<ANNONYMUS>';
// rest1.numGuests &&= '<ANNONYMUS>';
// rest2.owner = '<ANNONYMUS>';

// console.log(rest1);
// console.log(rest2);


// // restaurant.numGuests = 0
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);


// //nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Pesti 99',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });
// // restaurant.orderDelivery({
// //   address: 'Pesti 9000',
// //   starterIndex: 1,
// // })

// // const {name, openingHours, categories} = restaurant;
// // // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags
// // } = restaurant;
// // // console.log(restaurantName, hours, tags);

// // //default values
// // const {menu = [], starterMenu: starters = [] } = restaurant;
// // // console.log(menu, starters);

// // //mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = {
// //   a: 23,
// //   b: 7,
// //   c: 14
// // };
// // // {a, b} = obj; //JS expects a code block
// // ({a, b} = obj);
// // // console.log(a, b);

// // //nested lobjects
// // const {fri: {open, close}} = openingHours;
// // console.log(open, close);
// // //const {fri: {open: o, close: c}} = openingHours;
// // //console.log(o, c);

// // //DESTRUCTURIG ARRAYS
// // //receive 2 return values of a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const[i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//second element is skipped, third element is SECOND(named)
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

// // // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);

// // //hard coded shitty new array
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // //new array with spread(...) operator
// // const newArr = [1, 2, ...arr]; //expand this array with original elements
// // // console.log(newArr);

// // // console.log(...newArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // // console.log(newMenu)

// // //copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //join 2 arrays or more
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // // console.log(menu);
// // const str = 'Jonas';
// // const letters = [...str, ' ', 'S. '];
// // // console.log(letters);

// // //real world examp;e
// // const ingredients = [prompt('Let\'s make pasta! Ingredent 1?'),
// //   prompt('Ingredent 2?'),
// //   prompt('Ingredent 3?')];
// //   console.log(ingredients);
// //   restaurant.orederPasta(...ingredients);

// // //objects
// // const newRestaurant = {
// //   foundedIn: 1998,
// //   ...restaurant,
// //   founder: 'Giuseppe',
// // };
// // console.log(newRestaurant);
// // const restaurantCopy = {
// //   ...restaurant,
// // };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurant.name);
// // console.log(restaurantCopy.name);



// //DESTRUCTURING

// // //SPREAD, because of the RIGHT hand side of = 
// // const arrr = [1, 2, ...[3, 4]];


// // //REST, because of theLeft hand side 
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);


// // const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(pizza, Risotto, otherFood);


// // //Objects
// // const {sat,  ...weekdays} = restaurant.openingHours;
// // console.log(weekdays)

// //FUNCTIONS//REST ARGUMENTS

// // const add = function(...numbers){
// //   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//   }
//   console.log(sum)

// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('mush', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mush');


//------------||(OR)--------------------- SHORT CIRCUITS WHEN THE FIRST VALUE IS TRUE
//USE ANY DATA TYPE, RETURN ANY DATA TYPE, SHORT CIRCUITING
//&& and || operator

// console.log(3 || 'pityke');
// console.log('' || 'pityke');
// console.log(true || 0);
// console.log(undefined || null);


// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//---------&&(AND)------------------------SHORT CIRCUITS WHEN THE FIRST VALUE IS FALSE
// console.log(0 && 'pityke');
// console.log('hello' && 23 && null);

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mush, ', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mush ,', 'spinach');
*/

//1. coding challange
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1.
// const [players1, players2] = game.players;
// // console.log(players1, players2);
//  //2.
//  const [gk, ...fieldPlayers] = players1;
// //  console.log(gk, fieldPlayers);
//  //3.
//  const allPlayers = [...players1, ...players2];
// //  console.log(allPlayers);
//  //4.
//  const players1Final = [...players1, 'Thiago', 'Couthino', 'Periscic'];
//  //5.
//  const {odds: {team1, x:draw, team2}} = game;
//  console.log(team1, draw, team2);
//  //6.
//  const printGoals = function(...players){
//   console.log(`${players.length} goals were scored`)
//  }
//  printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
//  printGoals('Lewandowski', 'Gnarby');
//  //7.
//  team1 < team2 && console.log('team 1 is more likely to win');
//  team1 > team2 && console.log('team 2 is more likely to win');


// for (const item of menu){
//   console.log(item);
// }
// for (const item of menu.entries()){
//   console.log(item);
// }
// console.log(menu.entries());
// console.log([...menu.entries()]);

// for (const [i, el] of menu.entries()){
//   console.log(`${i + 1} : ${el}`);
// }

// if(restaurant.openingHours && restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon);
// }

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open)

// //example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days){

//   //NULLISH COALESCING OPERATOR
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`on ${day}, we open at ${open}`)
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exists');

// //Arrays
// const users = [
//   {name: 'jonas', email:'hjelomnekinef'}
// ];
// console.log(users[0]?.name ?? 'user array is empty');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enchanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
    );
  },
  orederPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngrediend, ...otherIngredient){
    console.log(mainIngrediend);
    console.log(otherIngredient);
  }
};


// //Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `

// for(const day of properties){
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// //[key, value]
// for(const [day, {open, close}] of entries){
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }
