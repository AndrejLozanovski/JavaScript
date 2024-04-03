const digit1 = document.querySelector(".digit1");
const digit2 = document.querySelector(".digit2");
const digit3 = document.querySelector(".digit3");
const digit4 = document.querySelector(".digit4");
const number = document.querySelector(".number");

const numberPrompt = prompt("Enter 4 digit number");

number.innerHTML = `Number: ${numberPrompt}`;

const getEvenDigit = (numberInput) => {
  const lastDigit = numberInput % 10;
  return lastDigit % 2 === 0 ? lastDigit : 0;
};

const truncateNumDividedByTen = (num) => Math.trunc(num / 10);

const getNumbersLength = (numberInput) => numberInput.length;

const writeSumInDOM = (sumInput, domElement) =>
  (document.createElement(domElement).innerText = `The sum is:${sumInput}`);

const calcSum = (numberInput) => {
  const numLen = getNumbersLength(numberInput.trim());
  if (numLen === 4) {
    let numElement = parseInt(numberInput);
    const firstDigit = getEvenDigit(numElement);
    digit1.innerHTML = `First digit: ${firstDigit}`;

    numElement = truncateNumDividedByTen(numElement);
    const secondDigit = getEvenDigit(numElement);
    digit2.innerHTML = `Second digit: ${secondDigit}`;

    numElement = truncateNumDividedByTen(numElement);
    const thirdDigit = getEvenDigit(numElement);
    digit3.innerHTML = `Third digit: ${thirdDigit}`;

    numElement = truncateNumDividedByTen(numElement);
    const fourthDigit = getEvenDigit(numElement);
    digit4.innerHTML = `Fourth digit: ${fourthDigit}`;

    const sumDigits = firstDigit + secondDigit + thirdDigit + fourthDigit;
    document.body.innerHTML += writeSumInDOM(sumDigits, "h1");
  } else {
    alert("please enter a 4 digit number");
  }
};

calcSum(numberPrompt);
