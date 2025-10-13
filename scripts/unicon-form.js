const date = new Date();
let currentYear = date.getFullYear();
let text = currentYear.toString();
document.getElementById("currentyear").innerHTML = text;

let lastModify = new Date(document.lastModified);
let lastModifyString = "Last Updated:" + " " + lastModify.toString();
document.getElementById("lastModified").innerHTML = lastModifyString;




const products = [
  {
    id: "Ls-0.45",
    name: "lonspan stucco",
    averagerating: 0.45
  },
  {
    id: "Lc-0.45",
    name: "longspan color",
    averagerating: 0.45
  },
  {
    id: "Ms-0.45",
    name: "matcopo stucco",
    averagerating: 0.45
  },
  {
    id: "Mc-0.45",
    name: "metcopo color",
    averagerating: 0.45
  },
  {
    id: "Ss-0.45",
    name: "steptile stucco",
    averagerating: 0.45
  },
  {
    id: "Sc-0.45",
    name: "steptile color",
    averagerating: 0.45
  },
  {
    id: "Mch-0.45",
    name: "metro Chingo",
    guage: 0.45
  },
  {
    id: "Mcl-0.45",
    name: "metro classic",
    guage: 0.45
  },
  {
    id: "Mbo-0.45",
    name: "metro bond",
    guage: 0.45
  }
];

createProductOptions(products);

function createProductOptions(setOptions) {
    setOptions.forEach(product => {
        let option = document.createElement("option");

        option.setAttribute("id", product.id);
        option.setAttribute("value", product.name);
        option.innerText = product.name;

        document.querySelector("#product-name").appendChild(option);
    });
};