const date = new Date();
let currentYear = date.getFullYear();
let text = currentYear.toString();
document.getElementById("currentyear").innerHTML = text;

let lastModify = new Date(document.lastModified);
let lastModifyString = "Last Updated:" + " " + lastModify.toString();
document.getElementById("lastModified").innerHTML = lastModifyString;

let countryArea = "  923,768 square km";
const capitalCity = "  Abuja";
const language = "  English";
let population = "  232.7 million";
const timeZone = "  UTC+01:00";
const currency = "  Nigeria Naira (#)";
const callCode = "  +234";
const internet = "  4G/5G";

document.getElementById("area-value").innerText = countryArea;
document.getElementById("capital-city-value").innerText = capitalCity;
document.getElementById("language-value").innerText = language;
document.getElementById("population-value").innerText = population;
document.getElementById("time-zone-value").innerText = timeZone;
document.getElementById("currency-value").innerText = currency;
document.getElementById("call-code-value").innerText = callCode;
document.getElementById("internet-value").innerText = internet;


const temperature = 45;
const velocity = 4;
let temperatureElement;
let velocityElement;
let condition;
let windChill;


if (temperature <= 50 && velocity > 3) {
    windChill = calculateWindChill(temperature, velocity);    
}


document.getElementById("temperature-value").innerText = temperatureElement + " " + "deg fahrenheit";
document.getElementById("w-condition-value").innerText = condition;
document.getElementById("w-speed-value").innerText = velocityElement + " "+ "miles";
document.getElementById("w-chill-value").innerText = windChill;

function calculateWindChill(temp, v) {
    temperatureElement = temp;
    velocityElement = v;
    let value = 35.74 + 0.6215 * temp - 35.75 * (v ** 0.16) + 0.4275 * temp * (v ** 0.16);

    if (temp >= 86) {
        condition = " Hot";
    } else if (temp >= 65 && temp <= 77) {
        condition = " Fair";
    } else
        condition = " Snow or cloudy";
    return value.toFixed(2);
}