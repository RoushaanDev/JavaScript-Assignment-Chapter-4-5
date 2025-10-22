// Answer 1
var city = prompt("Enter your city name:");
if (city == "Karachi") {
  alert("Welcome to city of lights");
}

// Answer 2
var gender = prompt("Enter your gender (male/female):");
if (gender == "male") {
  alert("Good Morning Sir");
}
else if (gender == "female") {
  alert("Good Morning Ma’am");
}

// Answer 3
var color = prompt("Enter road signal color (Red, Yellow, Green):");
if (color == "Red") {
  alert("Must Stop");
}
else if (color == "Yellow") {
  alert("Ready to move");
}
else if (color == "Green") {
  alert("Move now");
}

// Answer 4
var fuel = prompt("Enter remaining fuel in litres:");
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// Answer 5
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}



// Answer 7
var secret = 5;
var guess = prompt("Guess number 1 to 10:");
if (guess == secret) {
  alert("Bingo! Correct answer");
}
else if (guess == 6) {
  alert("Close enough to the correct answer");
}
else {
  alert("Wrong answer");
}

// Answer 8
var num = prompt("Enter a number:");
if (num % 3 == 0) {
  alert("Divide by 3");
}
else {
  alert("Not divide by 3");
}

// Answer 9
var n = prompt("Enter a number:");
if (n % 2 == 0) {
  alert("Even number");
}
else {
  alert("Odd number");
}

// Answer 10
var temp = prompt("Enter temperature:");
if (temp > 40) {
  alert("It is too hot");
}
else if (temp > 30) {
  alert("Weather is normal");
}
else if (temp > 20) {
  alert("Weather is cool");
}
else {
  alert("Weather is so cool");
}



// Answer 11
var a = prompt("Enter first number:");
var b = prompt("Enter second number:");
var op = prompt("Enter +, -, *, / or % :");

if (op == "+") {
  alert("Result: " + (a + b));
}
else if (op == "-") {
  alert("Result: " + (a - b));
}
else if (op == "*") {
  alert("Result: " + (a * b));
}
else if (op == "/") {
  alert("Result: " + (a / b));
}
else if (op == "%") {
  alert("Result: " + (a % b));
}
else {
  alert("Wrong input");
}



// Answer 12
var ch = prompt("Enter a character:");
if (ch >= "A" && ch <= "Z") {
  alert("Uppercase letter");
} else if (ch >= "a" && ch <= "z") {
  alert("Lowercase letter");
} else if (ch >= "0" && ch <= "9") {
  alert("Number");
} else {
  alert("Other character");
}

// Answer 13
var a = prompt("Enter first number:");
var b = prompt("Enter second number:");
if (a > b) {
  alert(a + " is larger");
} else if (b > a) {
  alert(b + " is larger");
} else {
  alert("Both are equal");
}

// Answer 14
var num = prompt("Enter a number:");
if (num > 0) {
  alert("Positive");
} else if (num < 0) {
  alert("Negative");
} else {
  alert("Zero");
}

// Answer 15
var letter = prompt("Enter a letter:");
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
  alert("It is a vowel");
} else {
  alert("Not a vowel");
}

// Answer 16
var correct = "admin123";
var pass = prompt("Enter your password:");
if (pass == "") {
  alert("Please enter your password");
} else if (pass == correct) {
  alert("Correct password");
} else {
  alert("Incorrect password");
}
