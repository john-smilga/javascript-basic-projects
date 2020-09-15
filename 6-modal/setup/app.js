// select modal-btn,modal-overlay,close-btn
const openButton = document.querySelector(".modal-btn");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
openButton.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

// when user clicks close-btn remove .open-modal from modal-overlay

closeButton.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
// click outside the box to close modal
document.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("open-modal") : false
);

// esc key to escape
document.addEventListener("keydown", (e) =>
  e.key === "Escape" ? modal.classList.remove("open-modal") : false
);
