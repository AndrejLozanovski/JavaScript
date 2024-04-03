const keyboardChars = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "BACKSPACE",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "SPACE",
];
const keyboard = document.querySelector(".keyboard");
const typeArea = document.querySelector("#typeArea");

const onClickHandler = (event) => {
  const character = event.target.innerText;

  if (character === "SPACE") {
    typeArea.innerHTML += "&nbsp;";
  } else if (character === "ENTER") {
    typeArea.innerHTML += "<br>";
  } else if (character === "BACKSPACE") {
    const lastChar = typeArea.innerHTML.slice(-6);
    if (lastChar === "&nbsp;") {
      typeArea.innerHTML = typeArea.innerHTML.slice(0, -6);
    } else {
      typeArea.innerHTML = typeArea.innerHTML.slice(0, -1);
    }
  } else {
    typeArea.innerHTML += character.toLowerCase();
  }
};

const createButton = (character) => {
  const createElement = document.createElement("button");

  createElement.addEventListener("click", onClickHandler);
  createElement.innerText = character;
  createElement.style.margin = "5px";

  return createElement;
};

keyboardChars.forEach((el, key) => {
  keyboard.appendChild(createButton(el));

  if (key === 10 || key === 20 || key === 27) {
    keyboard.appendChild(document.createElement("br"));
  }
});
