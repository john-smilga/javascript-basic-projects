// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btn = document.querySelector('.nav-toggle');
const lnks = document.querySelector('.links');

btn.addEventListener('click',function(){
    // if(lnks.classList.contains('show-links'))
    // {
    //    lnks.classList.remove('show-links');
    // }
    // else
    // {
    //     lnks.classList.add('show-links');
    // }
    lnks.classList.toggle('show-links');
})
