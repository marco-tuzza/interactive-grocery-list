// Define the list of items
const list = ["apple", "banana", "cherry"];

// Get references to DOM elements
const listElement = document.getElementById("list");
const generateListButton = document.getElementById('generateList');
const displayArea = document.getElementById('displayArea');

// Initializes the list with checkboxes
function initializeList() {
    list.forEach(item => {
        const checkbox = createCheckboxForItem(item);
        const label = createLabelForItem(item);
        const div = createListItemDiv(checkbox, label);

        listElement.appendChild(div);
    });
}

// Creates a checkbox for a given item
function createCheckboxForItem(item) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item;
    checkbox.id = item;
    checkbox.name = item;
    return checkbox;
}

// Creates a label for a given item
function createLabelForItem(item) {
    const label = document.createElement("label");
    label.htmlFor = item;
    label.appendChild(document.createTextNode(item));
    return label;
}

// Wraps a checkbox and label in a div
function createListItemDiv(checkbox, label) {
    const div = document.createElement("div");
    div.classList.add("list-item");
    div.appendChild(checkbox);
    div.appendChild(label);
    return div;
}

// Event listener for list item clicks to toggle checkbox state
function setupListItemClickListener() {
    listElement.addEventListener("click", event => {
        if (event.target.classList.contains("list-item")) {
            const checkbox = event.target.querySelector("input[type='checkbox']");
            checkbox.checked = !checkbox.checked;
        }
    });
}

// Event listener for the "Generate List" button to display selected items
function setupGenerateListButtonListener() {
    generateListButton.addEventListener('click', () => {
        displayArea.innerHTML = '';

        document.querySelectorAll('#list input[type="checkbox"]:checked').forEach(checkbox => {
            const listItem = document.createElement('li');
            listItem.textContent = checkbox.value;
            displayArea.appendChild(listItem);
        });
    });
}

// Initialize the list and setup event listeners
function setupPage() {
    initializeList();
    setupListItemClickListener();
    setupGenerateListButtonListener();
}

// Call setupPage to initialize everything
setupPage();