const numOne = 12;
const numTwo = 1223;
const numThree = 1;
const numFour = -10;
const numFive = 6;

const result = document.querySelector(".result");
const numbers = document.querySelector(".numbers");

numbers.innerHTML = `Find the largest number of the numbers: <br> <br> ${numOne} <br> ${numTwo} <br> ${numThree} <br> ${numFour} <br> ${numFive}`;

if (numOne > numTwo && numOne > numThree && numOne > numFour && numOne > numFive) {
  result.innerHTML = `The largest number is: ${numOne}`;
} else if (numTwo > numOne && numTwo > numThree && numTwo > numFour && numTwo > numFive) {
  result.innerHTML = `The largest number is: ${numTwo}`;
} else if (numThree > numOne && numThree > numTwo && numThree > numFour && numThree > numFive) {
  result.innerHTML = `The largest number is: ${numThree}`;
} else if (numFour > numOne && numFour > numTwo && numFour > numThree && numFour > numFive) {
  result.innerHTML = `The largest number is: ${numFour}`;
} else {
  result.innerHTML = `The largest number is: ${numFive}`;
}
