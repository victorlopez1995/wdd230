const temperature = document.querySelector('#temperature');
const wind = document.querySelector('#wind');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');
let chill = document.querySelector('#chill');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Chia&appid=b844f9ee9f65570ac4f77eb5731d2c13&units=metric';

// weather data------------------------------------------------------------------------------//

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
    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalize(desc);
    wind.innerHTML = weatherData.wind.speed;
  }

  const capitalize = (str) => {
    let strArr = str.split(" ");
    return strArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}



let xtemp = parseFloat(temperature.textContent);
let y = parseFloat(wind.textContent);

xtemp = (xtemp*(9/5)) +32;
y = y/1.60934;

console.log(xtemp);
console.log(y);
let result = 0;
let resulttext = ""; 
if ((xtemp <= 50) && (y > 3) ){
    result =  35.74 + (0.6215*xtemp) - (35.75*(y**0.16)) + (0.4275*xtemp*(y**0.16)) ;
    chill.innerHTML = `${result.toFixed(1)} F°`;
}else{
    resulttext = "N/A"
    chill.innerHTML = resulttext;
}

// weather data------------------------------------------------------------------------------//

