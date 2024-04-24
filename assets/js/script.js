//Theme Switcher button
//get the theme switch elemnt using ID
const themeSwitcher = document.querySelector('#checkbox');
//define the container
const container = document.querySelector('.container');
//let default mode be dark
let mode = 'dark';
//function to switch themes
themeSwitcher.addEventListener('click', function(){
    if (mode === 'dark'){
        mode = 'light';
    container.setAttribute('class', 'light');
    }
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
      }
});
