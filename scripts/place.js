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
