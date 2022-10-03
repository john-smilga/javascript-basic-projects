// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  // console.log(links.classList);
  // console.log(links.classList.contains('links'));
 links.classList.toggle('show-links');
});
