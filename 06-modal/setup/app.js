// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const modalContainer = document.querySelector('.modal-container')


// listen for click events on modal-btn and close-btn
modalBtn.addEventListener("click", function () {
    console.log (modalBtn)
    modalBtn.classList.add("show-modalContainer")
});

closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove(show-modalOverlay)
})

// when user clicks modal-btn add .open-modal to modal-overlay
if (modalOverlay.classList.contains('show-modalOverlay')) {
    modalOverlay.classList.remove('show-modalOverlay')
}
else {
modalOverlay.classList.add("show-modal-overlay")
}


// when user clicks close-btn remove .open-modal from modal-overlay

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-modal-overlay")
})


