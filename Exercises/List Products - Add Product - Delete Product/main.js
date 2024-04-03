let list = document.getElementById("list");

products.forEach(function (element) {
  renderCard(element);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("del-btn")) {
    e.preventDefault();
    let postContainer = e.target.parentElement.parentElement.parentElement;
    postContainer.remove();
    products.splice(postContainer.id, 1);

    products.forEach((el, i) => (el.id = i));
  }
});

let addBtn = document.querySelector("#add-product");
let imgInput = document.querySelector("#img");
let titleInput = document.querySelector("#title");
let descInput = document.querySelector("#desc");

addBtn.addEventListener("click", () => {
  if (imgInput.value !== "" && titleInput.value !== "" && descInput.value !== "") {
    let newPostObj = {
      id: products.length,
      img: imgInput.value,
      title: titleInput.value,
      desc: descInput.value,
    };

    products.push(newPostObj);

    renderCard(newPostObj);
  }

  imgInput.value = "";
  titleInput.value = "";
  descInput.value = "";
});

let searchBtn = document.querySelector(".search-btn");
let searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
  let searchInputVal = searchInput.value.toLowerCase();

  let filteredPosts = products.filter((el) => el.title.toLowerCase().includes(searchInputVal));

  list.innerHTML = "";

  filteredPosts.forEach((filteredObj) => {
    renderCard(filteredObj);
  });
});

function renderCard(obj) {
  list.innerHTML += `<div class="col-4 mb-5" id=${obj.id}>
   <a href="google.com" class="link d-flex flex-column">
     <img src="${obj.img}" class="img-fluid">
     <div class="item-content p-3 d-flex flex-column flex-grow-1">
       <h2 class="title">${obj.title}</h2>
       <p class="paragraph">${obj.desc}</p>
       <button class="btn btn-danger del-btn mt-auto align-self-end">Delete</button>
     </div>
   </a>
 </div>`;
}
