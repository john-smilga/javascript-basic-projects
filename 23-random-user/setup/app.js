import get from './getElement.js'
import getUser from './fetchUser.js'
import displayUser from './displayUser.js';


const btn = get('.btn');


const showUser = async () => {
    //get use from api
    const person = await getUser();
    displayUser(person)
    // display user
};

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser);