const list = ["apple", "banana", "cherry"];
const listElement = document.getElementById("list");

function initializeList() {
    list.forEach((item) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item;
        checkbox.id = item;
        checkbox.name = item;

        const label = document.createElement("label");
        label.htmlFor = item;
        label.appendChild(document.createTextNode(item));

        const div = document.createElement("div");
        div.classList.add("list-item");
        div.appendChild(checkbox);
        div.appendChild(label);
        listElement.appendChild(div);
    });
}

initializeList();

listElement.addEventListener("click", (event) => {
    if (event.target.classList == "list-item") {
        const checkbox = event.target.querySelector("input[type='checkbox']");
        checkbox.checked = !checkbox.checked;
    }
});