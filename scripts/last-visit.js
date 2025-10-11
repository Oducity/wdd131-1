const visitBox = document.getElementById("visit-times");

//const generatedVisit = window.localStorage.getItem();
let numberOfVisit = localStorage.getItem("visit");

if (numOfVisit === null) {
    numberOfVisit = 1;
} else {
    numberOfVisit = parseInt(numberOfVisit, 10);
}

visitBox.innerText = numberOfVisit;
localStorage.setItem(toString(numberOfVisit));