const firstInput = +prompt("Please enter first number: ");
const error = document.querySelector(".error");

let secondInput = 0;

if (isNaN(firstInput)) {
  error.innerHTML = "Please enter valid number format!";
} else {
  const secondInput = +prompt("Please enter second number: ");
  if (isNaN(secondInput)) {
    error.innerHTML = "Please enter valid number format!";
  } else {
    const divElement = document.querySelector("#first");
    const paragraph = document.createElement("p");

    if (+firstInput > +secondInput) {
      paragraph.innerText = `The smaller of ${firstInput} and ${secondInput} is ${secondInput}`;
    } else if (+firstInput < +secondInput) {
      paragraph.innerText = `The smaller of ${firstInput} and ${secondInput} is ${firstInput}`;
    } else {
      paragraph.innerText = `Numbers ${firstInput} and ${secondInput} are equal`;
    }

    divElement.appendChild(paragraph);
  }
}
