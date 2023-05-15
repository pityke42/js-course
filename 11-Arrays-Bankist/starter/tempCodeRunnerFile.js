const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);

console.log(accounts);


const account = accounts.find(acc => acc.owner === 'Rebeka Toth');
console.log(account)
