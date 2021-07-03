const store = (bool) => {
  if (bool) {
    const fruit1 = 'apple';
    const fruit2 = 'banana';
    const fruit3 = 'kiwi';
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
  } else {
    console.log('The Store is closed.');
  }
};

store(true);

const x = 1;
{
  // eslint-disable-next-line no-shadow
  const x = 2;
  console.log(x);
}
console.log(x);
