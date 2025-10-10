





//Get the roofing sheets input
const roofInput = document.querySelector("#roof-sheets");
const roofStr = roofInput.value;


//Get the cladding sheets input
const claddingInput = document.querySelector("#cladding-sheets");
const claddingStr = claddingInput.value;

//Get the ceiling sheets input
const ceilingInput = document.querySelector("#ceiling-sheets");
const ceilingStr = ceilingInput.value;

//====================================================================================

//Get the ridge input
const ridgeLInput = document.querySelector("#ridges");
const ridgeLength = ridgeInput.value;
const ridgeWInput = document.querySelector("#ridge-width");
const ridgeWidth = ridgeWInput.value;

//Get the top-trimmers input
const topTrimmerInput = document.querySelector("#top-trimmer-length");
const topTrimmerLength = topTrimmerInput.value;
const topTrimmerwidthInput = document.querySelector("#top-trimmers-width");
const topTrimmerWidth = topTrimmerwidthInput.value;

//Get the Badge-board input
const bBInput = document.querySelector("#badge-board-length");
const bBlength = bBInput.value;
const bBWidthInput = document.querySelector("#badge-board-width");
const bBWidth = bBWidthInput.value;

//Get the gutter trimmers input
const gTrimmersInput = document.querySelector("#gutter-trimmers");
const gutterTrimmerLength = gTrimmersInput.value;
const gTrimmerWidthInput = document.querySelector("#gutter-trimmers-width");
const gutterTrimmerWidth = gTrimmerWidthInput.value;

//Get the bottom-trimmers input
const bottomTrimmersInput = document.querySelector("#bottom-trimmers");
const bottomTL = bottomTrimmersInput.value;
const bottomTrimmerW = document.querySelector("#bottom-trimmers-width");
const bottomTW = bottomTrimmerW.value;

//Get the wall-trimmers input
const wTInput = document.querySelector("#wall-trimmers");
const wTLength = wTInput.value;
const wTWidthInput = document.querySelector("#wall-trimmers-width");
const wTWidth = wTWidthInput.value;

//Get the gutter input
const gutterInput = document.querySelector("#gutters");
const gutterLength = gutterInput.value;
const gutterWidthInput = document.querySelector("#gutter-width");
const gutterWidth = gutterWidthInput.value;

//====================================================================================

//Get the input button and asign it to variable button
const button = document.getElementsByName("button");

//Put all trimmers value into trimmers array.
const trimmers = [
    {
        nameOfItem: ridgeLInput.name,
        lengthOfItem: ridgeLength,
        widthOfItem : ridgeWidth
    },
    {
        nameOfItem: topTrimmerInput.name,
        lengthOfItem: topTrimmerLength,
        widthOfItem: topTrimmerWidth
    },
    {
        nameOfItem: bBInput.name,
        lengthOfItem: bBlength,
        widthOfItem: bBWidth
    },
    {
        nameOfItem: gTrimmersInput.name,
        lengthOfItem: gutterTrimmerLength,
        widthOfItem: gutterTrimmerWidth
    },
    {
        nameOfItem: bottomTrimmersInput.name,
        lengthOfItem: bottomTL,
        widthOfItem: bottomTW
    },
    {
        nameOfItem: wTInput.name,
        lengthOfItem: wTLength,
        widthOfItem: wTWidth
    },
    {
        nameOfItem: gutterInput.name,
        lengthOfItem: gutterLength,
        widthOfItem: gutterWidth
    }
]



let roofList = roofStr.split(",");
let claddingList = claddingStr.split(",");
let ceilingList = ceilingStr.split(",");





function calculateTrimmers(allTrimmers) {
    document.querySelector(".result-box").innerHTML = ""; //Empty the result section in the aluminum-calculator.html.
    const resultBox = document.querySelector(".result-box"); // Store the empty result section in the variable resultBox.
    const resultHeading = document.createElement("h2"); // Create h2 element.
    resultHeading.innerText = "Your Result" // Write text into the h2 element.

    let resultP = document.createElement("p"); // Create paragraph element.
    resultP.innerHTML = "Below is the calculated aluminum roof materials needed to complete the roof according to the information you provided."; //Write text to the p element.


    let flatSheet = 0; // Initialize the total meters of flat sheet for all trimmers to zero.
    const adjustment = (flatSheet / 100) * 7; //Frabrication error adjustment (7 percent).
    let listOfTrimmers = []; //Place all trimmers and individual subtotal meter in listOfTrimmers array.
    let totalFlatSheet = flatSheet + adjustment; //Add frabrication error adjustment to the total flat sheet.


    allTrimmers.forEach(trimmer => {
        let nameOfTrimmer = trimmer.nameOfItem; // Set the name of each trimmer in iteration to nameOfTrimmers.
        let length = parseFloat(trimmer.lengthOfItem); //Convert lengthOfItem in iteration to float and store it in length.
        let width = parseFloat(trimmer.widthOfItem); //Convert widthOfItem in iteration to float and store it in width.

        let trimmerTotal = (length * width) / 1.2; //Compute total length of each type of trimmer. 
        flatSheet += trimmerTotal; //Update total flat sheet.
        let trimmerValue = `${nameOfTrimmer}: ${trimmerTotal}`; // Concatinate the name af trimmer and its total meter and store in a variable.
        listOfTrimmers.push(trimmerValue); //Update the listOfTrimmers array.

    });
}