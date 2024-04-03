// From the given 3 numbers find the smallest and largest and check if they are prime numbers
const title = document.querySelector(".title");
const numbers = document.querySelector(".numbers");
const smallest = document.querySelector(".smallest");
const largest = document.querySelector(".largest");
const result = document.querySelector(".print");

title.innerHTML = "Exercise03";

// declaring 3 variables with numbers
const num1 = 13;
const num2 = 15;
const num3 = 20;

numbers.innerHTML += `Numbers: <br> ${num1} <br> ${num2} <br> ${num3}`;

// check who is the smallest number out of the 3 numbers
if (num1 < num2 && num1 < num3) {
  smallestNumber = num1;
} else if (num2 < num1 && num2 < num3) {
  smallestNumber = num2;
} else {
  smallestNumber = num3;
}

// check who is the largest number out of the 3 numbers
if (num1 > num2 && num1 > num3) {
  largestNumber = num1;
} else if (num2 > num1 && num2 > num3) {
  largestNumber = num2;
} else {
  largestNumber = num3;
}

// function to check if the smallest and the largest number are prime
function checkPrime() {
  let isPrime = true;
  if (smallestNumber > 1) {
    for (let i = 2; i < smallestNumber; i++) {
      if (smallestNumber % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      smallest.innerHTML = `The smallest number ${smallestNumber} is prime`;
    } else {
      smallest.innerHTML = `The smallest number ${smallestNumber} is not prime`;
    }
  }

  if (largestNumber > 1) {
    for (let i = 2; i < largestNumber; i++) {
      if (largestNumber % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      largest.innerHTML = `The largest number ${largestNumber} is prime`;
    } else {
      largest.innerHTML = `The largest number ${largestNumber} is not prime`;
    }
  }
}

// print out the smallest and the largest and if they are prime or not
result.innerHTML = `Smallest - ${smallestNumber} , Largest - ${largestNumber}`;
console.log(checkPrime());
