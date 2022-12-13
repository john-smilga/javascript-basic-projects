// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtn = document.querySelector('.nav-toggle')
const ulLinks = document.querySelector('.links')

navToggleBtn.addEventListener('click', function(){
   // if (ulLinks.classList.contains('show-links')) {
   //     ulLinks.classList.remove('show-links')
   // } 
    //else {
    //    ulLinks.classList.add('show-links')
   // }
    ulLinks.classList.toggle("show-links");
})