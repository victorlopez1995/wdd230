const temperature = document.querySelector('#temperature');
const wind = document.querySelector('#wind');
let chill = document.querySelector('#chill');

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