// Question 01
var num1, num2, sum;
num1 = parseFloat (prompt("Enter first number"));
num2 = parseFloat (prompt("Enter second number"));
sum = num1 + num2
document.write("The sum of first number " + (num1) +" and second number " + (num2) +" = " +sum);

// Question 02
var num1 , num2 , multiplication, subtraction, division ;
num1 = parseFloat(prompt("Enter first number"));
num2 = parseFloat(prompt("Enter second number"));
multiplication = num1 * num2;
subtraction = num1 - num2;
division = num1 / num2;
document.write("The multiplication of first number " + (num1) +" and second number " + (num2) +" = " +multiplication +"<br>");
document.write("The subtraction of first number " + (num1) +" and second number " + (num2) +" = " +subtraction + "<br>");
document.write("The division of first number " + (num1) +" and second number " + (num2) +" = " +division + "<br>");

// Question 03
var number,increement,addition, result,decrement,division
number = parseFloat(prompt("Please Enter any number"));
increement = number + 1;
document.write("After increement in number =" + increement + "<br>");
addition = increement + 7;
document.write ("Add 7 number in increement =" + addition + "<br>") ; 
result = addition;
document.write("After addition in result =" + result + "<br>");
decrement = result - 1;
document.write("After decreement in result the number will become = " + decrement + "<br>"); 
division = decrement/3;
document.write("After division by 3 the fianl number will become = " + division + "<br>"); 

// Question 04
var ticket_price, quantity, total_price;
quantity = parseFloat(prompt("Please Enter quantity of tickets"));
ticket_price = 600;
total_price = ticket_price * quantity;
document.write("Total Cost to buy "+ quantity +"Tickets to a movie is " + total_price +"PKR"); 

// Question 05
var number, one ,two ,three ,four ,five ,six ,seven ,eight ,nine ,ten;
number = parseFloat(prompt("Please Enter any number"));
one = number * 1;
two = number * 2;
three = number * 3;
four = number * 4;
five = number * 5;
six = number * 6;
seven = number * 7;
eight = number * 8;
nine = number * 9;
ten = number * 10;
document.write("Table of " + number +"<br>")
document.write( number +" * one = " + one +  "<br>") ;
document.write( number +" * two = "+ two + "<br>");
document.write( number +" * three = "+ three + "<br>");
document.write( number +" * four = "+ four + "<br>");
document.write( number +" * five = "+five + "<br>");
document.write( number +" * six = "+six + "<br>");
document.write( number +" * seven = "+seven + "<br>");
document.write( number +" * eight = "+eight + "<br>");
document.write( number +" * nine = "+nine + "<br>");
document.write( number +" * ten = "+ten + "<br>");

// Question 06
var Celsius_Temperature , Fahrenheit_Temperature ,New_Tempearture ;
Celsius_Temperature = parseFloat(prompt("Please Enter Celsius Tempearture" ));
Fahrenheit_Temperature = (Celsius_Temperature * 9/5) + 32;
document.write(" Celsius to Fahrenheit = "+ Fahrenheit_Temperature +"<br>");
Fahrenheit_Temperature = parseFloat(prompt("Please Enter Fahrenheit Tempearture"));
New_Tempearture = (Fahrenheit_Temperature - 32)* 5/9;
document.write("Fahrenheit to Celsius = "  + New_Tempearture);





