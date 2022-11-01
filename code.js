// Create a ATM application using javascript and the functionality of the application are
// Check balance
// Withdraw cash
// Transaction Time
// Create a class called ATM there you can create a constructor get the two input values
// action => BALANCE or WITHDRAW_CASH
// atmObj => This should contains the below values in the form of objects
// pin
// balance
// Check Balance:
//         Create a function getBalance(pin) inside the class that should print the balance. Inside the function we can first check whether the given pin is correct or not.
//         If not then throw the message as Incorrect pin !
//         If the pin is correct then show the message as Your balance is 1000 Rupees

// Withdraw cash:
//         Create a function withdrawCash(pin, withdrawAmount) inside the class that should first check whether the given pin is correct or not.
//         If not then throw the message as Incorrect pin !
//         If the pin is correct then check the user having the required balance for the transaction.
//         If not then show the message as Insufficient balance !
//         If yes then show the message as
// Please collect your cash
// Your balance is 100 Rupees

// Transaction Time:
//         Create a function transactionTimer() that will wait for 5000 milliseconds where each transaction happens such as Balance and cash withdrawal. Then execute the actual function.
//         It will give feel similar to ATM transaction waiting time
// Input:

// const obj = new ATM({
//   pin: 1234,
//   balance: 1000
// });

// checkBalance();

// let storeObject = {
//     CheckBalance: function (){
//         // 500KB
//         console.log("check balance run");
//     },

//     WidthdrawCash: function (){
//         // 500KB
//         console.log("widthdraw cash run");
//     }
// }

// function userGenartor(pin, balance){
//     let newUser = new Object(storeObject);
//     newUser.pin = pin;
//     newUser.balance = balance;

//     return newUser;
// }

// let user1 = userGenartor("123", "1000");
// let user2 = userGenartor("")

// class Atm {
//   constructor({ pin, balance }) {
//     (this.pin = pin), (this.balance = balance);
//   }

//   CheckBalance() {
//     console.log("the balance is ", this.balance);
//   }
//   WidthdrawCash() {
//     console.log("widhtraw cash run");
//   }

// }
// let user1 = new Atm({ pin: "123", balance: "2000" });
// // console.log(user1.balance);
// user1.CheckBalance();

// N = 100 => 4
// N = 1110 =>14

// 1,2,3........14
// 28
// let n= 4;
// function count(num) {
//   let cnt = 0;
//   while (num > 0) {
//     cnt += (num%2);
//     num = Math.floor(num/2);
//   }
//   return cnt;
// }// O(log(n));

// let ans = 0;
// for (let i = 1; i <= n; i++) {
//   ans += count(i);
// }
// console.log(ans);

// 1, 2, ,3, 4
// 1, 10, 11, 100
