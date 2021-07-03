const buildCount = (i) => () => {
  // eslint-disable-next-line no-param-reassign
  console.log(i++);
};

const myCount = buildCount(1);
myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);
myOtherCount(); // 10
myOtherCount(); // 11
