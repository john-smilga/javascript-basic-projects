document.querySelectorAll('article')
    .forEach(function(elem) {
        elem.addEventListener('click', function(event) {
            if(event.target && event.target.nodeName === 'I') {
               elem.classList.toggle('show-text')
            }
        }); 
    });

