
let correctNumber = 7;


let userGuess = prompt("Guess a number between 1 and 10:");

let diff = userGuess - correctNumber;

if (userGuess == correctNumber) {
  console.log("🎯 Correct!");
} 
else if (diff == 1 || diff == -1) {
  console.log("Bas ek step door ho");
} 
else if (diff == 2 || diff == -2) {
  console.log("thoda sa or try karo");
} 
else if (diff == 3 || diff == -3) {
  console.log("qareeb ho rahe ho");
} 
else {
  console.log("low guess hai");
}
