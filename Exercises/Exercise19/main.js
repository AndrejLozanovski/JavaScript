const numbers = document.querySelector(".numbers");
const negative = document.querySelector(".negative");
const positive = document.querySelector(".positive");
const negativeToPositive = document.querySelector(".negativeToPositive");
const positiveOnNegative = document.querySelector(".positiveOnNegative");
const final = document.querySelector(".final");

// step 1
const arr = [4, 1, -10, 6, 8, -3, 9, 12];
numbers.innerHTML = `Array numbers: ${arr}`;
// step 2 - filter negative numbers
const negativeNumberArray = arr.filter((el) => el < 0);
negative.innerHTML = `Negative numbers: ${negativeNumberArray}`;

// step 3 - convert negative(from negative array) to positive
const convertedToPositive = negativeNumberArray.map((el) => Math.abs(el));
negativeToPositive.innerHTML = `Negative numbers converted to positive: ${convertedToPositive}`;

// step 4 - positive number from first array
const positiveArrayNumbers = arr.filter((el) => el > 0);
positive.innerHTML = `Positive numbers: ${positiveArrayNumbers}`;

// step 5 - na negativniot array, dodaj gi na kraj site pozitivni
convertedToPositive.forEach((el) => positiveArrayNumbers.push(el));
positiveOnNegative.innerHTML = `Positive numbers to the negative array: ${positiveArrayNumbers}`;

// da se konvertira se vo positive, (dopolnitelen primer, kako da napravime konverzija na site broevi vo pozitivni
// pritoa da go zapazime redosledot)
const finalSolution = arr.map((el) => Math.abs(el));
final.innerHTML = `Convert the array to positive: ${finalSolution}`;
