const toggleBtn = document.getElementById("toggler");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const li = document.querySelectorAll("li");
const trashBtn = document.querySelectorAll(".fa-trash");

const onToggleHandler = () => input.classList.toggle("hideInput");

const onKeyupHandler = (event) => {
  const btnKey = event.keyCode;
  if (btnKey === 13 && input.value.trim().length > 0) {
    let inputVal = input.value;
    list.innerHTML += `<li class="el">
                                 <span class="trash"><i class="fa fa-trash"></i></span> ${inputVal}
                                </li>`;
    input.value = "";
  }
};

toggleBtn.addEventListener("click", onToggleHandler);
input.addEventListener("keyup", onKeyupHandler);

const onClickDocumentHandler = (event) => {
  // set to complete
  if (event.target.classList.contains("el")) {
    event.target.classList.toggle("completed");
  }
  // delete element(DOM)
  if (event.target.classList.contains("trash")) {
    event.target.parentElement.remove();
  }
};

document.addEventListener("click", onClickDocumentHandler);
