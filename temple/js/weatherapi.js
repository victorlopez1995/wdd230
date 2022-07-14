// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const currentHum = document.querySelector('#current-hum');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const day1 = document.querySelector('#day-1');
const day2 = document.querySelector('#day-2');
const day3 = document.querySelector('#day-3');
const temp1 = document.querySelector('#temp-1');
const temp2 = document.querySelector('#temp-2');
const temp3 = document.querySelector('#temp-3');

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&appid=b844f9ee9f65570ac4f77eb5731d2c13';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `${(weatherData.current.temp-273).toFixed(0)}`;
    currentHum.innerHTML = `${weatherData.current.humidity.toFixed(0)}`;

    day1.innerHTML = `${(new Date(weatherData.daily[1].dt*1000)).toDateString()}`;
    day2.innerHTML = `${(new Date(weatherData.daily[2].dt*1000)).toDateString()}`;
    day3.innerHTML = `${(new Date(weatherData.daily[3].dt*1000)).toDateString()}`;

    temp1.innerHTML = `${(weatherData.daily[1].temp.day-273).toFixed(0)}`;
    temp2.innerHTML = `${(weatherData.daily[2].temp.day-273).toFixed(0)}`;
    temp3.innerHTML = `${(weatherData.daily[3].temp.day-273).toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalize(desc);
  }

  const capitalize = (str) => {
    let strArr = str.split(" ");
    return strArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(Date.now());