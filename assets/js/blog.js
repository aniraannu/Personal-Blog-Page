let blogArray = [];
//Get the data from local storage:
function getBlogEntry() {
    return JSON.parse(localStorage.getItem('blogEntry'));
}

function init() {
    blogArray = getBlogEntry();
    for (i = 0; i < blogArray.length; i++) {
        var blog = blogArray[i];
        console.log(i, blog);
        createBlogSection(blog);
    }
}
//Create a division for each Blog Entry
function createBlogSection(blog) {
    //get the blog entries from the retrieved array
    const reuserName = blog.userName;
    const retitle = blog.title;
    const recontent = blog.content;
    //Define all the elements needed for blog entry to be displayed as a division
    let secEl = document.createElement('div');
    let titleEl = document.createElement('h2');
    let pEl = document.createElement('p');
    let p2El = document.createElement('p');
    //getting the values from the retrieved array of local storage to the elements defined in the js
    titleEl.textContent = retitle;
    pEl.textContent = recontent;
    p2El.textContent = reuserName;
    //Append the elements
    //Appending all the retrieved data for username, title and content to the div created
    secEl.appendChild(titleEl);
    secEl.appendChild(pEl);
    secEl.appendChild(p2El);
    //Appending the divion created to the Div container defined in the HTML file
    document.getElementById('blog-container').appendChild(secEl);
    //Adding styles
    //Adding class to the div (secEl) to style it in the css
    secEl.setAttribute('class', 'blog-Section');
    //Adding styles to the title/ h2 element
    titleEl.setAttribute('style','font-size:25px; text-decoration:underline;');
    //Styling Content to be italic
    pEl.setAttribute('style', 'font-style:italic; font-size:15px;');
}
//Calling the function 
init();

//Return Button
const returnButton = document.getElementById('return');
returnButton.addEventListener('click', function (event) {
    event.preventDefault();
    openFormPage();
});
//Function to go back to the form page again
function openFormPage() {
    window.location.href = "index.html";
};