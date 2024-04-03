let homePage = document.getElementById("homePage"),
  loginPage = document.getElementById("loginPage"),
  movieDetailsPage = document.getElementById("movieDetails"),
  username = document.getElementById("email"),
  password = document.getElementById("password"),
  loginForm = document.getElementById("loginForm"),
  logoutBtn = document.querySelector(".logout-btn"),
  logo = document.querySelector(".logo"),
  searchForm = document.querySelector(".search-form"),
  searchInput = document.getElementById("search");

const onLoginHandler = (event) => {
  event.preventDefault();
  const userName = username.value.trim();
  const userPassword = password.value.trim();
  debugger;
  if (userName !== "" && userPassword !== "") {
    localStorage.setItem("isLogged", "true");
    localStorage.setItem("userName", userName);
    location.hash = "#home";
  }
};

const onLogoutHandler = () => {
  localStorage.clear();
  location.hash = "#login";
};

loginForm.addEventListener("submit", onLoginHandler);
logoutBtn.addEventListener("click", onLogoutHandler);

const createMovieCard = (movieObj) => `<div class="movie" id=${movieObj.id}>
    <img src=${movieObj.image} />
    <h2>${movieObj.title}</h2>
    <p>${movieObj.genre.join(", ")}</p>
    <p>${movieObj.year}</p>
    </div>`;

const checkMovieDetails = (event) => {
  let movieId = +event.target.getAttribute("id");
  if (movieId === undefined || movieId === 0) {
    movieId = +event.target.parentNode.getAttribute("id");
  }

  location.hash = `#moviedetails/${movieId}`;
};

const getMovieDetails = (id) => {
  const movieElement = movieList.find((el) => el.id === id);
  movieDetailsPage.innerHTML = "";
  movieDetailsPage.innerHTML = createMovieCard(movieElement);
  document.getElementById("search").value = "";
};

const renderMovies = (parentNode, movieInput) => {
  parentNode.innerHTML = "";
  location.hash = "#home";
  if (movieInput.length === 0) {
    parentNode.innerHTML = `<h2>No data found</h2>`;
  }
  movieInput.forEach((movie) => {
    parentNode.innerHTML += createMovieCard(movie);
  });

  setTimeout(() => {
    const allMovies = document.querySelectorAll(".movie");
    allMovies.forEach((el) => el.addEventListener("click", checkMovieDetails));
  }, 500);
};

const moviePage = () => renderMovies(homePage, movieList);

const onSearchHandler = () => {
  const searchValue = searchInput.value.trim();

  const filteredMovies = movieList.filter(
    (el) =>
      el.title.toLowerCase().includes(searchValue) ||
      el.year === parseInt(searchValue) ||
      el.genre.join(", ").toLowerCase().includes(searchValue)
  );
  renderMovies(homePage, filteredMovies);
};

const onRouteChange = () => {
  let hash = location.hash; // ""
  let movieId;

  const isLogged = localStorage.getItem("isLogged");
  if (!isLogged) {
    hash = "#login";
  }

  const isDetailsPage = hash.includes("#moviedetails");
  if (isDetailsPage) {
    hash = "#moviedetails";
    movieId = +location.hash.split("/")[1];
  }
  console.log("I'm on route:", hash);

  switch (hash) {
    case "#home":
      loginPage.style.display = "none";
      homePage.style.display = "block";
      movieDetailsPage.style.display = "none";
      logoutBtn.style.display = "block";
      searchForm.style.display = "block";
      moviePage();
      break;

    case "#login":
      loginPage.style.display = "block";
      homePage.style.display = "none";
      movieDetailsPage.style.display = "none";
      logoutBtn.style.display = "none";
      searchForm.style.display = "none";
      break;

    case "#moviedetails":
      loginPage.style.display = "none";
      homePage.style.display = "none";
      movieDetailsPage.style.display = "block";
      logoutBtn.style.display = "block";
      searchForm.style.display = "none";
      getMovieDetails(movieId);
      break;
    default:
      location.hash = "#home";
      break;
  }
};

window.addEventListener("hashchange", onRouteChange);
window.addEventListener("load", onRouteChange);
searchInput.addEventListener("keyup", onSearchHandler);
if (logo !== undefined) {
  logo.addEventListener("click", moviePage);
}
