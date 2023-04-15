const btn = document.querySelector('.btn')
const url = './people.json'
btn.addEventListener('click', () => {
    getData(url);

})

function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200) {
            //parse
            //stringify
            const data = JSON.parse(xhr.responseText)
            const displayData = data.map((item) => {
                return `<p>${item.name}</p>`
            }).join('');
            const element = document.createElement('div');
            element.innerHTML = displayData;
            document.body.appendChild(element);
        } else {
            console.log({
                status: xhr.status,
                text:xhr.statusText
            })
        }
    }
    
    xhr.send();
}





//API info example
//console.log('hello world')
//const xhr2 = new XMLHttpRequest();

//let personaStartWars = {}


/*
xhr2.open('GET', 'https://swapi.dev/api/people/1/')
xhr2.onreadystatechange = () => {
    if(xhr2.readyState === 4 && xhr2.status === 200) {
        const text = document.createElement('p');
        text.textContent = xhr2.responseText;
        personaStartWars = JSON.parse(xhr2.responseText);
        document.body.appendChild(text);
 
     } else {
         console.log({
             status: xhr2.status,
             text:xhr2.statusText
         })
     }
}

xhr2.send();
*/