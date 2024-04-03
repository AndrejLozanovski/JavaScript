// Check if the given number is even or not even and print it out in the console
const printNumber = document.querySelector(".print");
const error = document.querySelector(".error");
const title = document.querySelector(".title");
// Gets a number from the user and stores it in the variable number
const number = prompt(
  "Please enter a number and I will let you know if the number is even or not even! :)"
);

title.innerHTML = "Exercise01";

// Check if the user entered a valid number then check if the number is even or not
if (isNaN(number)) {
  error.innerHTML = "Please enter a number!";
} else if (number % 2 === 0) {
  printNumber.innerHTML = `The Number ${number} is even!`;
} else {
  printNumber.innerHTML = `The Number ${number} is not even!`;
}
