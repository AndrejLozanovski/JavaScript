const error = document.querySelector(".error");
const userNumber = prompt("Please enter number between 1 and 5!");

if (isNaN(userNumber)) {
  error.innerHTML = "please enter valid number format!";
} else {
  const minValue = 1;
  const maxValue = 5;
  if (+userNumber >= minValue && +userNumber <= maxValue) {
    const foundElement = document.getElementById(userNumber);
    foundElement.style.display = "none";
  } else {
    const paragraph = document.createElement("p");
    paragraph.innerText = `Please input a number between ${minValue} and ${maxValue}. Your number is: ${userNumber}`;
    document.body.appendChild(paragraph);
  }
}
