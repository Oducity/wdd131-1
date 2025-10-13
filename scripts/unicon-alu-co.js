

const roofs = [
    {
        roofName: "Black Metcopo aluminum roofing sheets",
        location: "Edo State, Nigeria",
        dateDone: "Nov-10-2021",
        guage: 0.55,
        imageUrl: "images/to-be-used.webp"
    },
    {
        roofName: "Blue longspan aluminum roofing sheet",
        location: "Lagos, Nigeria",
        dateDone: "Feb-19-2009",
        guage: 0.45,
        imageUrl: "images/bottom-front-view.webp"
    }
  
];

createRoofBox(roofs);

const homePage = document.querySelector("#home-button");
const about = document.querySelector("#about-us-button");


homePage.addEventListener("click", () => {
    createRoofBox(roofs);
})




function createRoofBox(roof) {
    let xtion = document.createElement("section"); //Created section element in the home.
    xtion.setAttribute("class", "roof-box");
    roof.forEach(rf => {
        

        let image = document.createElement("img"); //Created img element in the home.
        let leg = document.createElement("legend"); //Created the legend elements using javascript.
        let pg = document.createElement("p"); //Create p element for the image description.

    
        image.setAttribute("src", rf.imageUrl); //Set the src attributes for img elements.
        image.setAttribute("alt", rf.roofName); //Set the alt attributes using javascript.
        image.setAttribute("class", `${rf.dateDone}img`); //Set class attribute for images using their date + img.
        image.setAttribute("loading", "lazy"); //Set the image loading attributes to lazy.
        leg.setAttribute("class", `${rf.dateDone}`); //Set class attribute for legend element using corresponding image date.
        pg.innerHTML = `<strong>📛Name:</strong> ${rf.roofName} &nbsp &nbsp <strong>⚖Thichness:</strong> ${rf.guage}mm &nbsp <strong>🗺️Location:</strong> ${rf.location} &nbsp &nbsp <strong> 📅 Date:</strong> ${rf.dateDone}`; //Created innerHTML value using javascript.

        leg.appendChild(image); //Appended the image.
        leg.appendChild(pg); //Appended the img elements and their content to the section elements.
        xtion.appendChild(leg); //Appended the legend elements and their content to the section elements.

        document.querySelector(".main").appendChild(xtion); //Append the section element the the main element.
    });
    
};