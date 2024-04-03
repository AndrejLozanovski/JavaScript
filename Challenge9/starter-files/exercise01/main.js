const userName = prompt("Enter your Name");
const userAge = +prompt("Enter your age");
const adultAge = 18;

const createDOMElement = (domElement, userName, isAdult) => {
  const createElement = document.createElement(domElement);
  const message = `I am ${userName} and I ${isAdult ? `am` : `am not`} an adult ${
    isAdult ? `` : `yet`
  }`;
  createElement.innerText = message;

  return createElement;
};

const checkAge = (userNameInput, userAgeInput, adultAgeInput, createDomFunction) => {
  const parentNode = document.getElementById("adult");
  let domElement;
  if (userAgeInput >= adultAgeInput) {
    domElement = createDomFunction("p", userNameInput, true);
  } else {
    domElement = createDomFunction("p", userNameInput, false);
  }

  parentNode.appendChild(domElement);
};

checkAge(userName, userAge, adultAge, createDOMElement);
