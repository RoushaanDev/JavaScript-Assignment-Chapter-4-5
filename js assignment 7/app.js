// --- Q1, Q6: Full Name Greeting ---
var fName = prompt("Enter first name:");
var lName = prompt("Enter last name:");
var fullName = fName + " " + lName; // Q1
var fullNameConcat = fName.concat(" ", lName); // Q6

document.write("<h2>Q1/Q6: Full Name</h2>Hello, " + fullName + "!<br>");
alert("Hello, " + fullName + "! Welcome.");

// --- Q2: String Length ---
var phone = prompt("Enter favorite mobile model:");
var length = phone.length;

document.write("<h2>Q2: String Length</h2>Length: " + length + "<br>");

// --- Q3: Index of 'n' ---
var word3 = "Pakistani";
var indexN = word3.indexOf('n');

document.write("<h2>Q3: Index of 'n'</h2>Index of 'n': " + indexN + "<br>");

// --- Q4: Last index of 'l' ---
var word4 = "Hello World";
var lastIndexL = word4.lastIndexOf('l');

document.write("<h2>Q4: Last Index of 'l'</h2>Last index of 'l': " + lastIndexL + "<br>");

// --- Q5: Character at index 3 ---
var word5 = "Pakistani";
var char3 = word5.charAt(3);

document.write("<h2>Q5: Character at Index 3</h2>Character at index 3: " + char3 + "<br>");

// --- Q7: Simple replacement ---
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("<h2>Q7: City Replacement</h2>After replacement: " + newCity + "<br>");

// --- Q8: Replace ALL 'and' ---
var msg = "Ali and Sami are best friends. They play cricket and football together.";
var newMsg = msg.replace(/and/g, "&");

document.write("<h2>Q8: 'and' Replacement</h2>Result: " + newMsg + "<br>");

// --- Q9: String to Number ---
var str9 = "472";
var num9 = parseInt(str9);

document.write("<h2>Q9: String to Number</h2>Type: " + typeof str9 + ", Value: " + str9 + "<br>");
document.write("Type: " + typeof num9 + ", Value: " + num9 + "<br>");

// --- Q10: Upper Case ---
var input10 = prompt("Enter a word for UPPERCASE:");
var upperCase = input10.toUpperCase();

document.write("<h2>Q10: Upper Case</h2>Upper case: " + upperCase + "<br>");

// --- Q11: Title Case ---
var input11 = prompt("Enter a word for Title Case:");
var titleCase = input11.charAt(0).toUpperCase() + input11.slice(1).toLowerCase();

document.write("<h2>Q11: Title Case</h2>Title case: " + titleCase + "<br>");

// --- Q12: Remove Decimal Point ---
var num12 = 35.36;
var result12 = num12.toString().replace(".", "");

document.write("<h2>Q12: Remove Decimal</h2>Result: " + result12 + "<br>");

// --- Q13: Username Validation ---
var user13 = prompt("Enter username (no @ . ! ,):");
var invalid13 = false;
var forbidden = ['@', '.', '!', ','];

for (var i = 0; i < user13.length; i++) {
    if (forbidden.indexOf(user13.charAt(i)) !== -1) {
        invalid13 = true;
        break;
    }
}

document.write("<h2>Q13: Username Validation</h2>");
if (invalid13) {
    alert("Please enter a valid username.");
    document.write("Status: Invalid.<br>");
} else {
    document.write("Status: Valid.<br>");
}

// --- Q14: Case-Insensitive Search ---
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Order something from the bakery (e.g., cookie):").toLowerCase();
var found = false;
var index = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === order) {
        found = true;
        index = i;
        break;
    }
}

document.write("<h2>Q14: Bakery Search</h2>");
if (found) {
    var msg14 = order + " is **available** at index " + index;
    alert("This page says:\n" + msg14);
    document.write(msg14 + "<br>");
} else {
    var msg14 = "We are sorry. " + order + " is **not available**";
    alert("This page says:\n" + msg14);
    document.write(msg14 + "<br>");
}

// --- Q15: Password Validation ---
var pass = prompt("Enter a password:");
var valid = true;
var reason = "";

if (pass.length < 6) {
    valid = false;
    reason = "It must be at least 6 characters long.";
}

var firstChar = pass.charCodeAt(0);
if (valid && firstChar >= 48 && firstChar <= 57) {
    valid = false;
    reason = "Password can not begin with a number.";
}

if (valid) {
    var hasLetter = false;
    var hasNumber = false;
    for (var i = 0; i < pass.length; i++) {
        var charCode = pass.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) { // 0-9
            hasNumber = true;
        } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) { // A-Z or a-z
            hasLetter = true;
        }
    }
    if (!hasLetter || !hasNumber) {
        valid = false;
        reason = "It should contain both alphabets and numbers.";
    }
}

document.write("<h2>Q15: Password Validation</h2>");
if (!valid) {
    alert("Please enter a valid password. " + reason);
    document.write(reason + "<br>Please enter a valid password<br>");
} else {
    document.write("Status: **Valid Password**.<br>");
}

// --- Q16: String to Array (Split) ---
var uni = "University of Karachi";
var arr16 = uni.split(" ");

document.write("<h2>Q16: String to Array</h2>Elements of Array: <br>");
for (var i = 0; i < arr16.length; i++) {
    document.write("Index " + i + ": " + arr16[i] + "<br>");
}