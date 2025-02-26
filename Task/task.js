
// -----------------------------------------------------------
// Assignment: Ticketing System Based on Age
// Task:
// Write a JavaScript program that asks the user to enter their age using the prompt() function.
// Use if-else statements to determine which type of ticket the user is eligible for:
// Child Ticket: If the age is less than 12.
// Teen Ticket: If the age is between 12 and 17.
// Adult Ticket: If the age is between 18 and 64.
// Senior Ticket: If the age is 65 or older.
// Display the appropriate message both in the console and with an alert.

// Sample Output:
// Input: 10
// Alert: "You are eligible for a Child Ticket."
// Console: "You are eligible for a Child Ticket."

// Input: 15
// Alert: "You are eligible for a Teen Ticket."
// Console: "You are eligible for a Teen Ticket."

// Input: 25
// Alert: "You are eligible for an Adult Ticket."
// Console: "You are eligible for an Adult Ticket."

// Input: 70
// Alert: "You are eligible for a Senior Ticket."
// Console: "You are eligible for a Senior Ticket."

var age  ;
age = parseFloat(prompt("PLease Enter Your Age"));

if (age < 12){
    console.log ("Your are eligible for a child ticket");
    document.write("Your are eligible for a child ticket");
}
else if (age >= 12 && age <= 17){
    console.log("Your are eligible for a Teen Ticket");
    document.write("You are eligible for a Teen Ticket");
}
else if (age >= 18 && age <=64 ){
    console.log ("Your are eligible for an Adult Ticket");
    document.write("Your are eligible for an  adult Ticket");
}
else if (age >= 65){
    console.log ("Your are Eligible for a Senior Ticket")
    document.write("Your are eligible for a Senior Ticket")
}
else{
    console.log("You entered an invalid age")
    document.write("You entered an invalid age")
}