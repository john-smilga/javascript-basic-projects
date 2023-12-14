// ****** SELECT ITEMS **********


const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const subBtn = document.querySelector('.submit-btn');

const groceryItem = document.querySelector('.grocery-item');
const title = document.querySelector('.title');
const list = document.querySelector(".grocery-list");
const container = document.querySelector(".grocery-container");
const clrBtn = document.querySelector('.clear-btn');
// edit option
let editFlag = false;
let editElement;
let editID="";


// ****** EVENT LISTENERS **********

// submit form
subBtn.addEventListener('click',addItem);

// clear items
clrBtn.addEventListener('click',clearItems);

//display items onLoad
window.addEventListener("DOMContentLoaded", setupItems);

//****Functions */

//add item
function addItem(e) {
     e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag)
    {
        console.log('add item to the list');
        const element = document.createElement('article');
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;
       // add event listeners to both buttons;
      const editBtn = element.querySelector('.edit-btn');
      const delBtn = element.querySelector('.delete-btn');
      editBtn.addEventListener('click',editItem);
      delBtn.addEventListener('click',deleteItem);

      // append child
      list.appendChild(element);
      // display alert
    displayAlert("item added to the list", "success");
      // show container
      container.classList.add("show-container");

         // set local storage
    addToLocalStorage(id,value);

      // set back to default
      setBackToDefault();


    }
    else if( value && editFlag)
    {
        console.log('editing');
        editElement.innerHTML= value;
        displayAlert('value changed','success');
         editLocalStorage(editID,value);
      //  addToLocalStorage(id,value);
        //edit local storage
        setBackToDefault();
    }
    else
    {
       
        displayAlert('please enter value', 'danger');
    }
    
}



//display alert
function displayAlert(text, action)
{
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(function() {
        alert.textContent="";
        alert.classList.remove(`alert-${action}`)
    },1000);
}






// ****** FUNCTIONS **********

//clearItems function
function clearItems()
{
    const items = document.querySelectorAll('.grocery-item');
    if(items.length>0)
    {
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('empty list','danger');
    setBackToDefault();
    localStorage.removeItem('list');
}

//delete function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // console.log(e);
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.parentElement);
    // console.log(e.currentTarget.parentElement.parentElement);
    const id=element.dataset.id;
    list.removeChild(element);
   
    if(list.children.length === 0)
    {
        container.classList.remove('show-container');
    }
    displayAlert('item removed','danger');
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);


   

    
} 

//edit function
function editItem(e){
    console.log('item edited');
    const element = e.currentTarget.parentElement.parentElement;
    // console.log(element);
    //set edit element
  

    editElement = e.currentTarget.parentElement.previousElementSibling;

    // console.log(editElement);
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    
    //
    subBtn.textContent = 'edit';
    
  


} 


//set back to default
function setBackToDefault()
{
   grocery.value='';
   editFlag = false;
   editID="";
   subBtn.textContent="submit";
}
// ****** LOCAL STORAGE **********

function addToLocalStorage(id,value)
{
  const grocery={id,value};
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list",JSON.stringify(items));
}

function getLocalStorage()
{
  return localStorage.getItem("list")?JSON.parse(localStorage.getItem('list')):[];
}

function removeFromLocalStorage(id){
  let items = getLocalStorage();
  items  = items.filter(function(item){
    if(item.id!== id)
    return item;
  })
  localStorage.setItem('list',JSON.stringify(items));

}

function editLocalStorage(id,value)
{

  let items = getLocalStorage();
  items = items.map(function(item){
    if(item.id === id)
   {
      item.value=value;
      console.log(items);
   }
   return item;


  });
  localStorage.setItem('list',JSON.stringify(items));

}

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}


//localStorage API(application part of dev tools)
//setItem
// localStorage.setItem('orange',JSON.stringify(['item','item2']));
// //getItem
// const oranges = JSON.parse(localStorage.getItem('orange'));
// console.log(oranges);
// //removeItem
// localStorage.removeItem('orange')
//save as strings

// ****** SETUP ITEMS **********
