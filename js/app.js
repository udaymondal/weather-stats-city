const API_KEY = `7498e88355849773e35ba1e7d3412a9a`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("city-temp-deg", temperature.main.temp);
  setInnerText("temp-condition", temperature.weather[0].description);

  // set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  console.log(url);
  //   imgIcon.src = url;
  imgIcon.setAttribute("src", url);
};
