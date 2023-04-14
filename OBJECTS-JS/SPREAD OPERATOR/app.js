// SPREAD OPERATOR ...
// ALLOWS AN ITERABLE TO SPREAD / EXPAND INDIVIDUALLY INSIDE RECIEVER
// SPLIT INTO SINGLE ITEMS AND COPY THEM 

const udemy = 'udemy'
const letter = [...udemy];
// console.log(letters)

const boys = ['John', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
console.log(friends);


//reference
// const newfriends = friends
const newFriends = [...friends];
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);




