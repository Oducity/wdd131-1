const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.createElementNS("li");

const deleteButton = document.createElement("li");
list.textContent = input.value;
deleteButton.textContent = "✖";
li.append(deleteButton);


button.addEventListener("click", function () {
    
    if (input.value.trim() !== "") {
        return input.focus();
    }
});

deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
})