// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const modalContainer = document.querySelector('.modal-container')


// listen for click events on modal-btn and close-btn
modalBtn.addEventListener("click", function () {
    modalOverlay.classList.toggle('open-modal')
});

closeBtn.addEventListener("click", function () {
    modalOverlay.classList.toggle('open-modal')
})
