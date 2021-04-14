const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let count = 0;

function handleButton(e) {
  const className = e.currentTarget.classList;
  
  if (className.contains('decrease')) {
    count--;
  } else if (className.contains('increase')) {
    count++;
  } else {
    count = 0;
  }
  
  if (count > 0) {
    value.style.color = '#74fd89';
  }
  if (count < 0) {
    value.style.color = '#f15e5e';
  }
  if (count === 0) {
    value.style.color = '#222';
  }
  
  value.textContent = count;
}

btns.forEach(btn => btn.addEventListener('click', handleButton));