// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const hamburger = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  links.classList.toggle('show-links');
  
  if (links.classList.contains('show-links')) {
    hamburger.style.color = `var(--clr-primary-1)`;
    hamburger.style.transform = `rotate(90deg)`;
  } else {
    hamburger.style.color = `var(--clr-primary-5)`;
    hamburger.style.transform = `rotate(0deg)`;
  }
});