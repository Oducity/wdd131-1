const visitNum = document.getElementById("visit-times");
const text = document.getElementById("visit-text");

//const generatedVisit = window.localStorage.getItem();
let numberOfVisit = window.localStorage.getItem("visit");

if (numOfVisit === null) {
    numberOfVisit = 1;
} else {
    numberOfVisit = parseInt(numberOfVisit, 10);
}

visitNum.innerText = numberOfVisit;

text.innerText = "The number of times you have visited is ";
window.localStorage.setItem(toString(numberOfVisit));