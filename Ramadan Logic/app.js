let ramadanDate = new Date("2026-02-17");  
let currentDate = new Date();         


let time = ramadanDate.getTime() - currentDate.getTime();


let totalDays = Math.floor(time / (1000 * 60 * 60 * 24));
let totalWeeks = Math.floor(totalDays / 7);
let totalMonths = Math.floor(totalDays / 30);


console.log("Remaining Time Until Ramadan 2026:");
console.log("Months: " + totalMonths);
console.log("Weeks: " + totalWeeks);
console.log("Days: " + totalDays);
