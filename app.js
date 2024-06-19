const list = ["apple", "banana", "cherry"];
const listElement = document.getElementById("list");

list.forEach((item) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item;
    checkbox.id = item;
    checkbox.name = item;

    const label = document.createElement("label");
    label.htmlFor = item;
    label.appendChild(document.createTextNode(item));
    listElement.appendChild(checkbox);
    listElement.appendChild(label);
});