const MY_MESSAGE = 'Closures and Scope';
const world = 'World';
const helloWorld = 'Hello World';

const myFunction = () => {
  console.log(MY_MESSAGE);
  console.log(world);
  console.log(helloWorld);
};

let globalVar = 'Global';
const hiWorld = () => {
  globalVar = 'I am global.';
};

hiWorld();
console.log(globalVar);
