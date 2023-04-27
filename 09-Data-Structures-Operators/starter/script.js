'use strict';

//DESTRUCTURING OBJECTS
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
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`);
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
  orederPasta: function(ing1, ing2, ing3){
    console.log(`here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`);
  }
};

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
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);


// // //nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);

// // const[i, , [j, k]] = nested;
// // console.log(i, j, k);

// // //default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);


// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];


// // //destructuring an array
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// // //second element is skipped, third element is SECOND(named)
// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // //switching variables
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary)


// // [main, secondary] = [secondary, main];
// // console.log(main, secondary); 


// //hard coded shitty new array
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);


// //new array with spread(...) operator
// const newArr = [1, 2, ...arr]; //expand this array with original elements
// // console.log(newArr);

// // console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu)

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);
// const str = 'Jonas';
// const letters = [...str, ' ', 'S. '];
// // console.log(letters);



// //real world examp;e
// const ingredients = [prompt('Let\'s make pasta! Ingredent 1?'), 
//   prompt('Ingredent 2?'),
//   prompt('Ingredent 3?')];
//   console.log(ingredients);
//   restaurant.orederPasta(...ingredients);


  //objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Giuseppe',

};
console.log(newRestaurant);
 const restaurantCopy = {
  ...restaurant
 };
 restaurantCopy.name = 'Ristorante Roma';
 console.log(restaurant.name);
 console.log(restaurantCopy.name);

 
  




