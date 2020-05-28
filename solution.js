const users = require ("./src/users.json");
const contacts = require ("./src/contacts.json");


const getRandomConstants = arr => {
  const randInt = Math.floor(Math.random() * (5499 - 1 + 1)) + 1;
  return arr[randInt];
};

// console.log([...new Set(users.map(user => user.name))].length);
// console.log(contacts.length);
const userContacts = [];
for (let i = 0; i <= 8499; i++) {
  userContacts.push(getRandomConstants(contacts));
}

// console.log(userContacts[0]);


users.forEach((user, index) => {
  // console.log(user);
  user.contacts = []
  let endLoopAt = 699;
  if(index % 2 === 0 && index > 600) {
    endLoopAt = 899
  }
  if(index % 2 !== 0 && index > 600) {
    endLoopAt = 799
  }
  if(index % 2 !== 0 && index > 300  && index < 600) {
    endLoopAt = 749
  }
  if(index % 2 === 0 && index > 300  && index < 600) {
    endLoopAt = 849
  }
  for (let i = 0; i <= endLoopAt; i++) {
    user.contacts.push(getRandomConstants(userContacts))
  }
});


console.log(users[1]);
// console.log(JSON.stringify(users))
// const longestContact = users.find(user => user.contacts.length < 700)

// console.log(longestContact);
const user0 = users[0];
const user1 = users[1];

const combCon = [ ...user1.contacts, ...user0.contacts];

console.log(combCon[0]);
console.log([...new Set(combCon)].length);

console.log(combCon.length-[...new Set(combCon)].length)
const intersection = (arr1, arr2) => {
  return arr1.contacts.filter(element => arr2.contacts.includes(element));
}

console.log(intersection(user1, user0).length);
