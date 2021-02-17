var form = document.getElementById('form');

var ulItem = document.getElementById('ul-item');

var formSearch = document.getElementById('form-search');

formSearch.addEventListener("submit", searchItems);
form.addEventListener("submit", addItem);
ulItem.addEventListener("click", deleteItem);

function addItem(e) {
    e.preventDefault();
    var inputItem = document.getElementById('input-item').value;
    var extractedValue = inputItem.replace(inputItem.substring(15), '...');
    var itemNotFound = document.getElementById('item-not-found');

    var li = document.createElement('li');

    li.className = "list-group-item";

    if (inputItem.length <= 15) {
        li.appendChild(document.createTextNode(inputItem));
    }
    else {
        li.appendChild(document.createTextNode(extractedValue));
    }
    var btn = document.createElement('button');

    btn.className = "btn btn-danger btn-sm float-right delete";

    btn.appendChild(document.createTextNode('x'));
    li.appendChild(btn);
    ulItem.appendChild(li);
    itemNotFound.style.display = "none";
    form.reset();
}

function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure ?")) {
            var li = e.target.parentNode;
            ulItem.removeChild(li);
        }
    }
}

function searchItems(e) {
    e.preventDefault();
    var searchInput = document.getElementById('search-input').value.toLowerCase();

    var liItems = document.getElementsByTagName('li');

    var itemNotFound = document.getElementById('item-not-found');
    Array.from(liItems).forEach((item) => {
        var itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(searchInput) != -1) {
            item.style.display = "block";
            itemNotFound.style.display = "none";
        }
        else {
            item.style.display = "none";
            itemNotFound.style.display = "block";
        }
    })
    formSearch.reset();
}