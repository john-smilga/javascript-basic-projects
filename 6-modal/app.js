const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

function modal(open = true) {
  if (open) {
    modalOverlay.classList.add('open-modal');
  } else {
    modalOverlay.classList.remove('open-modal');
  }
}

modalOverlay.addEventListener('click', (e) => {
  if (!e.target.classList.contains('modal-overlay'))
    return;
    
  modalOverlay.classList.remove('open-modal');
});

modalBtn.addEventListener('click', modal);
closeBtn.addEventListener('click', () => modal(false));