// Template strigns/literal

//`` backtickss

/* const name = "bob";
const lastName = "sanders";
const age = 25; 

const phrase =
"My Full name is " + 
name + 
" " + 
lastName + 
"and Im " 
+ age +
"years old ";

//const phrase2 = ` ${name} ${lastName.toUpperCase}`
console.log(phrase); */ 

/* const person = {
    name: "Kyle",
    job: "Developer",
    hobbie: ["surfing, baking, bowling"],
};

const result = document.getElementById("result")

result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbie.map(item => {
    return `<li>${item}</li>`;
}).join("")}</ul>`; */

/* const author = "some author";
const statement = "some statement";

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`
console.log(quote);

const result = document.getElementById("result");
result.innerHTML = quote;

function highlight (text, ...vars){
    const awesomeText = text.map((item,index) => {
        return `${item} <strong class="blue">${vars[index] || ''}</strong>`
    })
    return awesomeText.join('')
}
*/

