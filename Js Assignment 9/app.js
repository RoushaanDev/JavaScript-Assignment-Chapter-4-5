let d = new Date();
document.write("<h2>1. Current Date and Time</h2>");
document.write(d + "<hr>");

let m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let cm = d.getMonth();
document.write("<h2>2. Current Month</h2>");
document.write("Current month: " + m[cm] + " (Check console for alert)<hr>");

let ds = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let cd = d.getDay();
document.write("<h2>3. Current Day (3 Letters)</h2>");
document.write("Today is " + ds[cd] + " (Check console for alert)<hr>");

document.write("<h2>4. Fun Day Check</h2>");
if (cd === 0 || cd === 6) {
    document.write("It's Fun day<hr>");
} else {
    document.write("It's a weekday.<hr>");
}

let dt = d.getDate();
document.write("<h2>5. Days of the Month Check</h2>");
if (dt < 16) {
    document.write("First fifteen days of the month<hr>");
} else {
    document.write("Last days of the month<hr>");
}

let ms = d.getTime();
let mins = ms / 60000;
document.write("<h2>6. Minutes Since Epoch</h2>");
document.write("Elapsed milliseconds: " + ms + "<br>");
document.write("Elapsed minutes: " + mins + "<hr>");

let h = d.getHours();
document.write("<h2>7. AM/PM Check</h2>");
if (h < 12) {
    document.write("Its AM (Check console for alert)<hr>");
} else {
    document.write("Its PM (Check console for alert)<hr>");
}

let ld = new Date(2020, 11, 31, 0, 0, 0);
document.write("<h2>8. Specific Date Object (Dec 31, 2020)</h2>");
document.write("Later date: " + ld + "<hr>");

let r = new Date("June 18, 2015");
let td = d.getTime() - r.getTime();
let dp = Math.floor(td / 86400000);
document.write("<h2>9. Days Passed Since Ramadan 2015</h2>");
document.write(dp + " days have passed since 1st Ramadan, 2015 (Check console for alert)<hr>");

let b = new Date("January 1, 2015 00:00:00 GMT+0000");
let tds = d.getTime() - b.getTime();
let secs = Math.floor(tds / 1000);
document.write("<h2>10. Seconds Elapsed Since Beginning of 2015</h2>");
document.write("Seconds passed since beginning of 2015: " + secs + "<hr>");

let d11 = new Date();
let oh = d11.getHours();
d11.setHours(oh + 1);
document.write("<h2>11. Date Manipulation (1 Hour Ahead)</h2>");
document.write("Date 1 hour ahead: " + d11 + "<hr>");

let d12 = new Date();
let cy = d12.getFullYear();
d12.setFullYear(cy - 100);
document.write("<h2>12. Date Manipulation (100 Years Back)</h2>");
document.write("100 years back: " + d12 + " (Check console for alert)<hr>");

let age = 21;
let by = new Date().getFullYear() - age;
document.write("<h2>13. Age and Birth Year Calculation</h2>");
document.write("Your age is **" + age + "**<br>");
document.write("Your birth year is **" + by + "**<hr>");

let cn = "ABC Customer";
let cm14 = m[new Date().getMonth()];
let nu = 410;
let cpu = 16;
let lps = 350;

let na = nu * cpu;
let ga = na + lps;

document.write("<h2>14. K-Electric Bill</h2>");
document.write("Customer Name: " + cn + "<br>");
document.write("Month: " + cm14 + "<br>");
document.write("Number of units: " + nu + "<br>");
document.write("Charges per unit: " + cpu.toFixed(2) + "<br>");
document.write("Net Amount Payable: **" + na.toFixed(2) + "**<br>");
document.write("Late payment surcharge: " + lps.toFixed(2) + "<br>");
document.write("Gross Amount Payable: **" + ga.toFixed(2) + "**<hr>");