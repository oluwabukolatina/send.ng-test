const users = require('./src/users.json');
const contacts = require('./src/contacts.json');
const similarityStore = [];

const getRandomConstants = (arr) => {
  const randInt = Math.floor(Math.random() * (5499 - 1 + 1)) + 1;
  return arr[randInt];
};

const getSimilarity = (user1, user2) => {
  console.log('checking similarity')
  const denom = Math.floor((user1.contacts.length + user2.contacts.length) / 2);
  const similarContacts = intersection(user1.contacts, user2.contacts);

  return (similarContacts.length / denom) * 100;
};

const intersection = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};


for (let index = 0; index < users.length; index++) {
  const user = users[index];
  user.contacts = [];
  let endLoopAt = 699;
  if (index % 2 === 0 && index > 600) {
    endLoopAt = 899;
  }
  if (index % 2 !== 0 && index > 600) {
    endLoopAt = 799;
  }
  if (index % 2 !== 0 && index > 300 && index < 600) {
    endLoopAt = 749;
  }
  if (index % 2 === 0 && index > 300 && index < 600) {
    endLoopAt = 849;
  }
  for (let i = 0; i <= endLoopAt; i++) {
    user.contacts.push(getRandomConstants(contacts))
  }
}

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  for (let j = 0; j < users.length; j++) {
    const user2 = users[j];
    if(users[i].name !== users[j].name) {
      const similarity = getSimilarity(user, user2);
      console.log(similarity)
      if (similarity >= 30) {
        similarityStore.push({
          users: [user.name, user2.name],
          similarity,
        });
      }
    }
  }
  users.splice(i, 1);
}

console.log(similarityStore);