const person = () => {
  const saveName = 'Pedro';
  return {
    getname: () => saveName,
  };
};

console.log(person())
const newPerson = person();
console.log(newPerson.getname());
