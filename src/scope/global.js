/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

var MY_MESSAGE = 'Closures and Scope';
let world = 'World';
const helloWorld = 'Hello World';

const myFunction = () => {
  console.log(MY_MESSAGE);
  console.log(world);
  console.log(helloWorld);
};

var globalVar = 'Global';
const hiWorld = () => {
  globalVar = 'I am global.';
};

hiWorld();
console.log(globalVar);
