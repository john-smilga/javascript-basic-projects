const storage = window.localStorage;

let listItens = [];
const $divContainer = document.querySelector('.grocery-container');
const $divList = document.querySelector('.grocery-list');
const $alert = document.querySelector('.alert');
const $submit = document.querySelector('.submit-btn');
const $input = document.querySelector('#grocery');
const $clear = document.querySelector('.clear-btn');
let listElem = [];

function isValidInput(value) {
    return ((typeof value === 'string' && value.length >= 3) && (value !== "" && value !== " "));
}

function message(classN, text) {
    $alert.classList.add(classN);
    $alert.textContent = text;
    setTimeout(function() {
        $alert.classList.remove(classN);
        $alert.textContent = '';
    }, 1500);
}

function showList() {
    let list = JSON.parse(storage.getItem('list'));
    if(!!list) {
        listElem = [];
        list.forEach(function(el) {
            let elem = `<article class="grocery-item" data-id=${el.id}><p class="title">${el.item}</p><div class="btn-container"><button class="edit-btn" type="button"><i class="fas fa-edit"></i></button><button class="delete-btn" type="button"><i class="fas fa-trash"></i></button></div></article>`;
            listElem.push(elem);
        });
        $divList.innerHTML = listElem.join("");
        $divContainer.classList.add('show-container');
    } 
}

function submitItem(event) {
    event.preventDefault();
    if(isValidInput($input.value)) {
        let value = $input.value;
        let idRandom = Math.floor((Math.random() *1)* 15000);
        listItens.push({'id':idRandom, 'item':value});
        storage.list = JSON.stringify(listItens);
        showList();
        $input.value = "";
        message('alert-success', 'Item added to the list');
    }
    else message('alert-danger', 'Please enter value');
}

function clearList() {
    $divContainer.classList.remove('show-container');
    storage.clear();
    $divList.innerHTML = "";
    listElem = [];
    listItens = [];
}

function btnsEditDel(event) {
    if(event.target.matches('.fa-edit') || event.target.matches('.edit-btn')) {
        let $btnEdit = document.querySelector('.submit-btn');
        let $itemSelected = event.target.parentElement.parentElement.previousSibling.textContent;
        $btnEdit.removeEventListener('click',submitItem);
        $btnEdit.textContent = 'edit';
        $input.value = $itemSelected;
        const editItem = function(event) {
            event.preventDefault();
            let editList = JSON.parse(storage.getItem('list'));
            editList.forEach(function(el){
                if(el.item === $itemSelected) {el.item = $input.value;}
            });
            storage.list = JSON.stringify(editList);
            $input.value = "";
            $btnEdit.removeEventListener('click', editItem);
            $submit.textContent = 'submit';
            $submit.addEventListener('click', submitItem);
            showList();
        };
        $btnEdit.addEventListener('click',editItem);
    }else
    if(event.target.matches('.fa-trash') || event.target.matches('.delete-btn')) {
        let $itemSelected = event.target.parentElement.parentElement.previousSibling.textContent;
        let list = JSON.parse(storage.getItem('list')).filter(function(elItem) {
            return (elItem.item !== $itemSelected) && elItem;
        });
        storage.list = JSON.stringify(list);
        showList();
    }
}

$submit.addEventListener('click', submitItem);
$clear.addEventListener('click', clearList);
$divList.addEventListener('click', btnsEditDel);

window.addEventListener('load', function() {
    showList();
    JSON.parse(storage.getItem('list')).forEach(function(el) {
        listItens.push({'id':el.id, 'item':el.item});
    });
});
