const array1 = document.querySelector(".arr1");
const array2 = document.querySelector(".arr2");

const arr1 = [1, 4, 5, -5, -7, 6, 2];
const arr2 = [8, 3, -12, 14, 5, 9];

const arrProduct = (inputArr) => {
  let product = 1;
  const len = inputArr.length;
  for (i = 0; i < len; i++) {
    if (inputArr[i] > 0) {
      product *= inputArr[i];
    }
  }
  return product;
};

const result = arrProduct(arr1);
const result2 = arrProduct(arr2);
array1.innerHTML = `First Array: ${arr1} <br> Product result of positive numbers in the first array: ${result}`;
array2.innerHTML = `Second array: ${arr2} <br> Product result of positive numbers in the second array: ${result2}`;
