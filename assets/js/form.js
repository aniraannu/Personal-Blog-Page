//Inputs from the form
const userNameInput = document.getElementById('name');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');
const msgDiv = document.querySelector('#msg');

//Display Warning Message
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

//write function to save data to localStorage while submitting the form
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const blogEntry = {
        userName: userNameInput.value,
        title: titleInput.value,
        content: contentInput.value.trim(),
    };
    if (blogEntry.userName === '') {
        displayMessage('error', 'Username cannot be blank');
    } else if (blogEntry.title === '') {
        displayMessage('error', 'Title cannot be blank');
    } else if (blogEntry.content === '') {
        displayMessage('error', 'Content cannot be blank');
    } else {
        displayMessage('success', 'Blog post added successfully');
        localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
    }
});