// Products list in list.js file

// Get references to DOM elements
const listElement = document.getElementById("list");
const generateListButton = document.getElementById('generateList');
const displayArea = document.getElementById('displayArea');
const clearListButton = document.getElementById('clearList');
const copyListButton = document.getElementById('copyList');

// Initializes the list with checkboxes
function initializeList() {
    Object.entries(list).forEach(([category, items]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;

        categoryDiv.appendChild(categoryTitle);
        listElement.appendChild(categoryDiv);

        items.forEach(item => {
            const checkbox = createCheckboxForItem(item);
            const label = createLabelForItem(item);
            const div = createListItemDiv(checkbox, label);

            categoryDiv.appendChild(div);
        });
    });
}

function clearList() {
    listElement.innerHTML = '';
    displayArea.innerHTML = '';
    copyListButtonVisibility(false);
    initializeList();
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

    clearListButton.addEventListener('click', clearList);
}

// Event listener for the "Generate List" button to display selected items
function setupGenerateListButtonListener() {
    generateListButton.addEventListener('click', () => {
        displayArea.innerHTML = '';

        document.querySelectorAll('#list input[type="checkbox"]:checked').forEach(checkbox => {
            const listItem = document.createElement('li');
            listItem.textContent = checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1);
            displayArea.appendChild(listItem);
        });
        copyListButtonVisibility(true);
    });
}

// Event listener for the "Copy List" button to copy the list in the clipboard
function setupCopyListButtonListener() {
    copyListButton.addEventListener('click', () => {
        const listItems = Array.from(displayArea.children).map(li => li.textContent).join('\n');
        navigator.clipboard.writeText(listItems);
        alert('List copied to clipboard!');
    });
}

function toggleClassListElement() {
    const divs = document.querySelectorAll(".list-item");
    divs.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("selected");
        });
    });
}

function copyListButtonVisibility(showButton = false) {
    showButton === true ? copyListButton.style.display = 'block' : copyListButton.style.display = 'none';
}

// Initialize the list and setup event listeners
function setupPage() {
    initializeList();
    setupListItemClickListener();
    setupGenerateListButtonListener();
    setupCopyListButtonListener();
    copyListButtonVisibility();
    toggleClassListElement();
}

// Call setupPage to initialize everything
setupPage();