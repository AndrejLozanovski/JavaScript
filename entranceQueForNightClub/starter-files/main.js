// Exercise 1 - Create classes "Que" and "Guest"

const minAge = 14;
const maxAge = 50;
class Que {
  static counter = 0;

  constructor() {
    Que.counter++;
    this.name = `Que ${Que.counter}`;
    this.age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  }

  isAdult() {
    return this.age >= 18;
  }
}

let queList = [];

class Guest {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
}

let guestList = [];

// Exercise 2 - Function that will create instance object from "Que" class and add row into queList table on click on "Add to que" button

// selectors
const addToQueBtn = document.getElementById("addToQue");
const queListTable = document.querySelector("#queList tbody");
const guestListTable = document.querySelector("#guestList tbody");

// function to create dom elements
const createDOMElement = (elementType) => {
  const createElement = document.createElement(elementType);
  return createElement;
};

let acceptedPersonCounter = 0; // counter of accepted persons for the guest list table

// Function that adds to que table
const addToQueHandler = () => {
  const que = new Que(); // instance object

  // create table row and cells
  const trQue = createDOMElement("tr");
  const tdNameQue = createDOMElement("td");
  const tdAgeQue = createDOMElement("td");
  const tdActionQue = createDOMElement("td");

  // give the value of the object name and age to the cell
  tdNameQue.innerText = que.name;
  tdAgeQue.innerText = que.age;

  // declaring accept and decline buttons
  const acceptBtn = createDOMElement("button");
  const declineBtn = createDOMElement("button");

  // if the person is above 18 years create an accept button, if not no
  if (que.isAdult()) {
    acceptBtn.setAttribute("class", "btn btn-sm btn-outline-success");
  } else {
    acceptBtn.style.display = "none";
  }

  declineBtn.setAttribute("class", "btn btn-sm btn-outline-danger mr-1");

  acceptBtn.innerText = "Accept";
  declineBtn.innerText = "Decline";

  trQue.appendChild(tdNameQue);
  trQue.appendChild(tdAgeQue);
  trQue.appendChild(tdActionQue);
  tdActionQue.append(declineBtn, acceptBtn);
  queListTable.appendChild(trQue);

  queList.push(que);

  // Exercise 3 - EventListeners on "Accept" and "Decline" buttons

  // function when clicking on the accept button
  const onAcceptHandler = () => {
    // accept only 15 people in the guest list, if its full show an alert message
    if (acceptedPersonCounter >= 15) {
      alert("Sorry we are full, come back another night");
      return;
    }

    acceptedPersonCounter++;

    // store the value from que name and age into variables
    const queTableName = tdNameQue.innerText;
    const queTableAge = tdAgeQue.innerText;

    const guest = new Guest(queTableName, queTableAge); // instance object

    // create table row and cells
    const trGuest = createDOMElement("tr");
    const tdNameGuest = createDOMElement("td");
    const tdAgeGuest = createDOMElement("td");
    const tdActionGuest = createDOMElement("td");

    // give the value of the object name and age to the cell
    tdNameGuest.innerText = guest.name;
    tdAgeGuest.innerText = guest.age;

    // create edit button
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-sm btn-outline-info");
    editBtn.innerText = "Edit";

    // remove the Que row after accepting
    trQue.remove();

    trGuest.appendChild(tdNameGuest);
    trGuest.appendChild(tdAgeGuest);
    trGuest.appendChild(tdActionGuest);
    tdActionGuest.append(editBtn);
    guestListTable.appendChild(trGuest);
    guestList.push(guest);

    // Exercise 4 and 5 - When clicking on edit button in Guest list add input and change the edit button to save button and also save the edited value
    let editingMode = true; // flag

    // function when clicking on edit button
    const onEditHandler = () => {
      // if its in editing mode
      if (editingMode) {
        // create input element
        const inputElement = createDOMElement("input");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("class", "form-control-sm, form-control");

        inputElement.value = tdNameGuest.innerText; // let the input element have the value from the name cell in the guest list table
        tdNameGuest.innerText = ""; // clear the current name

        tdNameGuest.appendChild(inputElement); // add the input field

        editBtn.innerText = "Save"; // change the name of the edit to save
        editingMode = false; // set the flag to false to procceed in the else statement
      } else {
        const inputElement = tdNameGuest.querySelector("input"); // select the input

        let newName = inputElement.value; // store the input element value in a variable
        guest.name = newName; // add the new value to the guest object name
        tdNameGuest.innerText = newName; // update tdNameGuest with the new name

        inputElement.remove(); // remove the input field when clicking save

        editBtn.innerText = "Edit"; // change the name of save to edit
        editingMode = true; // set flag to true and finish the if else statement
      }
    };
    // event listener on edit button
    editBtn.addEventListener("click", onEditHandler);
  };

  // function when clicking on decline button
  const onDeclineHandler = () => {
    trQue.remove(); // removes the row
  };

  // event listeners on accept and decline button
  acceptBtn.addEventListener("click", onAcceptHandler);
  declineBtn.addEventListener("click", onDeclineHandler);
};

addToQueBtn.addEventListener("click", addToQueHandler); // event listener on add to que button
