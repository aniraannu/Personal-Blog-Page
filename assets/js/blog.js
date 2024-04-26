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
function createBlogSection(blog){
        const userName = blog.userName;
        const title = blog.title;
        const content = blog.content;
        let sec = document.createElement('div');
        let titleEl = document.createElement('h2');

        titleEl.textContent = title;
        sec.appendChild(titleEl);
        document.getElementById('blog-container').appendChild(sec);

}

init();
//Return Button
const returnButton = document.getElementById('return');
returnButton.addEventListener('click', function (event) {
    event.preventDefault();
    openFormPage();
});
function openFormPage(){
    window.location.href = "index.html";
};