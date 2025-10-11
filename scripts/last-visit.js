const visitBox = document.getElementById("visit-times");

let numOfVisit = Number(window.localStorage.getItem("numOfVisit-Is")) || 0;

if (numOfVisit !== 0) {
    visitBox.innerText = numOfVisit;
} else {
    visitBox.innerText = "Welcome, Enjoy your first visit.";
};

numOfVisit++;

window.localStorage.setItem("numberOfVisit-Is", numOfVisit);