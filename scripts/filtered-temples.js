const date = new Date();
let currentYear = date.getFullYear();
let text = currentYear.toString();
document.getElementById("currentyear").innerHTML = text;

let lastModify = new Date(document.lastModified);
let lastModifyString = "Last Updated:" + " " + lastModify.toString();
document.getElementById("lastModified").innerHTML = lastModifyString;


const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("nav--display");
  hamburger.classList.toggle("hamburger-quit");
});