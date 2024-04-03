const getData = async (city, days) =>
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=${days}&APPID=c10bb3bd22f90d636baa008b1529ee25`
  );

const createTableRow = (data) => `<tr>
<th><img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'></th>
<th>${data.weather[0].main}</th>
<th>${data.weather[0].description}</th>
<th>${data.temp.morn}</th>
<th>${data.temp.night}</th>
<th>${data.temp.min}</th>
<th>${data.temp.max}</th>
<th>${data.pressure}</th>
<th>${data.humidity}</th>
<th>${data.speed}</th>
<th>${new Date().toLocaleString()}</th>
</tr>`;

const captureError = (data, errorNode) => {
  errorNode.innerHTML = "";
  if (data.cod !== "200" && data.message.length > 0) {
    errorNode.innerHTML += `<h2>error code:${data.message}</h2>`;
    return;
  }
};

const renderForecastData = (data) => {
  const forecastNode = document.getElementById("forecastWeather");
  forecastNode.innerHTML = "";
  captureError(data, forecastNode);
  data.list.forEach((el) => (forecastNode.innerHTML += createTableRow(el)));
};

const catchError = (err) => {
  const forecastNode = document.getElementById("forecastWeather");
  forecastNode.innerHTML = "";
  forecastNode.innerHTML += `<h1>${err}</h1>`;
};

const getForecast = () => {
  const cityValue = document.getElementById("city").value.trim().toLowerCase();
  const daysValue = document.getElementById("days").value.trim().toLowerCase();
  console.log(cityValue, daysValue);

  getData(cityValue, daysValue)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderForecastData(data);
      return data;
    })
    .catch((err) => catchError(err));
};

const forecastBtn = document.getElementById("submitForecast");
forecastBtn.addEventListener("click", getForecast);
