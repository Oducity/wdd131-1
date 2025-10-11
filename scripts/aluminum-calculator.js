
    

const calculateBtn = document.getElementById("calculate-all");

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



//====================================================================================

//Get the input button and asign it to variable button
calculateBtn.addEventListener("click", () => {
    ComputeFullRoof();
    
    
})




const roofList = roofStr.split(",");
const claddingList = claddingStr.split(",");
const ceilingList = ceilingStr.split(",");
const nameOfType = [roofInput.name, claddingInput.name, ceilingInput.name];





function ComputeFullRoof() {    //document.querySelector(".result-box").innerHTML = ""; //Empty the result section in the aluminum-calculator.html.

    

    const resultBox = document.querySelector(".result-box"); // Store the empty result section in the variable resultBox.
    const resultHeading = document.createElement("h2"); // Create h2 element.

    resultHeading.innerText = "Your Result" // Write text into the h2 element.
    resultBox.appendChild(resultHeading); //Added h2 element and value to resultBox.

    const resultP = document.createElement("p"); // Create paragraph element.
    resultP.innerText = "Below is the calculated aluminum roof materials needed to complete the roof according to the information you provided."; //Write text to the p element.
    resultBox.appendChild(resultP); //Append p element to resultBox;

    
    calculateCorogatedSheets(roofList); //Call the calculateCorogatedSheets() function and pass in the roofList array.
    calculateCorogatedSheets(claddingList); //Call the calculateCorogatedSheets() function and pass in the claddingList array.
    calculateCorogatedSheets(ceilingList); // call the calculateCorogatedSheets() function and pass in the ceilingList array.
    calculateTrimmers(trimmersInput); //Call the calculateTrimmers() function.
    
    const globalTotalP = document.createElement("p"); // Create p element for the total meters for both the roof, cladding, ceiling and trimmers.
    globalTotalP.innerHTML = `<strong>Grand Total Meters: ${allTotal}</strong>`; // Using string literal, stored the total meters for everything in the globalTotalP variable.
    resultBox.appendChild(globalTotalP);

}





function calculateTrimmers(trimmers1) {

    const resultBox = document.querySelector(".result-box"); // Store the empty result section in the variable resultBox.

    const fs1 = document.createElement("fieldset");// Create fieldset element.
    const le1 = document.createElement("legend");
    le1.innerText = "Trimmers/Flat Sheet";
    fs1.appendChild(le1);


    const pOfTrimmers = document.createElement("p"); //Paragraph for the list of all computed trimmers.
    const pOfTotalMeters = document.createElement("p"); //Assign paragraph for the total meters of trimmers.
    const pOfAdjustment = document.createElement("p"); // Parahraph for fabrication error adjustment.
    

    let flatSheet = 0; // Initialize the total meters of flat sheet for all trimmers to zero.
    //let listOfTrimmers = []; //Place all trimmers and individual subtotal meter in listOfTrimmers array.
    


    /*allTrimmers.*/
    trimmers1.forEach(trimmer => {
        let lengthN = parseFloat(trimmer.lengt); //Convert lengthOfItem in iteration to float and store it in length.
        let widthN = parseFloat(trimmer.width); //Convert widthOfItem in iteration to float and store it in width.


        let trimmerTotal = (lengthN * widthN) / 1.2; //Compute total length of each type of trimmer. 
        flatSheet += trimmerTotal; //Update total flat sheet.
        let trimmerValue = `${trimmer.name}: ${trimmerTotal}`; // Concatinate the name af trimmer and its total meter and store in a variable.
        listOfTrimmers.push(trimmerValue); //Update the listOfTrimmers array.

    });
    
    
    

    const adjustment = (flatSheet / 100) * 7; //Frabrication error adjustment (7 percent).
    let totalFlatSheet = flatSheet + adjustment; //Add frabrication error adjustment to the total flat sheet.
    globalTotal += totalFlatSheet;

    pOfTrimmers.textContent = `All Trimmers Brakedown: ${listOfTrimmers}`; // Store array listOfTrimmers in paragraph pOfTrimmers.
    pOfTotalMeters.innerHTML = `<strong>The Total Meter for All Trimmers: ${totalFlatSheet}</strong>`; //Store total meters of all trimmers in the paragraph of pOfTotalTrimmers.
    pOfAdjustment.innerHTML = `<strong>Added Meters for Fabrication Error Adjustment: ${adjustment}</strong>`; // Store the fabrication error adjustment added value in pOfAdjusment.

    //fs1.appendChild(pOfTrimmers); //Append paragraph of array of trimmers to the fieldset.
    fs1.appendChild(pOfAdjustment); //Append paragraph of fabrication error adjustment value to the fieldset.
    fs1.appendChild(pOfTotalMeters); //Append the paragraph of the total meter of all trimmers to the fieldset.

    resultBox.appendChild(fs1);

};


let allTotal = 0;//Initialize all total

function calculateCorogatedSheets(sheets) {
    const resultBox = document.querySelector(".result-box"); // Store the empty result section in the variable resultBox.

    const fs = document.createElement("fieldset"); // create a fieldset element.
    const le = document.createElement("legend");//Create a legend element.
    le.innerText = "Corogated Sheets";//Fix the text content of the legend element.
    fs.appendChild(le); //Append legend to the fieldset.
    
    
    const allTotalP = document.createElement("p");
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
    allTotal += roofingTotal; // Update total meter in the globalTotal variable.
    allTotalP.innerHTML = `<strong> All Total:  ${allTotal}</strong>`;
    
    fs.appendChild(allTotalP);
    resultBox.appendChild(fs);

};




const trimmersInput = [
    {
        name: "RidgeCap",
        lengt: parseFloat(document.getElementById("ridges").value),
        width: parseFloat(document.getElementById("ridge-width").value),
    },
    {
        name: "Top-trimmers",
        lengt: parseFloat(document.getElementById("top-trimmers-length").value),
        width: parseFloat(document.getElementById("top-trimmers-width").value)
    },
    {
        name: "Badge-boards",
        lengt: parseFloat(document.getElementById("badge-board").value),
        width: parseFloat(document.getElementById("badge-board-width").value)
    },
    {
        name: "Gutters",
        lengt: parseFloat(document.getElementById("gutters").value),
        width: parseFloat(document.getElementById("gutter-width").valu)
    },
    {
        name: "Gutter-trimmers",
        lengt: parseFloat(document.getElementById("gutter-trimmers").value),
        width: parseFloat(document.getElementById("gutter-trimmers-width").value)
    },
    {
        name: "Bottom-trimmers",
        lengt: parseFloat(document.getElementById("bottom-trimmers").value),
        width: parseFloat(document.getElementById("bottom-trimmers-width").value)
    },
    {
        name: "Wall-trimmers",
        lengt: parseFloat(document.getElementById("wall-trimmers").value),
        width: parseFloat(document.getElementById("wall-trimmers-width").value)
    }
]
