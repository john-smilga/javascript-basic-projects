document.querySelector('.sidebar-toggle').addEventListener('click', function(event) {
    if(document.querySelector('aside').className === 'sidebar') {
        document.querySelector('aside').classList.add("show-sidebar");
    } else {
        document.querySelector('aside').classList.remove("show-sidebar");
    }
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('aside').classList.remove("show-sidebar");
});
