const numbers = document.querySelector(".numbers");
const result = document.querySelector(".result");

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const checkNumbers = (inputArray) => {
  const inputLength = inputArray.length;
  const evenOddArr = [];
  for (i = 0; i < inputLength; i++) {
    // if (inputArray[i] % 2 === 0) {
    //   evenOddArr.push("even");
    // } else {
    //   evenOddArr.push("odd");
    // }

    // Ternary operator shorthand
    inputArray[i] % 2 === 0 ? evenOddArr.push("even") : evenOddArr.push("odd");
  }
  return evenOddArr;
};

const resultArray = checkNumbers(arr1);
numbers.innerHTML = `Numbers: ${arr1}`;
result.innerHTML = `Even or odd number: ${resultArray}`;
