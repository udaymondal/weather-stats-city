const API_KEY = `7498e88355849773e35ba1e7d3412a9a`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id,text) => {
	document.getElementById(id).innerText = text;
}

const displayTemperature = (temperature) => {
	setInnerText('city',temperature.name);
	setInnerText('city-temp-deg',temperature.main.temp);
  
	console.log(temperature);

};
