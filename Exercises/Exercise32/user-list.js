const getImages = (pageNum) => fetch(`https://reqres.in/api/users?page=${pageNum}`);

const createTableRow = (data) => `<tr>
    <th>${data.id}</th>
    <th>${data.first_name}</th>
    <th>${data.last_name}</th>
    <th><img src="${data.avatar}"</th>
</tr>`;

const paginationPage = (event) => {
  console.log("pagination...");
  const pageNum = event.target.id;
  getImages(pageNum)
    .then((res) => res.json())
    .then((data) => createImage(data))
    .catch((err) => console.log(err));
};

const createImage = (res) => {
  const pages = res.total_pages;

  const paginationSection = document.querySelector(".pagination");
  paginationSection.innerHTML = "";
  for (let i = 0; i < pages; i++) {
    paginationSection.innerHTML += `<span id=${i + 1} style="margin-right:5px">${i + 1}</span>`;
  }

  const tblNode = document.querySelector("table");
  tblNode.innerHTML = "";
  res.data.forEach((el) => (tblNode.innerHTML += createTableRow(el)));
  const spans = document.querySelectorAll(".pagination span");
  spans.forEach((el) => el.addEventListener("click", paginationPage));
};

const checkErrorResponse = (data) => {
  const tblNode = document.querySelector("table");
  if (data.data == undefined) {
    tblNode.innerHTML = "";
    tblNode.innerHTML = "<h2>No data found</h2>";
    return;
  } else {
    createImage(data);
  }
  return data;
};

const loadData = () => {
  getImages()
    .then((data) => data.json())
    .then((res) => {
      console.log(res);

      checkErrorResponse(res);
    })
    .catch((err) => console.log(err));
};

window.addEventListener("load", loadData);
