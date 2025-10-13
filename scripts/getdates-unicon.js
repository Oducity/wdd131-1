const date = new Date();
let currentYear = date.getFullYear();
let text = currentYear.toString();
document.getElementById("currentyear").textContent = text;

let lastModify = date.document.lastModified;
let lastModifyString = "Last Updated:" + " " + lastModify.toString();
document.getElementById("lastModified").textContent = lastModifyString;