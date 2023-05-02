const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const curBtn = e.currentTarget.classList;
        if(curBtn.contains("decrease")) {
            count--;
        } else if(curBtn.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        value.textContent = count;

        if(count < 0) {
            value.style.color = 'red';
        } else if(count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'black';
        }
    })
})