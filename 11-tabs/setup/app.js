const btns = document.querySelector('.btn-container');
//const content = document.querySelectorAll('.content');

function changeTabs(event) {
    let currentBtnId = event.target.getAttribute('data-id');
    let currentBtn = event.target;
    let div = document.querySelector(`#${currentBtnId}`).classList;

    currentBtn.classList.add('active');
    div.add('active');
    for(let elem of btns.children) {
        let currentDiv = elem.getAttribute('data-id');
        let divContent = document.querySelector(`#${currentDiv}`).classList;
        if(elem !== currentBtn) {
            elem.classList.remove('active');
            divContent.remove('active');
        }
    }
}

btns.addEventListener('click', changeTabs);
