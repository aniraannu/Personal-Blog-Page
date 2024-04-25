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
    saveFormData(blogEntry);
    openBlogPage();
});
//Function to save blog enteries to the local storage
function saveFormData(blogEntry) {
    const storedFormData = JSON.parse(localStorage.getItem('blogEntry')) || [];
    storedFormData.push(blogEntry);
    localStorage.setItem('blogEntry', JSON.stringify(storedFormData));
};
//write a function to open the blog page when submit button is pressed
openBlogPage(blogEntry){
    window.location.href = "file:///C:/Users/anira/Desktop/Bootcamp/Repo/Challenges/challenge4/blog.html";
};