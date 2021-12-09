function showList() {
    (document.querySelector('ul').className === 'links')
        ? document.querySelector('ul').className += ' show-links'
        : document.querySelector('ul').className = 'links'
}
document.querySelector('.nav-toggle').addEventListener('click', showList);
