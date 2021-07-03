const hello = 'Another hello';

const helloWorld = () => {
  const scope = 'Hello, I am just a local variable.';
  const func = () => scope;
  console.log(func());
};

helloWorld();
console.log(hello);
