const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll('[data-id]');
const content = document.querySelectorAll('.content');

btnContainer.addEventListener('click', (e) => {
  btns.forEach(btn => {
    if (btn === e.target) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  content.forEach(item => {
    if (item.getAttribute('id') === e.target.dataset.id) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});