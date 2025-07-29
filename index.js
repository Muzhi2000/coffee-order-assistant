//--- login & access control ---//
let username = prompt("Enter your username (admin/user):");
let password = prompt("Enter your password:");

let role;
let securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
    role = username;
    securityLevel = (username === "admin") ? "high" : "low";
} else {
    alert("Invalid username or password. Access denied.");
    throw new Error("Login failed");
}

let name = prompt("What is your name?");
let age = parseInt(prompt("Enter your age:"));
let coffeeType = prompt("Enter coffee type (espresso, latte, cappuccino):").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like to order?"));

let pricePerCup = 0;
if (coffeeType === "espresso") {
    pricePerCup = 2.5;
} else if (coffeeType === "latte") {
    pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
} else {
    alert("Invalid coffee type selected.");
    throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup * quantity;

//--- Discount
let discount = 0;
if (age < 18 || age > 60) {
    discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

let split = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3):"));
let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / split;


 alert(
    'Hello ${name}:\n' +
    'You ordered, ${quantity} ${coffeeType}\n' +
    'Original total: $${originalTotal.toFixed(2)}\n' +
    'discount: $${discount.toFixed(2)}\n' +
    'Final total after discount: $${tipAmount.toFixed(2)}\n' +
    'Total with tip: $${totalWithTip.toFixed(2)}\n' +
    'Number of people splitting: ${split}\n' +
    'Amount per person: $${amountPerPerson.toFixed(2)}'
 );
   



    
    
    
