function addItem() {
    // select input field
    const input = document.getElementById('newItemText');

    // create <li> element amd assign input value to element text content
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // select <ul> and append new element
    document.getElementById('items').appendChild(liElement);

    // clear content value
    input.value = '';
}