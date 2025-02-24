
// Question 01
var num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
    console.log(num + " is a positive number.");
} else if (num < 0) {
    console.log(num + " is a negative number.");
} else {
    console.log("The number is zero.");
}

// Question 02
var num = parseFloat(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}

// Question 03
var age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Question 04
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

if (num1 > num2) {
    console.log(num1 + " is the largest number.");
} else if (num2 > num1) {
    console.log(num2 + " is the largest number.");
} else {
    console.log("Both numbers are equal.");
}

// Question 05
var age = parseInt(prompt("Enter your age:"));
var hasMembership = prompt("Do you have a membership card? (yes/no)").toLowerCase() === "yes";

if (age >= 60 || hasMembership) {
    console.log("You are eligible for a discount.");
} else {
    console.log("You are not eligible for a discount.");
}

// Question 06
var username = prompt("Enter your username:");
var password = prompt("Enter your password:");

if (username === "admin" && password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// Question 07
var marks = parseFloat(prompt("Enter your marks:"));
var grade;

if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else if (marks >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Your grade is: " + grade);

// Question 08
var trafficLight = prompt("Enter the traffic light color (red, yellow, green):").toLowerCase();
var action;

if (trafficLight === "red") {
    action = "Stop";
} else if (trafficLight === "yellow") {
    action = "Slow down";
} else if (trafficLight === "green") {
    action = "Go";
} else {
    action = "Invalid color";
}

console.log(action);

