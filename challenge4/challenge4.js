/*
Create a simple calculator that can add, subtract, multiply, and divide two numbers

1. Have two inputs for the user to put in 2 numbers
2. When an operation (+, -, *, /) is pushed, the 2 numbers are stored in variables
3. Perform addition, subtraction, multiplication, and division on the numbers
4. Display the sum, difference, product, and quotient of the two numbers
    -  You will need a display area on your page

CHALLENGE:
- When dividing, display the answer as a whole number quotient with remainder (no decimals)

HINT: you will need Modulus %

*/

var num1;
var num2;

var remainder = num1 % num2;

function add(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("num1").value = "Sum";
    document.getElementById("num2").value = sum;
}

function sub(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var sub = num1 - num2;
    document.getElementById("num1").value = "Difference";
    document.getElementById("num2").value = sub;
}

function div(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var div = num1 / num2;
    var remainder = num1 % num2;
    document.getElementById("num1").value = `Difference: ${div}`;
    document.getElementById("num2").value = `Remainder: ${remainder}`;
}

function time(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var time = num1 * num2;
    document.getElementById("num1").value ="Product";
    document.getElementById('num2').value = time;
}

function reset(){
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null; 
}

function equal(){
    document.getElementById("num1").value = `No functionality`;
    document.getElementById("num2").value = `Just for layout :)`;
}