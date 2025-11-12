
var emptyArrays = [[], [], []];
console.log("1. Empty arrays:", emptyArrays);


var myMatrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2], 
  [2, 1, 0, 1]
];
console.log("2. Matrix:");
for (var i = 0; i < 3; i++) {
  var row = myMatrix[i];
  console.log(row[0], row[1], row[2], row[3]);
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("3. Fruits:");
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


console.log("4. Count 1 to 10:");
for (var i = 1; i <= 10; i++) {
  console.log(i);
}


console.log("5a. Count 1 to 15:");
for (var i = 1; i <= 15; i++) {
  console.log(i);
}

console.log("5b. Count down 10 to 1:");
for (var i = 10; i > 0; i--) {
  console.log(i);
}

console.log("5c. Even numbers:");
for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}

console.log("5d. Odd numbers:");
for (var i = 1; i <= 19; i += 2) {
  console.log(i);
}

console.log("5e. Series with k:");
for (var i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

console.log("5f. Count by 5:");
for (var i = 5; i <= 100; i += 5) {
  console.log(i);
}


console.log("6. Multiplication table of 5:");
var num = 5;
for (var i = 1; i <= 10; i++) {
  var answer = num * i;
  console.log(num + " x " + i + " = " + answer);
}


var foods = ["cake", "apple pie", "cookie", "chips", "patties"];
var lookFor = "cookie";
var isFound = false;

console.log("7. Search for:", lookFor);
for (var i = 0; i < foods.length; i++) {
  if (foods[i] === lookFor) {
    isFound = true;
  }
}

if (isFound) {
  console.log("Found it!");
} else {
  console.log("Not found!");
}


var numbers = [24, 53, 78, 91, 12];
var biggest = numbers[0];

console.log("8. Find biggest number:");
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
}
console.log("Biggest is:", biggest);


var smallest = numbers[0];

console.log("9. Find smallest number:");
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log("Smallest is:", smallest);
