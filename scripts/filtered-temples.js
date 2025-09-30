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

/** Develop responsive web pages that follow best practices and use valid HTML and CSS.
Demonstrate proficiency with JavaScript language syntax.
Use JavaScript to respond to events and dynamically modify HTML.
Demonstrate the traits of an effective team member, including clear communication, collaboration, fulfilling assignments, and meeting deadlines. */

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11 - 15",
        area: "35546",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-thumb.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide, Austrlia",
        dedicated: "2000, June, 15",
        area: "10700",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-thumb.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: "48525",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-8011-thumb.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10 - 12",
        area: "41010",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-thumb.jpg"
    },
    {
        templeName: "Atlanta Georgia",
        location: "Georgia, U.S.A",
        dedicated: "1983, June, 1 - 4",
        area: "34500",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3860-thumb.jpg"
    },
    {
        templeName: "Asuncion Paraguay",
        location: "Asucion, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6952-thumb.jpg"
    }
  
];

createTempleCard(temples);

const allTemples = document.querySelector("#home-temples")
const oldTemples = document.querySelector("#old-temples");
const newTemples = document.querySelector("#new-temples");
const largeTemples = document.querySelector("#large-temples");
const smallTemples = document.querySelector("#small-temples");

allTemples.addEventListener("click", () => {
    createTempleCard(temples);
});

largeTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

oldTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4), 10) < 1900));
});

newTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4), 0) > 2000));
});

function createTempleCard(modifiedTemples) {
    document.querySelector(".temple-box").innerHTML = "";
    modifiedTemples.forEach(temple => {
        //let heading = document.createElement("h1");
        //let subHeading = document.createElement("h2");
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let place = document.createElement("p");
        let dedicate = document.createElement("p");
        let space = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        place.innerHTML = `<span class="label">Location:</span><span class="value"> ${temple.location}</span>`;
        dedicate.innerHTML = `<span class="label">Dedicated:</span><span class="value"> ${temple.dedicated}</span>`;
        space.innerHTML = `<span class="label">Area:</span><span class="value"> ${temple.area} square feets</span>`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} temple`);
        image.setAttribute("laoding", "lazy");
        //image.style.width = "500px";
        //image.style.height = "300px";

        card.appendChild(name);
        card.appendChild(place);
        card.appendChild(dedicate);
        card.appendChild(space);
        card.appendChild(image);

        document.querySelector(".temple-box").appendChild(card);

    });
};