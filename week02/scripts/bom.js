const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.createElement("li");
const deleteButton = document.createElement("button");



//================================================================

button.addEventListener("click", function () {
    
    if (input.value.trim() !== "") {
        li.textContent = input.value;
        deleteButton.textContent = "✖";
        li.append(deleteButton);
    }
    return input.focus();
});

deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
})