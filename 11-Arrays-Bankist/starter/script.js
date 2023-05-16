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
  owner: 'Balla Istvan',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Rebeka Toth',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Horvath Balint',
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

/////////////////////////////////////////////////


const displayMovements = function(movements){
  //.textContent = 0;
containerMovements.innerHTML = ''; 

  movements.forEach(function(mov, i){
    //actions type
    const type = mov > 0 ? 'deposit' : 'withdrawl';
    //displaying actions types
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};


const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc, cur) => {
    return acc + cur;
  });
  labelBalance.textContent = `${balance}€`
};



const calcDisplaySummary = function(acc){
  //incomes
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  //withdraws
  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate / 100)
  //second reduce is for interests over 1 €
  //this filter removes numbers under 1 €
  .filter((int, i, arr) => {
    //this console shows all the components in the current array
    console.log(arr);  
    return int >= 1; 
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`
}



const createUserNames = function(account){
  account.forEach(acc => {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
  });
};
createUserNames(accounts);

//Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function(e){
  //Prevent form ffrom submitting
  e.preventDefault();
  

  //Find the accounts

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  //Pin code
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    //changing opacity gives us the login feel
    containerApp.style.opacity = 100;


    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Display movements
    displayMovements(currentAccount.movements);

    //Display balance
    calcDisplayBalance(currentAccount.movements);

    //Display summary
    calcDisplaySummary(currentAccount.movements);
  }
});












/*

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice(returns a new array not mutate the original) //1.index starts extracting//2.index is the end parameter
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
 //create a shallow copy with slice
 console.log([...arr]);
 
//Splice //mutates the original array
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//Reverse //muatates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat //does NOT mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join
console.log(letters.join(' - '));

//Push
//Unshift
//Shift
//Indexof
//Includes

//At
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting the last element 
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); //-1 gets the last element of an array
console.log('pityke'.at(0));
console.log('pityke'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 for (const [i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1}: You deposited ${movement}`)
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
  }
 };

 movements.forEach(function(movement, index, array){
  if(movement > 0){
    console.log(`Movement ${index + 1}: You deposited ${movement}`)
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`)
  }
 });
 
 //0: function(200);
 //1: function(450);
 //2: function(-400);

 //MAP
 const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value} `);
});

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, set){
  console.log(`${_}: ${value}`);
});

//coding challange 1.
//Test Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3];
//Test data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4];

const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const ageCheck = function(jDog, kDog){
  //1.
  const removeCats = jDog.slice(1, -2);
  //2.
  const sumDogs = removeCats.concat(kDog);
  //3.
  sumDogs.forEach(function(dog, index) {
    if(dog >= 3){
      console.log(`Dog number ${index + 1} is an adult, and it is ${dog} years old`)
    } else {
      console.log(`Dog number ${index + 1} is still a puppy`)
    }
  });
  return;
};
ageCheck(juliaData1, kateData1);
ageCheck(juliaData2, kateData2);



//MAP//////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => {
  return mov * eurToUsd;
})
console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`;
});
console.log(movementsDescriptions);


//FILTER//////////////////////////////////////
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => {
  return mov > 0;
});

console.log(movements);
console.log(deposits);


const withdrawls = movements.filter(mov => {
  return mov < 0;
});
console.log(withdrawls);


//////REDUCE/////////////////////////////////////////////
//accumulator is like a snowball collects for itselt
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function(accumulator, currentValue, index, array){
  console.log(`Iteration ${index}: ${accumulator}`);
   return accumulator + currentValue;
}, 0);
console.log(balance);


//second argument in the REDUCE callback function now set to 100!!!!!! so the starting value is counts from 100
const balance2 = movements.reduce(function(accumulator, currentValue, index, array){
  console.log(`Iteration ${index}: ${accumulator}`);
   return accumulator + currentValue;
}, 100);
console.log(balance2);

let balance3 = 0;
for(const mov of movements){
  balance3 += mov;
};
console.log(balance3);

//maximum value of movements array
const max = movements.reduce((acc, mov) => {
  if(acc > mov){
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

// coding challange 2.
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const datas = data1.concat(data2);
//1.
const calcAge = datas.map(age => {
  return age <= 2 ? age * 2 : 16 + age * 4;
});
console.log(calcAge)
//2.
const ageFilter = calcAge.filter(age => {
  return age >= 18;
});
console.log(ageFilter);
//3.
const adultDogs = calcAge.filter(age => {
  return age > 18;
});
console.log(adultDogs);
const calcAverage = adultDogs.reduce((acc, age, i, arr) => acc + curr / arr.length );
console.log(calcAverage);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//PIPELINE
const totalDepositUSD = movements.filter(mov => mov > 0)
///if something wring in the chained method 
//jsut console.log the actual array
.map((mov, i, arr) => {
  //console.log the actual array here
  // console.log(arr);
  return mov * eurToUsd})

.reduce((acc, mov) => acc + mov, 0); 
console.log(totalDepositUSD);

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = function(age){
  const average = age
  .map(age => {
    return age <= 2 ? age * 2 : 16 + age * 4;
  })
  .filter(age => {
    return age >= 18;
  })
  .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  return average;
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Rebeka Toth');
console.log(account);
 */

