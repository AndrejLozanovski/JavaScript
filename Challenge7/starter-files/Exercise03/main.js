const numOne = 4;
const numTwo = 2;

const paragraph = document.createElement("p");
const square = document.querySelector("#square");
const numbers = document.querySelector(".numbers");

numbers.innerHTML = `NumberOne: ${numOne} <br> NumberTwo: ${numTwo}`;

if (numOne % 2 === 0 && numTwo % 2 === 0) {
  square.style.backgroundColor = "blue";
}
let message = ``;

if (numOne > numTwo) {
  message = `The bigger number is ${numOne}`;
} else if (numOne < numTwo) {
  message = `The bigger number is ${numTwo}`;
} else {
  message = `Numbers are equal `;
  square.style.backgroundColor = "white";
}

if (numOne % 3 === 0 && numTwo % 3 === 0) {
  paragraph.style.textDecoration = "underline";
}

paragraph.textContent = message;
square.append(paragraph);
