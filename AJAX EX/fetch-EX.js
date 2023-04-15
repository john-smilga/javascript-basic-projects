// Fetch is a a feature that is built in 
// promise based
//xhr is not worng, you can complete all our upcoming examples and projects using hxr. fetch is just an alternative
//approach that has simpler and clenaer syntax. the end result ia thw same. Still get dynamically, behind the scenes.

const url = './people.json';

//const response = fetch(url);
//console.log(response);

/* fetch(url).then((resp) => {
    // response object
    //useful properties and methods
    //console.log(resp);
    //convert response into JSON DATA
    //returns promise
    return resp.json()
}).then((data)=>{
    console.log(data);
}).catch((err) => console.log(err));
*/ 

/* //FETCH 322
fetch(url).then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));
*/


// same information but is more popular intention and can accomplish the same thing with way less lines of code
//more easy to manage

//Fetch ERROr 323
//when it comes to fetch it treat network errors as error

//324 Fetch(Big picture)
//Fetch is very simple, get same functionality in place with way less code

//325 Fetch with functionality

 /* 
 const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        //console.log(data);
        displayItems(data);
    })
    .catch((err) => {
        console.log(err);
    });
});
const displayItems = (items) =>{
    const displayData = items.map((item) => {
        const { name } = item;
        return `<p>${name}</p>`;
    }).join('');
    const element = document.createElement('div');
    element.innerHTML = displayData;
    document.body.appendChild(element); 
};
*/ 

//326. Fetch with async/Await (5min)
//still less lines of codes with async
const btn = document.querySelector('.btn')
btn.addEventListener('click', async () => {
    const response = await fetch (url);
    const data = await response.json();
    displayItems(data);
});

const displayItems = (items) =>{
    const displayData = items.map((item) => {
        const { name } = item;
        return `<p>${name}</p>`;
    }).join('');
    const element = document.createElement('div');
    element.innerHTML = displayData;
    document.body.appendChild(element);
};

//327 try / catch ex

try {
    console.log('hello')
} catch (error) {
    console.log(error);
}

console.log('hey')