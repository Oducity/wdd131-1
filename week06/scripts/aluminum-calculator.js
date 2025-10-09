
/*createRoofCalculator();




calculator.addEventListener("click", () => {
    createRoofCalculator();
});

function createRoofCalculator() {

    let sec = document.createElement("section"); //Create a section element.

    let h2 = document.createElement("h2"); //Create a second level heading element.
    h2.innerText = "Aluminum Roof Calculator"; // Set the text value of the h2 element.

    let paragraph = document.createElement(p); // Create a paragraph element
    //Set the text value of the paragraph element.
    paragraph.innerText = "This aluminum roof Calculator is to be used by aluminum roof professionals. This calculator allows for entry of roof dimenssions and their corresponding quantity depending on the situation.";
    
    sec.appendChild(h2); // Append the h2 element to the section element.
    sec.appendChild(paragraph); // Append the p element to the section element.


    let entryDiv = document.createElement("div"); //All input elements are placed in this div element.

    
    // Created label element and set its respective class attributes.
    let roofSheetLabel = document.createElement("label");
    roofSheetLabel.setAttribute("class", "roof-label-label");
    roofSheetLabel.setAttribute("for", "roof-sheets");
    // Created input elements for user interaction and set its relevant attributes.
    let roofSheetInput = document.createElement("input");
    roofSheetInput.setAttribute("type", "text");
    roofSheetInput.setAttribute("name", "roof-sheets");
    roofSheetInput.setAttribute("value", "meters");


    // Created label element and set its respective class attributes.
    let bottomCeilingLabel = document.createElement("label");
    bottomCeilingLabel.setAttribute("class", "bottom-ceiling-label");
    bottomCeilingLabel.setAttribute("for", "ceiling-sheets");
    // Created input elements for user interaction and set its relevant attributes.
    let bottomCeilingInput = document.createElement("input");
    bottomCeilingInput.setAttribute("type", "text");
    bottomCeilingInput.setAttribute("name", "ceiling-sheets");
    bottomCeilingInput.setAttribute("value", "meters");
    
    
    // Created label element and set its respective class attributes.
    let claddingLabel = document.createElement("label");
    claddingLabel.setAttribute("class", "cladding-label");
    claddingLabel.setAttribute("for", "cladding-sheets");
    // Created input elements for user interaction and set its relevant attributes.
    let claddingInput = document.createElement("input");
    claddingInput.setAttribute("type", "text");
    claddingInput.setAttribute("name", "cladding-sheets");
    claddingInput.setAttribute("value", "meters");


    // Created label element and set its respective class attributes.
    let ridgeLabel = document.createElement("label");
    ridgeLabel.setAttribute("class", "ridge-label");
    ridgeLabel.setAttribute("for", "ridges");
    // Created input elements for user interaction and set its relevant attributes.
    let ridgeInput = document.createElement("input");
    ridgeInput.setAttribute("type", "text");
    ridgeInput.setAttribute("name", "ridges");
    ridgeInput.setAttribute("value", "meters");


    // Created label element and set its respective class attributes.
    let topTrimmerLabel = document.createElement("label");
    topTrimmerLabel.setAttribute("class", "top-trimmer-label");
    topTrimmerLabel.setAttribute("for", "top-trimmers");
    // Created input elements for user interaction and set its relevant attributes.
    let topTrimmerInput = document.createElement("input");
    topTrimmerInput.setAttribute("type", "text");
    topTrimmerInput.setAttribute("name", "top-trimmers");
    topTrimmerInput.setAttribute("value", "meters");



    // Created label element and set its respective class attributes.
    let gutterLabel = document.createElement("label");
    gutterLabel.setAttribute("class", "gutter-label");
    gutterLabel.setAttribute("for", "gutters");
    // Created input elements for user interaction and set its relevant attributes.
    let gutterInput = document.createElement("input");
    gutterInput.setAttribute("type", "text");
    gutterInput.setAttribute("name", "gutters");
    gutterInput.setAttribute("value", "meters");



    // Created label element and set its respective class attributes.
    let gutterTrimmerLabel = document.createElement("label");
    gutterTrimmerLabel.setAttribute("class", "gutter-trimmer-label");
    gutterTrimmerLabel.setAttribute("for", "gutter-trimmers");
    // Created input elements for user interaction and set its relevant attributes.
    let gutterTrimmerInput = document.createElement("input");
    gutterTrimmerInput.setAttribute("type", "text");
    gutterTrimmerInput.setAttribute("name", "gutter-trimmers");
    gutterTrimmerInput.setAttribute("value", "meters");



    // Created label element and set its respective class attributes.
    let badgeBaordLabel = document.createElement("label");
    badgeBaordLabel.setAttribute("class", "badge-board-label");
    badgeBaordLabel.setAttribute("for", "badge-boards");
    // Created input elements for user interaction and set its relevant attributes.
    let badgeBoardInput = document.createElement("input");
    badgeBoardInput.setAttribute("type", "text");
    badgeBoardInput.setAttribute("name", "badge-boards");
    badgeBoardInput.setAttribute("value", "meters");



    // Created label element and set its respective class attributes.
    let bottomTrimmerLabel = document.createElement("label");
    bottomCeilingLabel.setAttribute("class", "bottom-trimmer-label");
    bottomCeilingLabel.setAttribute("for", "bottom-trimmers");
    // Created input elements for user interaction and set its relevant attributes.
    let bottomTrimmerInput = document.createElement("input");
    bottomTrimmerInput.setAttribute("type", "text");
    bottomTrimmerInput.setAttribute("name", "bottom-trimmers");
    bottomTrimmerInput.setAttribute("value", "meters");




    // Created label element and set its respective class attributes.
    let wallTrimmerLabel = document.createElement("label");
    wallTrimmerLabel.setAttribute("class", "wall-trimmer-label");
    wallTrimmerLabel.setAttribute("for", "wall-trimmers");
    // Created input elements for user interaction and set its relevant attributes.
    let wallTrimmerInput = document.createElement("input");
    wallTrimmerInput.setAttribute("type", "text");
    wallTrimmerInput.setAttribute("name", "wall-trimmers");
    wallTrimmerInput.setAttribute("value", "meters");

    
    //Place all input elements into their respective label elements
    roofSheetLabel.innerHTML = `Roofing sheets: ${roofSheetInput}`;
    bottomCeilingLabel.innerHTML = `Surrounding Ceiling Sheets: ${bottomCeilingInput}`;
    claddingLabel.innerHTML = `Side Cladding Sheets: ${claddingInput}`;
    ridgeLabel.innerHTML = `Ridges: ${ridgeInput}`;
    topTrimmerLabel.innerHTML = `Top Trimmer Sheets: ${topTrimmerInput}`;
    gutterLabel.innerHTML = `Gutters: ${gutterInput}`;
    gutterTrimmerLabel.innerHTML = `Gutter Trimmers: ${gutterTrimmerInput}`;
    badgeBaordLabel.innerHTML = `Badge Board Trimmers: ${badgeBoardInput}`;
    bottomTrimmerLabel.innerHTML = `Bottom Trimmer: ${bottomTrimmerInput}`;
    wallTrimmerLabel.innerHTML = `Wall Trimmers: ${wallTrimmerInput}`;


    //Append all label elements in the entryDiv element.
    entryDiv.appendChild(roofSheetLabel);
    entryDiv.appendChild(bottomCeilingLabel);
    entryDiv.appendChild(claddingLabel);
    entryDiv.appendChild(ridgeLabel);
    entryDiv.appendChild(topTrimmerLabel);
    entryDiv.appendChild(gutterLabel);
    entryDiv.appendChild(gutterTrimmerLabel);
    entryDiv.appendChild(badgeBaordLabel);
    entryDiv.appendChild(bottomTrimmerLabel);
    entryDiv.appendChild(wallTrimmerLabel);


    sec.appendChild(entryDiv);

    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "button-div");

    let button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", "Calculate My Roof");
    buttonDiv.appendChild(button);

    sec.appendChild(buttonDiv);

    document.querySelector(".main").appendChild(sec);
    
}
    */

