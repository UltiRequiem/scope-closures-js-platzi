const hello = "Another hello";

const helloWorld = () => {
  const scope = "Hello, I am just a local variable.";
  const func = () => {
    return scope;
  };
  console.log(func())
};

helloWorld();
console.log(hello);
