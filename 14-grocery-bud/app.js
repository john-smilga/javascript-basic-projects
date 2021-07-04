const groceryForm = document.querySelector('.grocery-form');
const alertMsg = document.querySelector('.alert');
const groceryInput = document.getElementById('grocery');
const groceryWrapper = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
let editElem;
let editFlag = false;
let editID = '';

groceryForm.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setupItems);

function addItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  const id = new Date().getTime().toString();
  
  if (value && !editFlag) {
    newItem(id, value);
    
    showAlert('item added to the list', 'success');
    groceryWrapper.classList.add('show-container');
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElem.innerHTML = value;
    showAlert('value changed', 'success');
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    showAlert('please enter value', 'danger');
  }
}

function showAlert(text, action) {
  alertMsg.textContent = text;
  alertMsg.classList.add(`alert-${action}`);
  
  setTimeout(() => {
    alertMsg.textContent = '';
    alertMsg.classList.remove(`alert-${action}`);
  }, 1000);
}

function clearItems() {
  groceryList.innerHTML = '';
  groceryWrapper.classList.remove('show-container');
  showAlert('empty list', 'success');
  setBackToDefault();
  localStorage.removeItem('list');
}

function deleteItem(e) {
  const elem = e.currentTarget.parentElement.parentElement;
  const id = elem.dataset.id;
  groceryList.removeChild(elem);
  
  if (groceryList.children.length === 0) {
    groceryWrapper.classList.remove('show-container');
  }
  
  showAlert('item removed', 'success');
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem(e) {
  const elem = e.currentTarget.parentElement.parentElement;
  editElem = e.currentTarget.parentElement.previousElementSibling;
  groceryInput.value = editElem.innerHTML;
  editFlag = true;
  editID = elem.dataset.id;
  submitBtn.textContent = 'edit';
}

function setBackToDefault() {
  groceryInput.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

function addToLocalStorage(id, value) {
  const grocery = {id, value};
  let items = getLocalStorage();
  
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  
  items = items.filter(item => {
    if (item.id !== id) {
      return item;
    }
  });
  
  localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  
  items = items.map(item => {
    if (item.id === id) {
      item.value = value;
    }
    
    return item;
  });
  
  localStorage.setItem('list', JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();
  
  if (items.length > 0) {
    items.forEach(item => {
      newItem(item.id, item.value);
    });
    
    groceryWrapper.classList.add('show-container');
  }
}

function newItem(id, value) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
                
          <div class="btn-container">
            <button class="edit-btn" type="button">
              <i class="fas fa-edit"></i>
            </button>
                  
            <button class="delete-btn" type="button">
              <i class="fas fa-trash"></i>
            </button>
          </div>`;
    
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    
    groceryList.insertBefore(element, groceryList.firstChild);
}
