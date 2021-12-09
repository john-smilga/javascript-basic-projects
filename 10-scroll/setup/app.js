// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');              
function closeLinks() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    (containerHeight === 0)
        ? linksContainer.style.height = `${linksHeight}px`
        : linksContainer.style.height = 0;
}
navToggle.addEventListener('click', closeLinks);
// ********** fixed navbar ************
function fixedNavBar() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    (scrollHeight > navHeight)
        ? navbar.classList.add('fixed-nav')
        : navbar.classList.remove('fixed-nav');
    (scrollHeight > 500)
        ? topLink.classList.add('show-link')
        : topLink.classList.remove('show-link');
}
window.addEventListener('scroll', fixedNavBar);
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if(!fixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({left:0, top:position});
        linksContainer.style.height = 0;
    });
});
