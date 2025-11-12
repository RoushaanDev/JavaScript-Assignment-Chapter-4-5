let balance = 10000;

console.log("Welcome to Simple ATM ");
console.log("1. Check Balance");
console.log("2. Withdraw Money");
console.log("3. Deposit Money");

let choice = prompt("Enter your choice (1, 2, or 3):");

if (choice == 1) {
  console.log("Your current balance is: " + balance);
} 
else if (choice == 2) {
  let withdraw = prompt("Enter amount to withdraw:");
  
  if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal successful!");
    console.log("Remaining balance: " + balance);
  } else {
    console.log(" Not enough balance!");
  }
} 
else if (choice == 3) {
  let deposit = prompt("Enter amount to add:");
  balance = balance + (+deposit);
  console.log("Deposit successful!");
  console.log("New balance: " + balance);
} 
else {
  console.log("Galat choice! Please select 1, 2, or 3.");
}
