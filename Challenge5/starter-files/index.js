// 1) Declare array of objects
const booksData = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    maxPages: 200,
    onPage: 60,
  },

  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    maxPages: 250,
    onPage: 150,
  },

  {
    title: "50 Shades of Grey",
    author: "E.L. James",
    maxPages: 150,
    onPage: 150,
  },

  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 350,
    onPage: 300,
  },

  {
    title: "Hamlet",
    author: "William Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
];

// Create DOM element
const createDOMElement = (elementType, elementContent, elementColor) => {
  const createElement = document.createElement(elementType);
  createElement.innerText = elementContent;
  createElement.style.color = elementColor;

  return createElement;
};

// 2) Make a list with the book title and book author
const uList = document.getElementById("list");
const listBooks = booksData.map((el) => {
  const listElement = createDOMElement("li");
  listElement.innerText = `${el.title} by ${el.author}`;
  uList.appendChild(listElement);
});

// Make space between the two lists
const spaceElement = createDOMElement("br");
uList.appendChild(spaceElement);

// 3) Check if the book is read or not
booksData.forEach((el) => {
  if (el.maxPages === el.onPage) {
    const listElement = createDOMElement(
      "li",
      `You already read "${el.title}" by ${el.author}`,
      "green"
    );
    uList.appendChild(listElement);
  } else {
    const listElement = createDOMElement(
      "li",
      `You still need to read "${el.title}" by ${el.author}`,
      "red"
    );
    uList.appendChild(listElement);
  }
});

// Calculate progress of reading in percentage
const calcPercentage = (bookObject) =>
  Math.floor((bookObject.onPage / bookObject.maxPages) * 100) + "%";

// 4) Make and populate table with the books data
const table = document.getElementById("table");

const createTable = () => {
  let table = `<table class="table table-bordered">
<thead>
  <tr>
    <th scope="col">Title</th>
    <th scope="col">Author</th>
    <th scope="col">Max Pages</th>
    <th scope="col">On Page</th>
    <th scope="col">Progress</th>
  </tr>
</thead>
<tbody>`;

  booksData.forEach((el) => {
    table += `<tr>
  <td>${el.title}</td>
  <td>${el.author}</td>
  <td>${el.maxPages}</td>
  <td>${el.onPage}</td>
  <td>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: ${calcPercentage(el)}" 
        aria-valuenow="${calcPercentage(el)}"
        aria-valuemin="0" aria-valuemax="100">${calcPercentage(el)}</div>
    </div>
  </td>
</tr>`;
  });

  table += `
      </tbody>
    </table>
  `;

  return table;
};

// Add the table to the HTML
table.innerHTML = createTable();

// 5) Form for adding new object
const form = document.getElementById("form");
const formHeading = createDOMElement("h4", "Add a book to the list:");
form.appendChild(formHeading);

const createForm = () => {
  const titleId = "title";
  const authorId = "author";
  const onPageId = "onPage";
  const maxPagesId = "maxPages";
  let form = `
<form>
  <div class="container-fluid">
    <div class="form-row">
      <div class="col-2">
      <input type="text" class="form-control" id="${titleId}" placeholder="Book Title">
      </div>
      <div class="col-2">
      <input type="text" class="form-control" id="${authorId}" placeholder="Book Author">
      </div>
      <div class="col-2">
      <input type="text" class="form-control" id="${onPageId}" placeholder="Current Page On...">
      </div>
      <div class="col-2">
      <input type="text" class="form-control" id="${maxPagesId}" placeholder="Book Max Pages">
      </div>
      <button type="submit" class="btn btn-primary">Add To List</button>
    </div>
  </div>
</form>`;
  return form;
};

// Add the form to the html
form.innerHTML += createForm();

const btnSubmit = document.querySelector(".btn");

// Function to reset values of inputs
const resetInputValue = (inputElement) => (inputElement.value = "");

const onClickHandler = (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const onPageInput = document.getElementById("onPage");
  const maxPagesInput = document.getElementById("maxPages");

  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const onPageValue = onPageInput.value;
  const maxPagesValue = maxPagesInput.value;

  const newBookData = {
    title: titleValue,
    author: authorValue,
    onPage: onPageValue,
    maxPages: maxPagesValue,
  };

  booksData.push(newBookData);
  table.innerHTML = createTable();

  resetInputValue(titleInput);
  resetInputValue(authorInput);
  resetInputValue(onPageInput);
  resetInputValue(maxPagesInput);
};

btnSubmit.addEventListener("click", onClickHandler);
