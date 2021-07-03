// eslint-disable-next-line no-param-reassign
const buildCount = (i) => () => console.log(i++);

const myCount = buildCount(1);
myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);
myOtherCount(); // 10
myOtherCount(); // 11
