// За допомогою ajax-запиту вивести погоду
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
// q=XXX - місто, для якого показати погоду
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки
// http://openweathermap.org/img/w/10d.png

const weatherInfoElement = document.querySelector('.weatherInfo');
document.addEventListener('DOMContentLoaded', function () {
  const city = 'Lviv';
  const apiKey = '5d066958a60d315387d9492393935c19';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  getWeather(apiUrl)
    .then(weatherData => {
      displayWeather(weatherData);
    })
    .catch(error => {
      console.error('Error getting weather:', error);
    });
});

function getWeather(apiUrl) {
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to get weather data');
      }
      return response.json();
    });
}

function displayWeather(weatherData) {
  const temp = weatherData.main.temp;
  const pressure = weatherData.main.pressure;
  const description = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity;
  const speed = weatherData.wind.speed;
  const deg = weatherData.wind.deg;
  const iconCode = weatherData.weather[0].icon;

  const weatherHtml = `
    <h2>Weather in ${weatherData.name}</h2>
    <p>Temperature: ${temp} °C</p>
    <p>Pressure: ${pressure} hPa</p>
    <p>Description: ${description}</p>
    <p>Humidity: ${humidity} %</p>
    <p>Wind Speed: ${speed} m/s</p>
    <p>Wind Direction: ${deg} °</p>
    <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="Weather Icon">
  `;

  weatherInfoElement.innerHTML = weatherHtml;
}
