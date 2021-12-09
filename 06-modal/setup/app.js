document.querySelector('.modal-btn').addEventListener('click', function() {
    document.querySelector('.modal-overlay').classList.add('open-modal');
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.modal-overlay').classList.remove('open-modal');
});
