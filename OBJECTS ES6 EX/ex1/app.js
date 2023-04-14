//Global name space / hard to navigate

import { random, people } from './data.js';
import showPeople from './showPeople.js';


const container = document.querySelector('.container');
const btn = document.querySelector('.btn');



btn.addEventListener('click', () => {
    container.innerHTML = showPeople(people);
}
)