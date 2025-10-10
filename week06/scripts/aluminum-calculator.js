



let globalTotal = 0;

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
const ridgeInput = document.querySelector("#ridges");
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

button.addEventListener("click", () => {
    ComputeFullRoof();
});

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



const roofList = roofStr.split(",");
const claddingList = claddingStr.split(",");
const ceilingList = ceilingStr.split(",");





function ComputeFullRoof() {
    //document.querySelector(".result-box").innerHTML = ""; //Empty the result section in the aluminum-calculator.html.

    const resultBox = document.querySelector(".result-box"); // Store the empty result section in the variable resultBox.

    const resultHeading = document.createElement("h2"); // Create h2 element.
    resultHeading.innerText = "Your Result" // Write text into the h2 element.
    resultBox.appendChild(resultHeading); //Added h2 element and value to resultBox.

    const resultP = document.createElement("p"); // Create paragraph element.
    resultP.innerText = "Below is the calculated aluminum roof materials needed to complete the roof according to the information you provided."; //Write text to the p element.
    resultBox.appendChild(resultP); //Append p element to resultBox;


    calculateTrimmers(trimmers); //Call the calculateTrimmers() function.
    calculateCorogatedSheets(roofList); //Call the calculateCorogatedSheets() function and pass in the roofList array.
    calculateCorogatedSheets(claddingList); //Call the calculateCorogatedSheets() function and pass in the claddingList array.
    calculateCorogatedSheets(ceilingList); // call the calculateCorogatedSheets() function and pass in the ceilingList array.
    
    const globalTotalP = document.createElement(p); // Create p element for the total meters for both the roof, cladding, ceiling and trimmers.
    globalTotalP.innerHTML = `Total Aluminum Materials : <strong>${globalTotal}</strong>`; // Using string literal, stored the total meters for everything in the globalTotalP variable.
    resultBox.appendChild(globalTotalP);

}



function calculateTrimmers(allTrimmers) {
    const resultBox = document.querySelector(".result-box"); // Store the empty result section in the variable resultBox.

    const fs1 = document.createElement("fieldset");// Create fieldset element.
    const le1 = document.createElement("legend");
    le1.innerText = "Trimmers/Flat Sheet";
    fs1.appendChild(le1);
    
    
    let flatSheet = 0; // Initialize the total meters of flat sheet for all trimmers to zero.
    let listOfTrimmers = []; //Place all trimmers and individual subtotal meter in listOfTrimmers array.
    
    allTrimmers.forEach(trimmer => {
        let nameOfTrimmer = trimmer.nameOfItem; // Set the name of each trimmer in iteration to nameOfTrimmers.
        let length = parseFloat(trimmer.lengthOfItem); //Convert lengthOfItem in iteration to float and store it in length.
        let width = parseFloat(trimmer.widthOfItem); //Convert widthOfItem in iteration to float and store it in width.

        let trimmerTotal = (length * width) / 1.2; //Compute total length of each type of trimmer. 
        flatSheet += trimmerTotal; //Update total flat sheet.
        let trimmerValue = `${nameOfTrimmer}: ${trimmerTotal}`; // Concatinate the name af trimmer and its total meter and store in a variable.
        listOfTrimmers.push(trimmerValue); //Update the listOfTrimmers array.

    });
    const pOfTrimmers = document.createElement(p); //Paragraph for the list of all computed trimmers.
    const pOfTotalMeters = document.createElement(p); //Assign paragraph for the total meters of trimmers.
    const pOfAdjustment = document.createElement(p); // Parahraph for fabrication error adjustment.

    const adjustment = (flatSheet / 100) * 7; //Frabrication error adjustment (7 percent).
    let totalFlatSheet = flatSheet + adjustment; //Add frabrication error adjustment to the total flat sheet.

    pOfTrimmers.innerHTML = `All Trimmers Brakedown: ${listOfTrimmers}`; // Store array listOfTrimmers in paragraph pOfTrimmers.
    pOfTotalMeters.innerHTML = `The Total Meter for All Trimmers: ${totalFlatSheet}`; //Store total meters of all trimmers in the paragraph of pOfTotalTrimmers.
    pOfAdjustment.innerHTML = `Added Meters for Fabrication Error Adjustment: ${adjustment}`; // Store the fabrication error adjustment added value in pOfAdjusment.

    fs1.appendChild(pOfTrimmers); //Append paragraph of array of trimmers to the fieldset.
    fs1.appendChild(pOfAdjustment); //Append paragraph of fabrication error adjustment value to the fieldset.
    fs1.appendChild(pOfTotalMeters); //Append the paragraph of the total meter of all trimmers to the fieldset.

    resultBox.appendChild(fs1);

};




function calculateCorogatedSheets(sheets) {
    const resultBox = document.querySelector(".result-box"); // Store the empty result section in the variable resultBox.

    const fs = document.createElement("fieldset"); // create a fieldset element.
    const le = document.createElement("legend");//Create a legend element.
    le.innerText = `${sheets.name}`;//Fix the text content of the legend element.
    fs.appendChild(le); //Append legend to the fieldset.
    const p2 = document.createElement("P"); //Create second paragraph.
    
    let roofingTotal = 0;//Initialize the total meter in the list.


    sheets.forEach(sheet => {
        const p1 = document.createElement("p");    
        let dimensions = sheet.split(" "); //Split the length and width snd store in array dimension.
        let sheetLength = parseFloat(dimensions[0]); //Convert the length at index 0 from string to float value.
        let sheetQuantity = Math.ceil(parseFloat(dimensions[1])); //Convert the width at index 1 from string to float and round it up.
        let sheetTotal = sheetLength * sheetQuantity; //Get the total meter by multiplying the length and the quantity.
        roofingTotal += sheetTotal; //Update the total meters in the list.
        p1.innerText = `Length: ${sheetLength}   X   Quantity: ${sheetQuantity}  =  Sub-Total: ${sheetTotal}`;
        fs.appendChild(p1);

    });
    p2.innerHTML = `<strong>${sheets.name} Total:     ${roofingTotal}</strong>`; //Store total meter along with the sheet type in the p2 element.
    fs.appendChild(p2); //Append p2 into the fieldset.
    globalTotal += roofingTotal; // Update total meter in the globalTotal variable.

    resultBox.appendChild(fs);

};