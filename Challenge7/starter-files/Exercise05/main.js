const numbers = document.querySelector(".numbers");
const sumNumbers = document.querySelector(".sum");
const subNumbers = document.querySelector(".sub");
const multiNumbers = document.querySelector(".multi");
const divNumbers = document.querySelector(".div");

const numOne = Number(prompt("Enter first number"));
const numTwo = +prompt("Enter second number");

numbers.innerHTML = `NumberOne: ${numOne} <br> NumberTwo: ${numTwo}`;

const sum = numOne + numTwo;
sumNumbers.innerHTML = `Sum is: ${sum}`;

const sub = numOne - numTwo;
subNumbers.innerHTML = `Subtraction is: ${sub}`;

const mul = numOne * numTwo;
multiNumbers.innerHTML = `Multiplication is: ${mul}`;

const div = numOne / numTwo;
divNumbers.innerHTML = `Division is: ${div}`;
